"use client";

import { useState, useEffect } from "react";
import { UserButton } from "@stackframe/stack";

export default function Teacher() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

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

  const renderDashboard = () => (
    <div className="px-4 py-6 sm:px-0">
      {/* Welcome Section */}
      <div className={`overflow-hidden shadow rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-[#b3a169]'}`}>
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg leading-6 font-medium text-white mb-2">
            Welcome back, Mr. Deane! 👋
          </h2>
          <p className="text-sm text-white opacity-90">
            Manage student submissions, equipment, and broadcast schedules all in one place.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-[#e6bf00]">
                <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>23</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Active Students</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-[#e6bf00]">
                <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>7</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Pending Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-[#e6bf00]">
                <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>5</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Equipment Out</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-[#e6bf00]">
                <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>3</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Shows This Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Recent Student Activity</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { student: 'Sarah M.', action: 'Uploaded morning segment footage', time: '2 hours ago' },
              { student: 'Jake L.', action: 'Submitted sports interview script', time: '4 hours ago' },
              { student: 'Emma K.', action: 'Checked out Camera Kit #2', time: '1 day ago' }
            ].map((activity, index) => (
              <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div>
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{activity.student}</span>
                  <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{activity.action}</span>
                </div>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-[#b3a169]'}`}>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Quick Actions</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            <button 
              onClick={() => setActivePage('submissions')}
              className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 text-left"
              style={{ borderColor: '#b3a169' }}
            >
              <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Review Submissions</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>7 scripts and videos waiting for review</p>
            </button>
            <button 
              onClick={() => setActivePage('equipment')}
              className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 text-left"
              style={{ borderColor: '#b3a169' }}
            >
              <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Manage Equipment</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Check equipment status and requests</p>
            </button>
            <button 
              onClick={() => setActivePage('schedule')}
              className="w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 text-left"
              style={{ borderColor: '#b3a169' }}
            >
              <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Schedule Shows</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Plan upcoming broadcasts and segments</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubmissions = () => (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Student Submissions</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Review and approve student scripts, videos, and project ideas</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Pending Reviews</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { title: 'Morning Announcement Script', student: 'Sarah M.', type: 'Script', date: '2 hours ago' },
              { title: 'Basketball Game Highlights', student: 'Jake L.', type: 'Video', date: '4 hours ago' },
              { title: 'Student Interview Questions', student: 'Emma K.', type: 'Document', date: '1 day ago' }
            ].map((submission, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-[#b3a169] bg-gray-50'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{submission.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>by {submission.student} • {submission.type}</p>
                  </div>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{submission.date}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded text-black font-medium bg-[#e6bf00] hover:opacity-90 transition-opacity">
                    Approve
                  </button>
                  <button className={`px-3 py-1 rounded font-medium transition-opacity hover:opacity-90 ${darkMode ? 'bg-gray-600 text-white' : 'bg-[#b3a169] text-white'}`}>
                    Request Changes
                  </button>
                  <button className="px-3 py-1 rounded font-medium bg-red-500 text-white hover:opacity-90 transition-opacity">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Approved This Week</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { title: 'Sports Segment Introduction', student: 'Mike R.', approved: '2 days ago' },
              { title: 'Club Spotlight Script', student: 'Lisa T.', approved: '3 days ago' },
              { title: 'Weather Update Format', student: 'Alex P.', approved: '4 days ago' }
            ].map((submission, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
                <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{submission.title}</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>by {submission.student}</p>
                <span className="inline-block mt-2 px-2 py-1 text-xs rounded bg-[#e6bf00] text-black font-medium">
                  Approved {submission.approved}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEquipment = () => (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Equipment Management</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Monitor equipment checkout and approve requests</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Currently Checked Out</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { item: 'Camera Kit #1', student: 'Sarah M.', dueDate: 'Tomorrow', overdue: false },
              { item: 'Microphone Set A', student: 'Jake L.', dueDate: 'Today', overdue: false },
              { item: 'Lighting Kit #2', student: 'Emma K.', dueDate: 'Yesterday', overdue: true }
            ].map((equipment, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${equipment.overdue ? 'border-red-500' : (darkMode ? 'border-gray-600' : 'border-[#b3a169]')}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{equipment.item}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Checked out by: {equipment.student}</p>
                    <p className={`text-sm ${equipment.overdue ? 'text-red-500 font-medium' : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}>
                      Due: {equipment.dueDate}
                    </p>
                  </div>
                  {equipment.overdue && (
                    <span className="px-2 py-1 text-xs rounded bg-red-500 text-white font-medium">
                      OVERDUE
                    </span>
                  )}
                </div>
                <button className={`mt-2 px-3 py-1 rounded font-medium transition-opacity hover:opacity-90 ${darkMode ? 'bg-gray-600 text-white' : 'bg-[#b3a169] text-white'}`}>
                  Mark Returned
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Equipment Requests</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { student: 'Mike R.', equipment: 'Camera Kit #3', project: 'Football Game Coverage', requestDate: '2 hours ago' },
              { student: 'Lisa T.', equipment: 'Tripod Set', project: 'Club Interview', requestDate: '1 day ago' }
            ].map((request, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
                <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{request.student}</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Requesting: {request.equipment}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Project: {request.project}</p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{request.requestDate}</p>
                <div className="flex space-x-2 mt-3">
                  <button className="px-3 py-1 rounded text-black font-medium bg-[#e6bf00] hover:opacity-90 transition-opacity">
                    Approve
                  </button>
                  <button className="px-3 py-1 rounded font-medium bg-red-500 text-white hover:opacity-90 transition-opacity">
                    Deny
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Broadcast Schedule</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Plan and manage upcoming shows and filming schedules</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>This Week's Shows</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            {[
              { show: 'Morning Announcements', date: 'Monday', time: '8:00 AM', host: 'Sarah M.' },
              { show: 'Sports Update', date: 'Wednesday', time: '2:30 PM', host: 'Jake L.' },
              { show: 'Friday Features', date: 'Friday', time: '1:00 PM', host: 'Emma K.' }
            ].map((show, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
                <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{show.show}</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>{show.date} at {show.time}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-[#b3a169]'}`}>Host: {show.host}</p>
                <button className="mt-2 px-3 py-1 rounded text-black font-medium bg-[#e6bf00] hover:opacity-90 transition-opacity">
                  Edit Schedule
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={`overflow-hidden shadow rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#b3a169]'}`}>
          <div className={`px-4 py-5 sm:p-6 border-b ${darkMode ? 'border-gray-600' : 'border-[#b3a169]'}`}>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Add New Show</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <form className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Show Title</label>
                <input 
                  type="text" 
                  className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-[#b3a169]'}`}
                  placeholder="e.g., Special Event Coverage" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Date</label>
                  <input 
                    type="date" 
                    className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-[#b3a169]'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Time</label>
                  <input 
                    type="time" 
                    className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-[#b3a169]'}`}
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Assigned Host</label>
                <select className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-[#b3a169]'}`}>
                  <option>Select student...</option>
                  <option>Sarah M.</option>
                  <option>Jake L.</option>
                  <option>Emma K.</option>
                  <option>Mike R.</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Description</label>
                <textarea 
                  className={`w-full p-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-[#b3a169]'}`}
                  rows={3} 
                  placeholder="Show description and notes..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 rounded-lg text-black font-bold bg-[#e6bf00] hover:opacity-90 transition-opacity"
              >
                Schedule Show
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activePage) {
      case 'submissions':
        return renderSubmissions();
      case 'equipment':
        return renderEquipment();
      case 'schedule':
        return renderSchedule();
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
                SaberRoar Teacher Dashboard
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
              { id: 'dashboard', name: 'Dashboard', icon: '📊' },
              { id: 'submissions', name: 'Review Submissions', icon: '📝' },
              { id: 'equipment', name: 'Equipment', icon: '📷' },
              { id: 'schedule', name: 'Schedule', icon: '📅' }
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