import React from "react";

const BounceSpinners = ({ size }) => {
    return (
        <div className="flex  justify-center">
            <div className="relative py-1 inline-flex">
                <div className={`${size} bg-white rounded-full animate-ping`}></div>
                <div className={`${size} bg-white rounded-full animate-ping mx-2 `}></div>
                <div className={`${size}  bg-white rounded-full animate-ping`}></div>
            </div>
        </div>
    );
};

export default BounceSpinners;
