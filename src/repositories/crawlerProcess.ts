export class CrawlerProcess {
  public url?: string;
  public startPage?: number;
  public endPage?: number;
  public startedAt?: number;
  public completedAt?: number;
  public status?: number;

  public static buildCrawlerProcess(crawlerProcess: any): CrawlerProcess {
    return {
      url: crawlerProcess.url,
      startPage: crawlerProcess.startPage,
      endPage: crawlerProcess.endPage,
      startedAt: crawlerProcess.startedAt,
      completedAt: crawlerProcess.completedAt,
      status: crawlerProcess.status,
    };
  }
}
