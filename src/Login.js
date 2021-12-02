import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"

function Login() {

  const signIn = () => {
    // do clever login stuff
  }

  return (
    <div className="login">
      <h2>I am the login page</h2>

      <div className="login__logo">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faminoapps.com%2Fc%2Fmtg%2Fpage%2Fblog%2Fthe-official-mtg-amino-discord-server%2FZ6DF_BuYkZDg7E8Kr4PLM0l0222jRG&psig=AOvVaw2Sv3Sr2FnPcDLkgDMmFKbW&ust=1638489422097000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD_7vTmw_QCFQAAAAAdAAAAABAJ" alt="" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
