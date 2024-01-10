import { ServerCommunicate } from './serverCommunicate';
import { IServerCommunicate } from './serverCommunicate.interface';

export class BaseService {
  protected serverCommunicate: IServerCommunicate =
    ServerCommunicate.getInstance();
}
