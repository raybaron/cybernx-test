"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, Search, Import } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import Sidebar from "@/components/core/sidebar"

// Mock data for vendors
const vendors = [
  {
    id: 1,
    name: "Acme Corp",
    type: "Supplier",
    criticality: "High",
    status: "Active",
    contact: "john@acme.com"
  },
  {
    id: 2,
    name: "TechPro Solutions",
    type: "Service Provider",
    criticality: "Medium",
    status: "Active",
    contact: "sarah@techpro.com"
  },
  {
    id: 3,
    name: "Global Logistics",
    type: "Logistics",
    criticality: "Critical",
    status: "Under Review",
    contact: "mike@globallogistics.com"
  },
  {
    id: 4,
    name: "Eco Friendly Materials",
    type: "Supplier",
    criticality: "Low",
    status: "Inactive",
    contact: "lisa@ecofriendly.com"
  },
  {
    id: 5,
    name: "Innovative Software Inc",
    type: "Technology",
    criticality: "High",
    status: "Active",
    contact: "david@innovative.com"
  }
]

export default function VendorListView() {
  const [searchTerm, setSearchTerm] = useState("")

  const { isDarkTheme, toggleTheme } = useTheme();

  const filteredVendors = vendors.filter(
    vendor =>
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.contact.toLowerCase().includes(searchTerm.toLowerCase())
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
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getStatusColor = status => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      case "under review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
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
                <CardHeader className=" mb-5 pb-5 flex flex-row items-center justify-between border-b dark:border-gray-700">
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
                  <div className="flex justify-between items-center mb-6">
                    <div className="relative w-64">
                      <Input
                        type="text"
                        placeholder="Search vendors..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-md w-full dark:bg-gray-700 dark:text-gray-100"
                      />
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                      Add New Vendor
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-left dark:text-gray-300">
                          Name
                        </TableHead>
                        <TableHead className="text-left dark:text-gray-300">
                          Type
                        </TableHead>
                        <TableHead className="text-left dark:text-gray-300">
                          Criticality
                        </TableHead>
                        <TableHead className="text-left dark:text-gray-300">
                          Status
                        </TableHead>
                        <TableHead className="text-left dark:text-gray-300">
                          Contact
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredVendors.map(vendor => (
                        <TableRow
                          key={vendor.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <TableCell className="font-medium dark:text-gray-300">
                            {vendor.name}
                          </TableCell>
                          <TableCell className="dark:text-gray-300">
                            {vendor.type}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={`font-semibold ${getCriticalityColor(
                                vendor.criticality
                              )}`}
                            >
                              {vendor.criticality}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={`font-semibold ${getStatusColor(
                                vendor.status
                              )}`}
                            >
                              {vendor.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="dark:text-gray-300">
                            {vendor.contact}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
