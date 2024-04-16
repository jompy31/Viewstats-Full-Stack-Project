"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useState } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="password"
        name="password"
      />
      {/* <button onClick={togglePasswordVisibility}>
        {showPassword ? "Hide" : "Show"} Password
      </button> */}
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
      <div className={styles.cloud}>
        <p>Admin_user: jpbcserviciotecnico@gmail.com</p>
        <p>Password: Nuevavida2019</p>
      </div>
    </form>
  );
};

export default LoginForm;
