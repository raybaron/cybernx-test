const Badge = ({children,className}) => {
    return ( <div className={`text-center rounded-xl ${className}`}>{children}</div> );
}
 
export {Badge};