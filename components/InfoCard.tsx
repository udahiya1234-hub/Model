
import React from 'react';

interface InfoCardProps {
    title: string;
    children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
    return (
        <div className="bg-secondary p-6 rounded-xl shadow-lg h-full">
            <h3 className="text-xl font-bold text-text-primary mb-4 border-b border-gray-600 pb-2">{title}</h3>
            <div className="prose prose-invert prose-sm max-w-none">
                {children}
            </div>
        </div>
    );
};

export default InfoCard;
