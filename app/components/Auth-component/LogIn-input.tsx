import { useState } from "react";
import { ButtonSignIn } from "./ButtonLogInEmailPassw";

export function LogInInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Email"
        className="input input-bordered w-full bg-transparent max-w-xs m-1 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
        onChange={(e)=> setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full bg-transparent max-w-xs m-1 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
        onChange={(e)=> setPassword(e.target.value)}
      />
      <ButtonSignIn email={email} password={password}/>
    </>
  );
}
