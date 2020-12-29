export interface AuthResponse {
  Succeeded: boolean;
  Message?: string;
  Errors?: Array<string>;
  Data?: UserResponse;
}

export interface UserResponse {
  Id?: string;
  FullName?: string;
  UserName?: string;
  Email?: string;
  Roles?: Array<string>;
  IsVerified?: boolean;
  JWToken?: string;
  RefreshToken?: string;
}
