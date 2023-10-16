import React, { useEffect, useContext } from "react";
import { DashboardStyle } from "./style";
import { UserContext } from "../../providers/UserContext";
import { FaUserCheck, FaCoins } from "react-icons/fa";
import { GoServer } from "react-icons/go";
import { FaWallet } from 'react-icons/fa';
import { PainelContext } from "../../providers/PainelContext";

export const Dashboard = () => {
  const { userName, setUserName, balance, setBalance, setUserData , spent, setSpent} = useContext(UserContext);
  const { setIsSession } = useContext(PainelContext);

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');

    if (token) {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      fetch('https://x8ki-letl-twmt.n7.xano.io/api:QeSM43R0/auth/me', requestOptions)
        .then(response => {
          if (!response.ok) {
            setIsSession(false);
            throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        if (data && data.name !== undefined && data.balance !== undefined) {
            setUserName(data.name);
            setBalance(data.balance);
            setSpent(data.spent)
            setUserData(data)
          }
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
          setIsSession(false);
        });
    }
  }, [setUserName, setBalance, setIsSession]);

  return (
    <>
      <DashboardStyle>
        <section className="infoContainer">
          <FaUserCheck className="infoIcon" />
          <div className="userNameInfos">
            <h3>{userName}</h3>
            <p>Seja bem vindo(a)</p>
          </div>
        </section>

        <section className="infoContainer">
          <FaCoins className="infoIcon" />
          <div className="spentInfo">
            <h3>R$ {spent.toFixed(2)}</h3>
            <p>Saldo gasto</p>
          </div>
        </section>

        <section className="infoContainer">
          <GoServer className="infoIcon" />
          <div className="totalOrders">
            <h3>116571</h3>
            <p>Total de pedidos</p>
          </div>
        </section>

        <section className="infoContainer">
          <FaWallet className="infoIcon" />
          <div className="walletInfo">
            <h3>R$ {balance.toFixed(2)}</h3>
            <p>Saldo na carteira</p>
          </div>
        </section>
      </DashboardStyle>
    </>
  );
};
