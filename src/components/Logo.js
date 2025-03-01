import React from "react";

export const Logo = ({ width = 50, height = 50 }) => {
    return (
        <img 
            src={logo} 
            alt="Logo" 
            width={width} 
            height={height} 
            style={{ cursor: "pointer" }}
        />
    );
};

