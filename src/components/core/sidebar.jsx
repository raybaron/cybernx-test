'use client'
import { Button } from "@/components/ui/button"
import {
    Home,
    Users,
    FileText,
    Settings,
    LogOut,
} from "lucide-react";
import { useRouter } from 'next/navigation';
import { useTheme } from "@/context/ThemeContext";


const Sidebar = () => {
    const { isDarkTheme } = useTheme();

    const router = useRouter();

    const handleRedirect = (targetRoute) => {
        router.push(targetRoute);
    };

    return (
        <aside className={`bg-white dark:bg-gray-800 w-64 min-h-screen p-4 fixed ${isDarkTheme ? "dark" : ""}`}>
            <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" onClick={() => handleRedirect('/')}>
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => handleRedirect('/vendor-list')}>
                    <Users className="mr-2 h-4 w-4" />
                    Vendors
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => handleRedirect('/form')}>
                    <FileText className="mr-2 h-4 w-4" />
                    Reports
                </Button> 
            </nav>
            <div className="absolute bottom-4">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600 dark:text-red-400"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;