export const Card = ({ children,className }) => {
    return (
        <div className={`rounded-lg  ${className}`}>
            <div className='border shadow-sm rounded-lg  p-4'>
                {children}
            </div>
        </div>
    );
};

export const CardHeader = ({ children ,className}) => (
    <div className={`  ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => <div>{children}</div>;

export const CardDescription = ({children, className}) => {
    return (<p className={`text-black dark:text-white ${className}`}>{children}</p>);
}

export const CardTitle = ({ children,className }) => {
    return (<p className={className}>{children}</p>);
  };
  


