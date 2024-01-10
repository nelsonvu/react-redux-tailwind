import { useAuthContext } from '@frontend/modules/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_LINKS } from './permissionLink';
import { Fallback } from '@frontend/modules/fallback';

export const withAuthRoute = (Component: React.FC) => {
  const AuthRoute = (props: any) => {
    const { isLogged, isLoading } = useAuthContext();
    const navigate = useNavigate();

    React.useEffect(() => {
      if (isLogged) {
        navigate(PAGE_LINKS.CRAWLER.path);
      }
    }, [isLogged, isLoading]);

    // If user is not logged in, return original component
    return (
      <>
        {isLoading ? <Fallback /> : !isLogged ? <Component {...props} /> : null}
      </>
    );
  };

  return AuthRoute;
};
