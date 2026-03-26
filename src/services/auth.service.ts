import { type LoginResponse } from '@/types/auth.types';

export const fakeLogin = async (
  user_name: string,
  password: string,
): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user_name !== 'tony@pan.com' || password !== 'admin123') {
        reject({ code: 404 });
        return;
      }

      resolve({
        data: {
          user_information: {
            name: 'Tony',
            role: 'admin',
            redirect_to: {
              app: 'dashboard',
              name: 'home',
            },
          },
          status: 'ACTIVE',
          token: 'fake-token',
        },
      });
    }, 500);
  });
};
