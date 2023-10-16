import React, { useContext, useState } from "react";
import { PainelContext } from "../../providers/PainelContext";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../Button/Button";
import { ModalLoginStyled } from "./style";
import { UserContext } from "../../providers/UserContext";

export const ModalLogin = () => {
  const { setModalLoginIsOpen, setIsSession } = useContext(PainelContext);
  const { setUserData } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: senha,
    };

    fetch('https://x8ki-letl-twmt.n7.xano.io/api:QeSM43R0/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSession(true);
        localStorage.setItem('TOKEN', data.authToken);
        setModalLoginIsOpen(false);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <>
      <ModalLoginStyled>
        <div className='modalHeader'>
          <AiOutlineClose className='buttonCloseModal' onClick={() => { setModalLoginIsOpen(false) }} />
        </div>
        <form onSubmit={handleLogin}>
          <input
            placeholder='Digite seu email'
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />

          <input
            placeholder='Digite sua senha'
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            name="senha"
          />
          <Button text='Entrar' type='submit' />
        </form>
      </ModalLoginStyled>
    </>
  );
};
