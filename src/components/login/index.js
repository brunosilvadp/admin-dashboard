import React from 'react';

import './style.css';

export default function Login() {
  return (
    <div id="login">
        <div className="login-content">
            <div className="logo">
                <img src="/logo-full-h55.png" alt="Verticis" width="150"/>
            </div>
            <form>
                <div className="input-block">
                    <input type="email" name="user_email" id="user_email" placeholder="Digite seu e-mail"/>
                </div>
                <div className="input-block">
                    <input type="email" name="user_password" id="user_password" placeholder="Sua senha"/>
                </div>
                <div className="form-submit">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
        <div class="login-background"/>
    </div>
  );
}
