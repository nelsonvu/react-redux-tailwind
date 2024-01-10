import { withPrivateRoute } from '@frontend/react-routes/privateRoute.hoc';
import { Crawler } from '@frontend/templates/crawler';

const CrawlerPage = () => {
  return <Crawler />;
};

const EnhancedCrawlerPage = withPrivateRoute(CrawlerPage);

export default EnhancedCrawlerPage;
