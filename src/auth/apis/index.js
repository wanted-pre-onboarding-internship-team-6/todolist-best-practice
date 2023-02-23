import api from '../../common/apis';

export async function signUp(email, password) {
  return await api.post('/auth/signup', { email, password });
}

export async function signIn(email, password) {
  return await api.post('/auth/signin', { email, password });
}
