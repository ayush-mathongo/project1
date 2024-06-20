"use client";
import React, { useState } from 'react';
import { FaClock,  FaInbox, FaUsers, FaInfoCircle, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'; 

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('Dashboard');

  const sidebarItems = [
    { name: 'Dashboard', icon: FaClock },
    { name: 'Inbox', icon: FaInbox, badge: 'Pro' },
    { name: 'Users', icon: FaUsers, badge: 'Pro' },
    { name: 'About', icon: FaInfoCircle },
    { name: 'Sign In', icon: FaSignInAlt },
    { name: 'Sign Out', icon: FaSignOutAlt }
  ];

  const handleTabClick = (name:string) => {
    setActiveTab(name);
  };

  return (
    <div>
      <button 
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full pt-16'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarItems.map(item => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                    activeTab === item.name ? 'bg-gray-200 dark:bg-gray-600' : ''
                  }`}
                  onClick={() => handleTabClick(item.name)}
                >
                  <item.icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">{item.name}</span>
                  {item.badge && (
                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
