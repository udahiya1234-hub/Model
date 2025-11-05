
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ModelPerformance } from '../types';

interface ComparisonChartProps {
    data: ModelPerformance[];
}

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-primary p-4 border border-gray-600 rounded-lg shadow-xl">
                <p className="font-bold text-text-primary mb-2">{`${label}`}</p>
                {payload.map((pld: any) => (
                    <p key={pld.dataKey} style={{ color: pld.color }} className="text-sm">
                        {`${pld.name}: ${pld.value.toFixed(3)}`}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const ComparisonChart: React.FC<ComparisonChartProps> = ({ data }) => {
    const [visibility, setVisibility] = useState({
        accuracy: true,
        precision: true,
        recall: true,
        f1Score: true,
    });

    const handleLegendClick = (e: any) => {
        const { dataKey } = e;
        if (typeof dataKey === 'string') {
             setVisibility(prev => ({
                ...prev,
                [dataKey as keyof typeof visibility]: !prev[dataKey as keyof typeof visibility]
            }));
        }
    };

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: -10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis dataKey="name" tick={{ fill: '#D1D5DB', fontSize: 12 }} />
                    <YAxis domain={[0.7, 1]} tick={{ fill: '#D1D5DB', fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(107, 114, 128, 0.2)' }}/>
                    <Legend onClick={handleLegendClick} wrapperStyle={{fontSize: "14px", cursor: 'pointer'}}/>
                    <Bar dataKey="accuracy" fill="#3B82F6" hide={!visibility.accuracy} />
                    <Bar dataKey="precision" fill="#10B981" hide={!visibility.precision} />
                    <Bar dataKey="recall" fill="#F59E0B" hide={!visibility.recall} />
                    <Bar dataKey="f1Score" name="F1-Score" fill="#8B5CF6" hide={!visibility.f1Score} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ComparisonChart;
