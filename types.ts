
export interface ModelPerformance {
  name: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  hyperparameters?: Record<string, string | number>;
}
