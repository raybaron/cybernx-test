import React, { useState } from "react";

// TooltipProvider
const TooltipProvider = ({ children }) => {
    return <div className="relative">{children}</div>;
};

// Tooltip
const Tooltip = ({ children }) => {
    return <div>{children}</div>;
};
 
const TooltipContent = ({ children, isVisible }) => {
    if (!isVisible) return null;  
    return (
        <div className="absolute z-10 p-1  bg-gray-800 text-white text-[10px] top-[-20px] w-full text-center rounded shadow-lg">
            {children}
        </div>
    );
};
 
const TooltipTrigger = ({ children, asChild }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const triggerProps = {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    };

    if (asChild && React.isValidElement(children)) {
        return (
            <div className="relative inline-block">
                {React.cloneElement(children, { ...triggerProps })}
                <TooltipContent isVisible={isHovered}>
                    {children.props.tooltip}
                </TooltipContent>
            </div>
        );
    }

    return <div {...triggerProps}>{children}</div>;
}; 

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
