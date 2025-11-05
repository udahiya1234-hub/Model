import React from 'react';

interface MetricCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon }) => {
    return (
        <div className="bg-secondary p-6 rounded-xl shadow-lg flex items-center space-x-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl border border-transparent hover:border-accent">
            <div className="bg-primary p-4 rounded-full">
                {icon}
            </div>
            <div>
                <p className="text-sm text-text-secondary font-medium">{title}</p>
                <p className="text-3xl font-bold text-text-primary">{value}</p>
            </div>
        </div>
    );
};

export default MetricCard;