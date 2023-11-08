
import styles from "@/app/components/StyleAuthComponents/style-inputs.module.css";
import { useState } from "react";
import { RegisterButton } from "./ButtonSignUpEmailPassw";
import { AllertToast, showSuccessToast } from "../Toast/toast";

export function RegisterInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Email"
        className={styles.authinputs}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.authinputs}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm the password"
        className={styles.authinputs}
        onChange={(e) => setConfPassword(e.target.value)}
      />
      <RegisterButton email={email} password={password} confirm_password={confpassword}/>
      
    </>
  );
}

