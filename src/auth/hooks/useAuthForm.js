import { useState } from 'react';

export default function useAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();
  const canSubmit = isEmailValid && isPasswordValid;

  function handleEmailInput({ target: { value } }) {
    const emailPattern = /@/;
    const isEmailValid = emailPattern.test(value);

    setEmail(value);
    setIsEmailValid(isEmailValid);
  }

  function handlePasswordInput({ target: { value } }) {
    const isPasswordValid = value.length >= 8;

    setPassword(value);
    setIsPasswordValid(isPasswordValid);
  }

  return {
    email,
    password,
    isEmailValid,
    isPasswordValid,
    handleEmailInput,
    handlePasswordInput,
    canSubmit,
  };
}
