import React from 'react';
import { styled } from "styled-components";



const HomeContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    color: #F4F6F5;
`;

const Home = () => {
    return (
        <>
            <HomeContainer>
                <div className='text_home'>
                    <h1>Holi</h1>
                    <p>estoy probando si me sale</p>
                </div>
            </HomeContainer>
        </>
    );
};

export default Home;