import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from '@frontend/api/user';

export class UserController {
  private static instance: UserController;
  private userService: UserService = UserService.getInstance();

  public static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }

    return UserController.instance;
  }

  public getCurrentUser = createAsyncThunk(
    'getCurrentUserAPI',
    async (_, { rejectWithValue }) => {
      const fetchFn = this.userService.getCurrentUser({});

      try {
        const response = await fetchFn();
        return response;
      } catch (err: any) {
        return rejectWithValue(err.message);
      }
    },
  );

  public getUsers = createAsyncThunk(
    'getUsersAPI',
    async (_, { rejectWithValue }) => {
      const fetchFn = this.userService.getUsers({});

      try {
        const response = await fetchFn();
        return response;
      } catch (err: any) {
        return rejectWithValue(err.message);
      }
    },
  );
}
