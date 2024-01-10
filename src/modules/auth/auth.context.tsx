import { createContext, useContext, useEffect } from 'react';

import { UserController } from '@frontend/handlers/user';
import { useReduxDispatch, useReduxSelector } from '@frontend/redux/hooks';
import { User } from '@frontend/repositories';
import { getCookie } from '@frontend/helpers/cookie';

type AuthContextType = {
  user: User | undefined;
  isLoading?: boolean;
  isLogged?: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isLoading: true,
  isLogged: false,
});

export const AuthProvider = (props: any) => {
  const userController = UserController.getInstance();
  const { userState } = useReduxSelector(['userState']);
  const { currentUser } = userState;
  const dispatch = useReduxDispatch();

  useEffect(() => {
    const authentication = getCookie('Authentication');
    if (authentication) dispatch(userController.getCurrentUser());
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading: currentUser.isLoading,
        isLogged: Boolean(currentUser.data?.id),
        user: currentUser.data,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
