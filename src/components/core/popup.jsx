const Popup = ({ vendor, onClose }) => {
    if (!vendor) return null;  

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg w-96 p-6">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 className="text-lg font-semibold">{vendor.name} Details</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                        X
                    </button>
                </div>
                <div className="space-y-2">
                    <p>
                        <strong>Type:</strong> {vendor.type}
                    </p>
                    <p>
                        <strong>Criticality:</strong> {vendor.criticality}
                    </p>
                    <p>
                        <strong>Status:</strong> {vendor.status}
                    </p>
                    <p>
                        <strong>Contact:</strong> {vendor.contact}
                    </p>
                    <p>
                        <strong>Service Provided:</strong> {vendor.serviceProvided}
                    </p>
                </div>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
