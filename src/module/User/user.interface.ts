export interface TUser {
    id: string;
    email: string;
    password: string;
    role:  'admin' | 'student' | 'teacher';
    status: 'in-progress' | 'blocked';
    isDeleted: boolean;
  }