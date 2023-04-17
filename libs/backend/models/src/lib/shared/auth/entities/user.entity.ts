export interface UserEntity {
  name: string;
  email: string;
  login: string;
  id: number;
  password: string;
  role?: string;
  updatedAt: Date | null;
}
