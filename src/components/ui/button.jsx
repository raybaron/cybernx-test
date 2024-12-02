const Button = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded flex gap-3 items-center ${className}`}
        >
            {children}
        </button>
    );
};

export { Button };
