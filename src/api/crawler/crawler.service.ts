import { AxiosRequestConfig } from 'axios';
import { BaseService } from '../base/base.service';

export class CrawlerService extends BaseService {
  private static instance: CrawlerService;

  public static getInstance(): CrawlerService {
    if (!CrawlerService.instance) {
      CrawlerService.instance = new CrawlerService();
    }

    return CrawlerService.instance;
  }

  public getCrawlProcessByUser(options: AxiosRequestConfig<any>) {
    return this.serverCommunicate.get('/crawler/crawler-process', options);
  }
}
