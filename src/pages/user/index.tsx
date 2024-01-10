import { withPrivateRoute } from '@frontend/react-routes/privateRoute.hoc';

const UserPage = () => {
  return <div>User page</div>;
};

const EnhancedUserPage = withPrivateRoute(UserPage);

export default EnhancedUserPage;
