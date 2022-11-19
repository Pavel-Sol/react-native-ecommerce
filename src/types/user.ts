export interface UserType {
  id: number;
  email: string;
  password: string;
  name: string;
}

export interface LoginDtoType {
  email: string;
  password: string;
}
