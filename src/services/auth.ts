export const fakeLogin = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: 'fake-token' });
    }, 500);
  });
};
