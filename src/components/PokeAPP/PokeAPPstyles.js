import { styled } from "styled-components";

export const CardContainerStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 90vh;
    color: whitesmoke;
`;

export const CardStyle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 480px;
    height: 270px;
    gap: 2px;
    padding: 10px;
    border-radius: 22px;
    box-shadow: 0px 6px 3px 6px rgb(0 0 0 / 26%);
    background-color: #232323;
`;

export const SearchBtnStyle = styled.button`
    width: 60%;
    height: 30px;
    color: whitesmoke;
    margin: 3px;
    border-radius: 6px;
    background: #c8262c;
    border: none;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
`;

export const TypeContainer = styled.input `
    font-size: 18px;
    border: none;
    border-radius: 6px;
    padding: 5px;
    text-align: center;
    margin: 2px;
`;

export const NameContainer = styled.div `
    font-size: 20px;
    overflow:hidden;
`;

export const TypeContentStyle = styled.div `
    font-size: 18px;
    border: solid 1px #c8262c;
    border-radius: 13px;
    padding: 1px 5px;
    overflow: hidden;
`;

export const ImgContentStyle = styled.div`
    height: 50%;
    overflow: hidden;
    
    img {
        width: 165px;
    }
`;