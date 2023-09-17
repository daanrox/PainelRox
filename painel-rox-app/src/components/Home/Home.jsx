import React, { useContext, useEffect, useState } from 'react';
import { StyledHome } from './style';
import daanroxAvatar from '../../assets/avatar_rox-smm.png';
import { Button } from '../Button/Button';
import { PainelContext } from '../../providers/PainelContext';

export const Home = () => {

    const {modalLoginIsOpen, setModalLoginIsOpen} = useContext(PainelContext)


    const [typedText, setTypedText] = useState('');
    const originalText = 'Seus pedidos serão iniciados quase instantaneamente  ';

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setTypedText((prevText) => {
                if (index < originalText.length) {
                    index++;
                    return originalText.slice(0, index);
                } else {
                    clearInterval(intervalId);
                    return prevText;
                }
            });
        }, 150); 

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <>
            <StyledHome>
                <div className="homeInfo">
                    <h1>Fácil de usar, rápido e dinâmico!</h1>
                    <p>Suba agora mesmo suas redes sociais em nossa plataforma de venda de seguidores.</p>
                    <span className="lineBreaker">___</span>
                    <p className='writeAnimation'>
                        {typedText}
                        <span className="cursor" style={{ borderColor: 'var(--color-primary)' }}></span>
                    </p>
                    <Button onClick={ () => {
                        setModalLoginIsOpen(true)
                    }} text='Faça o Login'/>
                </div>
                <div>
                    <img className='homeAvatar' src={daanroxAvatar} alt='Avatar Rox Smm' />
                </div>
            </StyledHome>
        </>
    );
};
