import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn uppercase text-white font-bold float-left  bg-gradient-to-r from-cyan-500 to-blue-500">{children}</button>
    );
};

export default PrimaryButton;