import styled from 'styled-components';
import Background from '../../assets/bgimage-account.svg'


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url('${Background}');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.8em;
`;

export const Img = styled.img`
  margin-top: 2em;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(22.5px);
  min-height: calc(100vh - 170px);
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  margin-bottom: 80px;
`;


export const Button = styled.button`
  background: transparent;
  border-radius: 14px;
  border: 1px solid #fff;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  width: 250px;
  height: 60px; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 20px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: rotateY(180deg);
  }
`;

export const User = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    padding: 10px;
    margin-top: 10px;

    p {
      font-weight: normal;
      font-size: 20px;
      color: #fff;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

`;