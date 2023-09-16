import React, { useState, useEffect, useContext } from "react";
import { Title1 } from "../../styles/tipography";
import { StylePainel, StylePainelContainer, StylePainelDescription } from "./style";
import { Button } from "../Button/Button";
import { baseUrl } from "../../../services/api";
import { PainelContext } from "../../providers/PainelContext";

export const Painel = ({ services }) => {
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [quantity, setQuantity] = useState("");
    const [totalValue, setTotalValue] = useState(0);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [minQuantity, setMinQuantity] = useState("");
    const [maxQuantity, setMaxQuantity] = useState("");
    const {modalIsOpen, setModalIsOpen, modalAlert, setModalAlert} = useContext(PainelContext)


    useEffect(() => {
        setTotalValue(quantity * (selectedPrice / 1000))
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

    const addOrder = () => {
        const apiKey = 'MINHACHAVESECRETA';
        const action = 'add';
        const serviceId = selectedService ? selectedService.id : '';
        const link = encodeURIComponent(document.querySelector('input[type="text"]').value);
        const quantityValue = encodeURIComponent(quantity);

        const url = `${baseUrl}?key=${apiKey}&action=${action}&service=${serviceId}&link=${link}&quantity=${quantityValue}`;
        console.log('URL:', url);

        setModalIsOpen(true)
        setModalAlert(`Pedido Adicionado com Sucesso!`)
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
