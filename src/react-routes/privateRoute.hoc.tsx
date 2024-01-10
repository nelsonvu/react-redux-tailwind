import { useAuthContext } from '@frontend/modules/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_LINKS } from './permissionLink';
import { Fallback } from '@frontend/modules/fallback';

export const withPrivateRoute = (Component: React.FC) => {
  const PrivateRoute = (props: any) => {
    const { isLogged, isLoading } = useAuthContext();
    const navigate = useNavigate();

    React.useEffect(() => {
      if (!isLoading && !isLogged) {
        navigate(PAGE_LINKS.LOGIN.path);
      }
    }, [isLogged, isLoading]);

    // If user is logged in, return original component
    return (
      <>
        {isLoading ? <Fallback /> : isLogged ? <Component {...props} /> : null}
      </>
    );
  };

  return PrivateRoute;
};
