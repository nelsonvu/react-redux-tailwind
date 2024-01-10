import { AxiosRequestConfig } from 'axios';
import { BaseService } from '../base/base.service';

export class UserService extends BaseService {
  private static instance: UserService;

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }

  public getCurrentUser(options: AxiosRequestConfig<any>) {
    return this.serverCommunicate.get('/user/info', options);
  }

  public getUsers(options: AxiosRequestConfig<any>) {
    return this.serverCommunicate.get('/user', options);
  }
}
