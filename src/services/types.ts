export interface ServiceUpdate {
  serviceName: string;
  version?: string;
  releaseDate: string;
  summary: string;
  documentationUrl: string;
  category: string;
}

export interface ServiceFetcher {
  fetch(): Promise<ServiceUpdate>;
}