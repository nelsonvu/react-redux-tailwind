import { createAsyncThunk } from '@reduxjs/toolkit';
import { CrawlerService } from '@frontend/api/crawler';
import { GetCrawlProcessByUserParams } from './types';

export class CrawlerController {
  private static instance: CrawlerController;
  private crawlerService: CrawlerService = CrawlerService.getInstance();

  public static getInstance(): CrawlerController {
    if (!CrawlerController.instance) {
      CrawlerController.instance = new CrawlerController();
    }

    return CrawlerController.instance;
  }

  public getCrawlProcessByUser = createAsyncThunk<
    any,
    GetCrawlProcessByUserParams
  >('getCrawlProcessByUserAPI', async (data, { rejectWithValue }) => {
    const fetchFn = this.crawlerService.getCrawlProcessByUser({ params: data });

    try {
      const response = await fetchFn();
      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  });
}
