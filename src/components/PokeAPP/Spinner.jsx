import { styled } from "styled-components";

const SpinnerConteiner = styled.div `
    width: 10rem;
    height: 10rem;
    animation: rotate 1s infinite linear;

  @keyframes rotate {
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
  }
`;


const Spinner = () => {
  return (
      <SpinnerConteiner>
          <img src="e2-nucba\src\styles\icons8-pokeball-96.png" alt="" />
      </SpinnerConteiner>
  );
};

export default Spinner;