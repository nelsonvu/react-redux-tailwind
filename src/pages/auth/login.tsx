import { withAuthRoute } from '@frontend/react-routes/authRoute.hoc';
import { classnames, typography } from '@frontend/tailwindcss-classnames';

const Login = () => {
  return <div className={classnames(typography('font-bold'))}>Login</div>;
};

const EnhancedLogin = withAuthRoute(Login);

export default EnhancedLogin;
