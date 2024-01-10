import { CrawlerProcess } from '@frontend/repositories';

export type CrawlerState = {
  crawlerProcesses?: CrawlerProcess[];
  currentPage?: number;
  pageSize?: number;
  totalCrawlerProcesses?: number;
  error?: any;
};

export type GetCrawlProcessByUserParams = {
  page?: number;
  pageSize?: number;
  urls?: string[];
};
