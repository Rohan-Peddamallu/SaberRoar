"use client";

import { useEffect, useState } from "react";
import { UserButton } from "@stackframe/stack";
import { useUserSync } from "@/hooks/useUserSync";

export function AuthenticatedHome() {
  const { stackUser, dbUser, loading, error, syncUser } = useUserSync();
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [isUploading, setIsUploading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // File upload handling
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const validTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/quicktime'];
      const maxSize = 2 * 1024 * 1024 * 1024; // 2GB
      
      if (!validTypes.includes(file.type)) {
        alert(`${file.name} is not a supported video format. Please use MP4, MOV, or AVI.`);
        return false;
      }
      
      if (file.size > maxSize) {
        alert(`${file.name} is too large. Maximum file size is 2GB.`);
        return false;
      }
      
      return true;
    });
    
    setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const validFiles = files.filter(file => {
      const validTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/quicktime'];
      const maxSize = 2 * 1024 * 1024 * 1024; // 2GB
      
      if (!validTypes.includes(file.type)) {
        alert(`${file.name} is not a supported video format. Please use MP4, MOV, or AVI.`);
        return false;
      }
      
      if (file.size > maxSize) {
        alert(`${file.name} is too large. Maximum file size is 2GB.`);
        return false;
      }
      
      return true;
    });
    
    setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const simulateUpload = async (file: File) => {
    return new Promise<void>((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          resolve();
        }
        setUploadProgress(prev => ({ ...prev, [file.name]: progress }));
      }, 500);
    });
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert('Please select files to upload');
      return;
    }

    setIsUploading(true);
    
    try {
      // Simulate upload for each file
      for (const file of selectedFiles) {
        await simulateUpload(file);
      }
      
      alert('Files uploaded successfully!');
      setSelectedFiles([]);
      setUploadProgress({});
    } catch (error) {
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  // Sync user on mount if not already synced
  useEffect(() => {
    if (stackUser && !dbUser && !loading) {
      syncUser();
    }
  }, [stackUser, dbUser, loading, syncUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2" style={{ borderColor: '#e6bf00' }}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-white">
        <div className="text-black text-center">
          Error: {error}
        </div>
        <button 
          onClick={syncUser}
          className="px-4 py-2 text-white rounded hover:opacity-90"
          style={{ backgroundColor: '#e6bf00' }}
        >
          Retry Sync
        </button>
      </div>
    );
  }

  const renderDashboard = () => (
    <div className="px-4 py-6 sm:px-0">
      {/* Welcome Section */}
      <div className={`overflow-hidden shadow rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-[#b3a169]'}`}>
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg leading-6 font-medium text-white mb-2">
            Welcome back, {dbUser?.name || stackUser?.displayName || "Student"}!
          </h2>
          <p className="text-sm text-white opacity-90">
            Ready to create amazing content? Upload footage, check equipment, and submit your work.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div 
          onClick={() => setActivePage('upload')}
          className={`overflow-hidden shadow rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'
          }`}
        >
          <div className="px-4 py-5 sm:p-6 text-center">
            <div className="p-3 rounded-lg mx-auto mb-4 w-fit bg-[#e6bf00]">
              <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Upload Footage</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Submit your video content</p>
          </div>
        </div>

        <div 
          onClick={() => setActivePage('equipment')}
          className={`overflow-hidden shadow rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'
          }`}
        >
          <div className="px-4 py-5 sm:p-6 text-center">
            <div className="p-3 rounded-lg mx-auto mb-4 w-fit bg-[#e6bf00]">
              <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Equipment</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Sign out cameras & gear</p>
          </div>
        </div>

        <div 
          onClick={() => setActivePage('submissions')}
          className={`overflow-hidden shadow rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'
          }`}
        >
          <div className="px-4 py-5 sm:p-6 text-center">
            <div className="p-3 rounded-lg mx-auto mb-4 w-fit bg-[#e6bf00]">
              <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Submissions</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Scripts & show segments</p>
          </div>
        </div>

        <div 
          onClick={() => setActivePage('drive')}
          className={`overflow-hidden shadow rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'
          }`}
        >
          <div className="px-4 py-5 sm:p-6 text-center">
            <div className="p-3 rounded-lg mx-auto mb-4 w-fit bg-[#e6bf00]">
              <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Google Drive</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Browse video library</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Recent Activity</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { action: 'Uploaded morning segment footage', time: '2 hours ago' },
              { action: 'Checked out Camera Kit #2', time: '1 day ago' },
              { action: 'Submitted sports interview script', time: '3 days ago' }
            ].map((activity, index) => (
              <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <span className={`${darkMode ? 'text-white' : 'text-black'}`}>{activity.action}</span>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-[#b3a169]'}`}>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Quick Links</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className={`block p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
              <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>SaberRoar Google Drive</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Access all video files and resources</p>
            </a>
            <a href="mailto:mrdeane@school.edu" className={`block p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
              <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Contact Mr. Deane</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Questions about equipment or projects</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEquipmentPage = () => (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Equipment Management</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Sign out cameras, microphones, and other broadcast equipment</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Available Equipment */}
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Available Equipment</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { item: 'Camera Kit #1', description: 'Canon DSLR with tripod', available: true },
              { item: 'Camera Kit #2', description: 'Sony camcorder with stabilizer', available: false },
              { item: 'Microphone Set A', description: 'Wireless lapel mics (2)', available: true },
              { item: 'Microphone Set B', description: 'Boom mic with windscreen', available: true },
              { item: 'Lighting Kit #1', description: '3-point lighting setup', available: false },
              { item: 'Tripod Set #3', description: 'Heavy-duty tripods (2)', available: true }
            ].map((equipment, index) => (
              <div key={index} className={`flex items-center justify-between p-4 rounded-lg border-2 ${equipment.available ? 'border-[#e6bf00]' : 'border-[#b3a169]'}`}>
                <div className="flex-1">
                  <h4 className={`${darkMode ? 'text-white' : 'text-black'}`}>{equipment.item}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>{equipment.description}</p>
                </div>
                <div className="text-right">
                  {equipment.available ? (
                    <button className={`px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:scale-105 ${darkMode ? 'text-black bg-[#e6bf00]' : 'text-black bg-[#e6bf00]'}`}>
                      Sign Out
                    </button>
                  ) : (
                    <span className={`px-4 py-2 rounded-lg font-bold ${darkMode ? 'text-white bg-[#b3a169]' : 'text-white bg-[#b3a169]'}`}>
                      Checked Out
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Equipment */}
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>My Equipment</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { item: 'Camera Kit #3', checkedOut: '3 days ago', dueDate: 'Tomorrow' },
              { item: 'Microphone Set C', checkedOut: '1 week ago', dueDate: 'Friday' }
            ].map((equipment, index) => (
              <div key={index} className={`flex items-center justify-between p-4 rounded-lg border-2 ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
                <div className="flex-1">
                  <h4 className={`${darkMode ? 'text-white' : 'text-black'}`}>{equipment.item}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Checked out: {equipment.checkedOut}</p>
                  <p className="text-sm font-medium text-red-600">Due: {equipment.dueDate}</p>
                </div>
                <button className={`px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:scale-105 ${darkMode ? 'text-white bg-[#b3a169]' : 'text-white bg-[#b3a169]'}`}>
                  Return
                </button>
              </div>
            ))}
            {/* Request Form */}
            <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700 border-[#e6bf00]' : 'bg-gray-50 border-[#e6bf00]'}`}>
              <h4 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold mb-4`}>Request Equipment</h4>
              <form className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Equipment Needed</label>
                  <select className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`}>
                    <option>Select equipment...</option>
                    <option>Camera Kit</option>
                    <option>Microphone Set</option>
                    <option>Lighting Kit</option>
                    <option>Tripod</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Project Description</label>
                  <textarea className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`} rows={3} placeholder="Describe what you'll be filming..."></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Start Date</label>
                    <input type="date" className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Return Date</label>
                    <input type="date" className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`} />
                  </div>
                </div>
                <button type="submit" className={`w-full px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:scale-105 ${darkMode ? 'text-black bg-[#e6bf00]' : 'text-black bg-[#e6bf00]'}`}>
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUploadPage = () => (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Upload Footage</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Submit your video content for review and editing</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className="px-4 py-5 sm:p-6">
            {/* File Upload Area */}
            <div 
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors duration-200 hover:border-solid ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <svg className="mx-auto h-16 w-16 mb-4" style={{ color: '#e6bf00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className={`text-xl font-medium mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Drop your files here</p>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>or click to browse</p>
              
              {/* Hidden file input */}
              <input
                type="file"
                multiple
                accept="video/mp4,video/mov,video/avi,video/quicktime"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              
              <label 
                htmlFor="file-upload"
                className={`inline-block px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 cursor-pointer ${darkMode ? 'text-black bg-[#e6bf00]' : 'text-black bg-[#e6bf00]'}`}
              >
                Choose Files
              </label>
            </div>

            {/* Selected Files Display */}
            {selectedFiles.length > 0 && (
              <div className="mt-6">
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Selected Files ({selectedFiles.length})</h4>
                <div className="space-y-3">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className={`flex items-center justify-between p-3 rounded-lg border-2 ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
                      <div className="flex-1">
                        <p className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{file.name}</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                        {uploadProgress[file.name] !== undefined && (
                          <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full transition-all duration-300"
                                style={{ 
                                  backgroundColor: '#e6bf00',
                                  width: `${uploadProgress[file.name]}%`
                                }}
                              ></div>
                            </div>
                            <p className={`text-xs mt-1 ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>
                              {Math.round(uploadProgress[file.name])}% uploaded
                            </p>
                          </div>
                        )}
                      </div>
                      {!isUploading && (
                        <button
                          onClick={() => removeFile(index)}
                          className={`ml-4 px-3 py-1 rounded hover:opacity-80 ${darkMode ? 'text-white bg-[#b3a169]' : 'text-white bg-[#b3a169]'}`}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>File Information</h4>
                <form className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Project Title</label>
                    <input type="text" className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`} placeholder="e.g., Morning Announcements 11/15" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Description</label>
                    <textarea className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`} rows={3} placeholder="Brief description of the content..."></textarea>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Date Filmed</label>
                    <input type="date" className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Category</label>
                    <select className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`}>
                      <option>Select category...</option>
                      <option>Morning Announcements</option>
                      <option>Sports</option>
                      <option>Interviews</option>
                      <option>Events</option>
                      <option>Other</option>
                    </select>
                  </div>
                </form>
              </div>
              
              <div>
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Upload Guidelines</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 mt-0.5 mr-2" style={{ color: '#e6bf00' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Maximum file size: 2GB per file</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 mt-0.5 mr-2" style={{ color: '#e6bf00' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Accepted formats: MP4, MOV, AVI</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 mt-0.5 mr-2" style={{ color: '#e6bf00' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Include project name in filename</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 mt-0.5 mr-2" style={{ color: '#e6bf00' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Files are automatically saved to Google Drive</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleUpload}
                  disabled={selectedFiles.length === 0 || isUploading}
                  className={`w-full mt-6 px-4 py-2 rounded-lg font-bold transition-all duration-200 ${
                    selectedFiles.length > 0 && !isUploading 
                      ? 'hover:scale-105 text-black' 
                      : 'opacity-50 cursor-not-allowed text-gray-500'
                  }`}
                  style={{ 
                    backgroundColor: selectedFiles.length > 0 && !isUploading ? '#e6bf00' : '#cccccc'
                  }}
                >
                  {isUploading ? 'Uploading...' : `Upload ${selectedFiles.length} File${selectedFiles.length !== 1 ? 's' : ''}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubmissionsPage = () => (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Submissions</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Submit scripts, project ideas, and track your submissions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Submit New Content</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <form className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Submission Type</label>
                <select className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`}>
                  <option>Select type...</option>
                  <option>Script</option>
                  <option>Project Idea</option>
                  <option>Show Segment</option>
                  <option>Interview Questions</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Title</label>
                <input type="text" className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`} placeholder="Title of your submission..." />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Content</label>
                <textarea className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`} rows={6} placeholder="Enter your script, idea, or content here..."></textarea>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Additional Notes</label>
                <textarea className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-[#b3a169]'}`} rows={3} placeholder="Any additional information..."></textarea>
              </div>
              <button type="submit" className={`w-full px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:scale-105 ${darkMode ? 'text-black bg-[#e6bf00]' : 'text-black bg-[#e6bf00]'}`}>
                Submit for Review
              </button>
            </form>
          </div>
        </div>

        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>My Submissions</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { title: 'Morning Announcement Script', type: 'Script', date: '2 days ago', status: 'Approved', feedback: 'Great work! Minor edits needed.' },
              { title: 'Sports Segment Video', type: 'Show Segment', date: '1 week ago', status: 'Under Review', feedback: null },
              { title: 'Interview Questions - Principal', type: 'Interview Questions', date: '2 weeks ago', status: 'Approved', feedback: 'Excellent questions!' }
            ].map((submission, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className={`${darkMode ? 'text-white' : 'text-black'}`}>{submission.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>{submission.type} • {submission.date}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    submission.status === 'Approved' 
                      ? 'text-black' 
                      : 'text-white'
                  }`} style={{ 
                    backgroundColor: submission.status === 'Approved' ? '#e6bf00' : '#b3a169'
                  }}>
                    {submission.status}
                  </span>
                </div>
                {submission.feedback && (
                  <div className={`mt-2 p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>
                      <strong>Feedback:</strong> {submission.feedback}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDrivePage = () => (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Google Drive Library</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Browse and access all SaberRoar video files and resources</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          { name: 'Morning Announcements', count: '45 videos', updated: '2 days ago' },
          { name: 'Sports Segments', count: '23 videos', updated: '1 week ago' },
          { name: 'Interviews', count: '12 videos', updated: '3 days ago' },
          { name: 'School Events', count: '34 videos', updated: '1 day ago' },
          { name: 'Templates & Scripts', count: '18 files', updated: '1 week ago' },
          { name: 'Raw Footage', count: '67 videos', updated: '1 day ago' }
        ].map((folder, index) => (
          <div key={index} className={`overflow-hidden shadow rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
            <div className="px-4 py-5 sm:p-6 text-center">
              <div className="p-4 rounded-lg mx-auto mb-4 w-fit bg-[#e6bf00]">
                <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{folder.name}</h3>
              <p className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>{folder.count}</p>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Updated {folder.updated}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a 
          href="https://drive.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 ${darkMode ? 'text-black bg-[#e6bf00]' : 'text-black bg-[#e6bf00]'}`}
        >
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Open Full Google Drive
        </a>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activePage) {
      case 'equipment':
        return renderEquipmentPage();
      case 'upload':
        return renderUploadPage();
      case 'submissions':
        return renderSubmissionsPage();
      case 'drive':
        return renderDrivePage();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`shadow transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-[#b3a169]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                SaberRoar Student Portal
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              <UserButton />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className={`shadow-sm border-b-2 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-800 border-gray-600' 
          : 'bg-gray-50 border-[#b3a169]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: '🏠' },
              { id: 'upload', name: 'Upload Footage', icon: '📹' },
              { id: 'equipment', name: 'Equipment', icon: '📷' },
              { id: 'submissions', name: 'Submissions', icon: '📝' },
              { id: 'drive', name: 'Google Drive', icon: '💾' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePage(tab.id)}
                className={`py-4 px-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                  activePage === tab.id
                    ? `${darkMode ? 'text-white' : 'text-[#b3a169]'} border-[#e6bf00]`
                    : `${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} border-transparent`
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
}