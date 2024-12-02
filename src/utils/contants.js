export const vendors = [
    {
        id: 1,
        name: "Acme Corp",
        type: "Supplier",
        criticality: "High",
        status: "Active",
        contact: "john@acme.com",
        serviceProvided: "Raw Materials"
    },
    {
        id: 2,
        name: "TechPro Solutions",
        type: "Service Provider",
        criticality: "Medium",
        status: "Active",
        contact: "sarah@techpro.com",
        serviceProvided: "IT Support"
    },
    {
        id: 3,
        name: "Global Logistics",
        type: "Logistics",
        criticality: "Critical",
        status: "Active",
        contact: "mike@globallogistics.com",
        serviceProvided: "Shipping"
    },
    {
        id: 4,
        name: "EcoPackage",
        type: "Supplier",
        criticality: "Low",
        status: "Inactive",
        contact: "lisa@ecopackage.com",
        serviceProvided: "Packaging Materials"
    },
    {
        id: 5,
        name: "SecureNet",
        type: "Service Provider",
        criticality: "High",
        status: "Pending",
        contact: "alex@securenet.com",
        serviceProvided: "Cybersecurity"
    }
]

export const vendorTypeData = [
    { name: "Supplier", value: 2 },
    { name: "Service Provider", value: 2 },
    { name: "Logistics", value: 1 }
]

export const criticalityData = [
    { name: "Low", value: 1 },
    { name: "Medium", value: 1 },
    { name: "High", value: 2 },
    { name: "Critical", value: 1 }
]

export const statusData = [
    { name: "Active", value: 3 },
    { name: "Inactive", value: 1 },
    { name: "Pending", value: 1 }
]


export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]