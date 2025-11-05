
import React from 'react';
import { Target, BarChart3, Frown, Smile } from 'lucide-react';
import MetricCard from './MetricCard';
import ComparisonChart from './ComparisonChart';
import InfoCard from './InfoCard';
import Tabs from './Tabs';
import { modelData, bestModel } from '../constants';

const Dashboard: React.FC = () => {

    const tabs = [
        {
            label: 'Overview',
            content: (
                <div className="bg-secondary/40 rounded-2xl p-6 sm:p-8 border border-gray-700/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-secondary/40 to-secondary/40">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-text-primary mb-4">Top Model Performance: Initial SVM</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <MetricCard title="Accuracy" value={bestModel.accuracy.toFixed(3)} icon={<Target className="w-8 h-8 text-blue-400" />} />
                            <MetricCard title="Spam Precision" value={bestModel.precision.toFixed(2)} icon={<Smile className="w-8 h-8 text-green-400" />} />
                            <MetricCard title="Spam Recall" value={bestModel.recall.toFixed(2)} icon={<Frown className="w-8 h-8 text-yellow-400" />} />
                            <MetricCard title="Spam F1-Score" value={bestModel.f1Score.toFixed(2)} icon={<BarChart3 className="w-8 h-8 text-indigo-400" />} />
                        </div>
                    </section>
                    <section>
                         <InfoCard title="Model Comparison">
                            <ComparisonChart data={modelData} />
                        </InfoCard>
                    </section>
                </div>
            ),
        },
        {
            label: 'Analysis & Methodology',
            content: (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <InfoCard title="Data Analysis Key Findings">
                        <ul className="space-y-3 list-disc list-inside text-text-secondary">
                            <li>SVM models (Initial and Tuned) achieved the highest accuracy (~0.98), spam precision (0.99), spam recall (0.88), and spam F1-score (0.93).</li>
                            <li>Random Forest showed high precision (0.99) but lower recall (0.81) than SVM.</li>
                            <li>Naive Bayes and Logistic Regression had the lowest spam recall (0.76 and 0.75 respectively).</li>
                            <li>All models were excellent at identifying 'ham' messages.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Methodology: How Leakage Was Prevented">
                        <p className="text-text-secondary mb-2">To ensure a realistic and unbiased performance evaluation, the following steps were taken:</p>
                        <ul className="space-y-2 list-disc list-inside text-text-secondary">
                            <li><strong>Data Splitting:</strong> The dataset was split into training and testing sets before any feature engineering or model training commenced.</li>
                            <li><strong>TF-IDF Vectorization:</strong> The <code className="bg-gray-900 text-sm p-1 rounded">TfidfVectorizer</code> was fitted <span className="font-bold">only</span> on the training data. The learned vocabulary was then used to transform the test data, preventing any information from the test set from influencing the model during the training phase.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Why Preventing Data Leakage is Crucial">
                        <p className="text-text-secondary mb-4">Data leakage is a critical pitfall where information from outside the training set influences the model. This leads to overly optimistic results and a model that fails to generalize to new, unseen data.</p>
                        <p className="text-text-secondary">
                            With <strong>TF-IDF Vectorization</strong>, for example, fitting on the entire dataset would mean the vectorizer learns the test data's vocabulary beforehand. The model gains an unfair advantage, inflating its performance. By fitting <span className="font-bold text-highlight">only</span> on training data, we simulate a real-world scenario and get a true measure of the model's predictive power.
                        </p>
                    </InfoCard>
                 </div>
            ),
        },
    ];

    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-text-primary tracking-tight">Spam Detection Model Analysis</h1>
                <p className="text-lg text-text-secondary mt-2">An interactive dashboard visualizing model performance from Google Colab.</p>
            </header>
            
            <Tabs tabs={tabs} />
        </main>
    );
};

export default Dashboard;