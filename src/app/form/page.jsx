"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { Moon, Sun, Search, Info } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import Sidebar from "@/components/core/sidebar"
import { useTheme } from "@/context/ThemeContext"
import { vendors } from "@/utils/contants"
import Popup from "@/components/core/popup"
// Mock data for demonstration


export default function EnhancedVendorListView() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isDarkTheme, toggleTheme } = useTheme();
  const [selectedVendor, setSelectedVendor] = useState(null);

  const filteredVendors = vendors.filter(
    vendor =>
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.serviceProvided.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getCriticalityColor = criticality => {
    switch (criticality.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const getStatusColor = status => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
      case "pending":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="flex">
          <Sidebar />
          <div className="w-full h-full ml-64">
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
              <Card className="w-full mx-auto bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader className="  mb-5 pb-5 flex flex-row items-center justify-between border-b dark:border-gray-700">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Vendor List
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Switch checked={isDarkTheme} onCheckedChange={toggleTheme} />
                    <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Label
                      htmlFor="search"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      Search Vendors
                    </Label>
                    <div className="flex mt-1">
                      <Input
                        id="search"
                        type="text"
                        placeholder="Search by name, type, or service"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="flex-grow bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                      <Button className="ml-2 bg-blue-700 hover:bg-blue-800 text-white">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-gray-700 dark:text-gray-300">
                            Name
                          </TableHead>
                          <TableHead className="text-gray-700 dark:text-gray-300">
                            Type
                          </TableHead>
                          <TableHead className="text-gray-700 dark:text-gray-300">
                            Criticality
                          </TableHead>
                          <TableHead className="text-gray-700 dark:text-gray-300">
                            Status
                          </TableHead>
                          <TableHead className="text-gray-700 dark:text-gray-300">
                            Contact
                          </TableHead>
                          <TableHead className="text-gray-700 dark:text-gray-300">
                            Service Provided
                          </TableHead>
                          <TableHead className="text-gray-700 dark:text-gray-300">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredVendors.map(vendor => (
                          <TableRow
                            key={vendor.id}
                            className="hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                              {vendor.name}
                            </TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-300">
                              {vendor.type}
                            </TableCell>
                            <TableCell>
                              <Badge
                                className={`${getCriticalityColor(
                                  vendor.criticality
                                )}`}
                              >
                                {vendor.criticality}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={`${getStatusColor(vendor.status)}`}>
                                {vendor.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-300">
                              {vendor.contact}
                            </TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-300">
                              {vendor.serviceProvided}
                            </TableCell>
                            <TableCell>
                              <TooltipProvider>
                                <TooltipTrigger asChild>
                                  <button
                                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 flex items-center gap-1 p-2 rounded"
                                    onClick={() => setSelectedVendor(vendor)}

                                    tooltip={<span>View details</span>} // Tooltip content
                                  >
                                    <Info className="h-4 w-4" />
                                    Details
                                  </button>
                                </TooltipTrigger>
                              </TooltipProvider>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Popup vendor={selectedVendor} onClose={() => setSelectedVendor(null)} />

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
