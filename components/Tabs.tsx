import React, { useState } from 'react';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="border-b border-gray-700 mb-6">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(index)}
                            className={`${
                                activeTab === index
                                    ? 'border-accent text-text-primary'
                                    : 'border-transparent text-text-secondary hover:text-text-primary hover:border-gray-500'
                            } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-lg transition-colors focus:outline-none`}
                            aria-current={activeTab === index ? 'page' : undefined}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
