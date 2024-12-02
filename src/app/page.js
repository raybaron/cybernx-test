"use client" 
import { useTheme } from "@/context/ThemeContext"; 
import Dashboard from "@/components/core/dashboard"; 
import Sidebar from "@/components/core/sidebar";

export default function EnhancedVendorDashboard({ children }) {
  const { isDarkTheme, toggleTheme } = useTheme(); 

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="flex">
          <Sidebar />
          <div className="w-full ml-64">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>

  )
}
