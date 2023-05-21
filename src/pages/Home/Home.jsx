import React from 'react';
import { styled } from "styled-components";



const HomeContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 80vh;
    color: #F4F6F5;
    font-size: 28px;
`;

const Home = () => {
    return (
        <>
            <HomeContainer>
                <div className='text_home'>
                    <h1>Holi</h1>
                    <p>Estás en la página de inicio ✌</p>
                </div>
            </HomeContainer>
        </>
    );
};

export default Home;