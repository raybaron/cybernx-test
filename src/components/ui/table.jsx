



export const Table = ({ children }) => <table className="w-full">{children}</table>;

export const TableHeader = ({ children }) => (
    <thead className=" bg-gray-200 dark:bg-gray-600">{children}</thead>
);

export const TableBody = ({ children, className }) => {
    return (<tbody className={className}>{children}</tbody>);
}
export const TableHead = ({ children, className }) => {
    return (<th className={`px-4 py-2 text-black text-start ${className}`}>{children}</th>);
}

export const TableRow = ({ children, className }) => <tr className={className}>{children}</tr>;

export const TableCell = ({ children, className }) => (
    <td className={`px-4 py-2 text-gray-800 ${className}`}>{children}</td>
);


