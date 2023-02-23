export const AUTH_ACTION = Object.freeze({
  signIn: 'SIGN_IN',
  signOut: 'SIGN_OUT',
});

export const ACTION = Object.freeze({
  notExist: type => `${type}은 존재하지 않는 액션입니다.`,
});
