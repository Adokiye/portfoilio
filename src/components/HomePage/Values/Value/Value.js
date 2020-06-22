import React from 'react';

const Value = ({ icon, name, className = '' }) => {
    return (
        <div className={`col-6 values__item ${className}`}>
            {icon}
            <p className="mt-3">{name}</p>
        </div>
    );
};

export default Value;
