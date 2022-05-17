import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Auth = (props) => {
  const params = useParams();

  useEffect(() => {
    window.location = "https://accounts.pod.ir/oauth2/authorize/?client_id=19639002kfd6644c58e67806f906301cf&response_type=[code]&redirect_uri=http://192.168.114.29&scope=profile";
  }, []);

  console.log(params);

  return <h1>Auth</h1>;
};

export default Auth;
