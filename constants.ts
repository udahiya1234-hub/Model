
import type { ModelPerformance } from './types';

export const modelData: ModelPerformance[] = [
    { name: 'Initial SVM', accuracy: 0.982, precision: 0.99, recall: 0.88, f1Score: 0.93, hyperparameters: { C: 1.0, kernel: 'rbf', gamma: 'scale' } },
    { name: 'Tuned SVM', accuracy: 0.980, precision: 0.99, recall: 0.88, f1Score: 0.93, hyperparameters: { C: 1, kernel: 'linear' } },
    { name: 'Random Forest', accuracy: 0.970, precision: 0.99, recall: 0.81, f1Score: 0.89, hyperparameters: { n_estimators: 100, max_depth: 'None' } },
    { name: 'Gradient Boosting', accuracy: 0.970, precision: 0.98, recall: 0.80, f1Score: 0.88, hyperparameters: { n_estimators: 100, 'learning_rate': 0.1 } },
    { name: 'Logistic Regression', accuracy: 0.970, precision: 0.97, recall: 0.75, f1Score: 0.85, hyperparameters: { C: 1.0, solver: 'lbfgs' } },
    { name: 'Naive Bayes', accuracy: 0.970, precision: 0.97, recall: 0.76, f1Score: 0.85, hyperparameters: { alpha: 1.0 } },
];

export const bestModel = modelData[0];
