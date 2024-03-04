import React from "react";
import { bg_url } from "../utils/constant";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="w-full">
        <img src={bg_url} alt="" className="h-screen object-cover w-full" />
      </div>
    </div>
  );
};

export default Login;
