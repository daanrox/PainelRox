import { useContext } from "react"
import { DashboardStyle } from "./style"
import { UserContext } from "../../providers/UserContext"
import { FaUserCheck, FaCoins }  from "react-icons/fa6";
import { GoServer }  from "react-icons/go";

import { FaWallet } from 'react-icons/fa'

export const Dashboard = () =>{

    const { userName} = useContext(UserContext)

    return (
        <>
            <DashboardStyle>
                <section className="infoContainer">
                    <FaUserCheck className="infoIcon"/>
                    <div className="userNameInfos">
                        <h3>{userName}</h3>
                        <p>Seja bem vindo(a)</p>
                    </div>
                </section>

                <section className="infoContainer">
                    <FaCoins className="infoIcon"/>
                    <div className="spentInfo">
                        <h3>R$ 0.00</h3>
                        <p>Saldo gasto</p>
                    </div>
                </section>
                <section className="infoContainer">
                    <GoServer className="infoIcon"/>
                    <div className="totalOrders">
                        <h3>116571</h3>
                        <p>Total de pedidos</p>
                    </div>
                </section>
                <section className="infoContainer">
                    <FaWallet className="infoIcon"/>
                    <div className="walletInfo">
                        <h3>R$ 0.00</h3>
                        <p>Saldo na carteira</p>
                    </div>
                </section>
            </DashboardStyle>
        </>
    )
}