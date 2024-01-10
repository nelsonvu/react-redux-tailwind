export class User {
  public id?: number;
  public email?: string;
  public name?: string;

  public static buildUser(user: any): User {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}
