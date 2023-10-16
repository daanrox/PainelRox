import React, { useState, useEffect, useContext } from "react";
import { Title1 } from "../../styles/tipography";
import { StylePainel, StylePainelContainer, StylePainelDescription } from "./style";
import { Button } from "../Button/Button";
import { baseUrl } from "../../../services/api";
import { PainelContext } from "../../providers/PainelContext";
import { UserContext } from "../../providers/UserContext";


export const Painel = ({ services }) => {
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [quantity, setQuantity] = useState("");
    const [totalValue, setTotalValue] = useState(0);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [minQuantity, setMinQuantity] = useState("");
    const [maxQuantity, setMaxQuantity] = useState("");
    const { modalIsOpen, setModalIsOpen, modalAlert, setModalAlert } = useContext(PainelContext);
    const { userData, setBalance, setSpent } = useContext(UserContext);

    useEffect(() => {
        setTotalValue(quantity * (selectedPrice / 1000));
    }, [quantity, selectedPrice]);


    const handleServiceSelect = async (event) => {
        const selectedPrice = event.target.value;
        setSelectedPrice(selectedPrice);

        const foundService = await services.find((service) => service.price.toString() === selectedPrice.toString());
        setSelectedService(foundService);
        setSelectedDescription(foundService.description);
        setMinQuantity(foundService.min);
        setMaxQuantity(foundService.max);

        setQuantity(foundService.min);
    };

    const atualizarSaldoNoBancoDeDados = (userId, novoSaldo, newSpent) => {
        const authToken = localStorage.getItem('TOKEN');
        const requestOptions = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                balance: novoSaldo,
                spent: newSpent
            })
        };

        return fetch(`https://x8ki-letl-twmt.n7.xano.io/api:QeSM43R0/user/${userId}`, requestOptions)
            .then(response => response.json())
            .catch(error => {
                console.error('Erro na requisição:', error);
                throw new Error('Erro na requisição: ' + error);
            });
    };

    const addOrder = async () => {
        const userId = userData.id;
        const apiKey = userData.key;
        const action = 'add';
        const serviceId = selectedService ? selectedService.id : '';
        const link = encodeURIComponent(document.querySelector('input[type="text"]').value);
        const quantityValue = encodeURIComponent(quantity);

        const apiUrl = `${baseUrl}?key=${apiKey}&action=${action}&service=${serviceId}&link=${link}&quantity=${quantityValue}`;

        const requestOptionsPost = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        try {
            await fetch(apiUrl, requestOptionsPost);
            // console.log(apiUrl)

            const userToken = localStorage.getItem('TOKEN');
            const userBalanceResponse = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:QeSM43R0/auth/me', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });

            if (!userBalanceResponse.ok) {
                throw new Error('Erro ao obter o saldo do usuário');
            }

            const userBalanceData = await userBalanceResponse.json();
            const currentSpent = parseFloat(userBalanceData.spent)
            const currentUserBalance = parseFloat(userBalanceData.balance);

            const novoSaldo = (currentUserBalance - totalValue).toFixed(2);
            const newSpent = (currentSpent + totalValue).toFixed(2)

            await atualizarSaldoNoBancoDeDados(userId, parseFloat(novoSaldo), parseFloat(newSpent));
            // console.log(`User : ${userId}, float : ${parseFloat(novoSaldo)}`)
            setBalance(parseFloat(novoSaldo));
            setSpent(parseFloat(newSpent))
            setModalIsOpen(true);
            setModalAlert('Pedido realizado!');

            // Recarregar a página após o usuário clicar em "OK" no modal
            setTimeout(() => {
                setModalIsOpen(false);
            }, 1000);
        } catch (error) {
            console.error('Erro na requisição:', error);
            setModalIsOpen(true);
            setModalAlert('Erro na requisição');
        }
    };

    return (
        <>
            <StylePainelContainer>
                <StylePainel>
                    <h1 className="painelLabel">Selecione o Serviço</h1>
                    <select className='painelInput' value={selectedPrice || ""} onChange={handleServiceSelect}>
                        <option disabled key={0} value="">
                            Selecione um serviço
                        </option>
                        {services.map((element) => (
                            <option key={element.id} value={element.price}>
                                {element.name}
                            </option>
                        ))}
                    </select>

                    <h1 className="painelLabel">Link</h1>
                    <input className='painelInput' type="text" placeholder="Digite o link..." />

                    <h1 className="painelLabel">Quantidade</h1>
                    <input
                        className='painelInput'
                        type="number"
                        placeholder="Quantidade a inserir..."
                        min={minQuantity}
                        max={maxQuantity}
                        value={quantity}
                        onChange={(event) => {
                            setQuantity(event.target.value);
                        }}
                    />

                    <Title1 className="totalPainel">Valor total do pedido: R${totalValue.toFixed(2)}</Title1>

                    <Button onClick={addOrder} text='Adicionar Pedido' />
                </StylePainel>

                <StylePainelDescription>
                    <p>{`${selectedDescription}`}</p>
                </StylePainelDescription>
            </StylePainelContainer>
        </>
    );
};
