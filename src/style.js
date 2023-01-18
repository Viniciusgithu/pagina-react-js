import styled from 'styled-components';
import Background from './assets/bgimage-login.svg'


export const Container = styled.div`
  background: url('${Background}');
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
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  margin-bottom: 80px;
`;

export const LabelInput = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #eeeeee;
  margin-left: 20px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  padding: 10px;
  color: #eee;
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  width: 250px;
  height: 60px; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
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