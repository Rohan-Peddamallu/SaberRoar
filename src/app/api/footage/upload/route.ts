import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "../../../../stack";
import { syncCurrentUser } from "../../../../lib/sync-user";
import { prisma } from "../../../../lib/db";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

export async function POST(request: NextRequest) {
  try {
    // Verify user is authenticated
    const stackUser = await stackServerApp.getUser();

    if (!stackUser) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Ensure user exists in database
    await syncCurrentUser();

    // Get user from database
    const dbUser = await prisma.user.findUnique({
      where: { stackId: stackUser.id },
    });

    if (!dbUser) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/quicktime'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only MP4, MOV, AVI, and QuickTime files are allowed." },
        { status: 400 }
      );
    }

    // Validate file size (2GB max)
    const maxSize = 2 * 1024 * 1024 * 1024; // 2GB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 2GB." },
        { status: 400 }
      );
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), "public", "uploads", "footage");
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `${dbUser.id}_${timestamp}.${fileExtension}`;
    const filePath = join(uploadsDir, fileName);

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Save to database
    const footageUpload = await prisma.footageUpload.create({
      data: {
        userId: dbUser.id,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        filePath: `/uploads/footage/${fileName}`,
        title: title || null,
        description: description || null,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      upload: footageUpload,
    });
  } catch (error) {
    console.error("Error uploading footage:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify user is authenticated
    const stackUser = await stackServerApp.getUser();

    if (!stackUser) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Get all footage uploads
    const uploads = await prisma.footageUpload.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        uploadDate: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      uploads,
    });
  } catch (error) {
    console.error("Error fetching footage uploads:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
