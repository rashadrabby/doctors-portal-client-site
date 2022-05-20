import React from 'react';

const Loading = () => {
    return (
        <div className="flex h-96 items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-600 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;