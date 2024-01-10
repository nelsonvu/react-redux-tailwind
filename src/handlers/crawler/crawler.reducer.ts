import { createSlice } from '@reduxjs/toolkit';
import { CrawlerController } from './crawler.controller';
import { CrawlerState } from './types';
import { CrawlerProcess } from '@frontend/repositories';

const crawlerController = CrawlerController.getInstance();

const initialState: CrawlerState = {};

export const crawlerSlice = createSlice({
  name: 'crawlerSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // GetCrawlProcessByUserAPI
    builder.addCase(
      crawlerController.getCrawlProcessByUser.fulfilled,
      (state, action): CrawlerState => {
        const { records, metadata } = action.payload;
        const { currentPage, pageSize, totalCount } = metadata ?? {};

        return {
          ...state,
          crawlerProcesses: records.map(
            (crawlerProcess: any): CrawlerProcess =>
              CrawlerProcess.buildCrawlerProcess(crawlerProcess),
          ),
          currentPage,
          pageSize,
          totalCrawlerProcesses: totalCount,
        };
      },
    );
    builder.addCase(
      crawlerController.getCrawlProcessByUser.rejected,
      (state, action): CrawlerState => {
        return {
          ...state,
          error: action.payload,
        };
      },
    );
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = crawlerSlice.actions;
export const { reducer: crawlerReducer } = crawlerSlice;
