import React, {useState} from 'react';
import {Text, View, Button, Keyboard} from 'react-native';
import styled from 'styled-components/native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
const HeaderText = styled.Text`
  font-size: 25px;
`;
const Input = styled.TextInput`
  height: 40px;
  width: 90%;
  font-size: 18px;
  background-color: #ccc;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  color: #000;
`;
const ResultArea = styled.View`
  width: 100%;
  margin-top: 60px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const ResultItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const ResultItem = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;
const ButtonsArea = styled.View`
  flex-direction: row;
  margin: 30px 0;
`;
const ButtonItem = styled.Button`
  margin: 20px;
`;
const CalcButton = styled.Button``;
export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [percent, setPercent] = useState(0.1);
  const calculate = () => {
    let billValue = bill.replace('.', '').replace(',', '.');

    billValue = parseFloat(bill);
    if (billValue) {
      Keyboard.dismiss();
      setTip(billValue * percent);
    } else {
      alert('Digite um valor válido');
    }
  };
  const currencyValidate = (number) => {
    let newNumber = number;
    newNumber = newNumber.replace(/\D/g, '');
    newNumber = newNumber.replace(/(\d)(\d{2})$/, '$1,$2');
    newNumber = newNumber.replace(/(?=(\d{3})+(\D))\B/g, '.');
    return newNumber;
  };
  return (
    <Page>
      <HeaderText>Calculadora de gorjetas</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={(number) => setBill(currencyValidate(number))}
      />
      <ButtonsArea>
        <ButtonItem
          onPress={() => {
            setPercent(0.05);
            setTip(0);
          }}
          title="5%"
        />
        <ButtonItem
          onPress={() => {
            setPercent(0.1);
            setTip(0);
          }}
          title="10%"
        />
        <ButtonItem
          onPress={() => {
            setPercent(0.15);
            setTip(0);
          }}
          title="15%"
        />
        <ButtonItem
          onPress={() => {
            setPercent(0.2);
            setTip(0);
          }}
          title="20%"
        />
      </ButtonsArea>
      <CalcButton title={`Calcular ${percent * 100}%`} onPress={calculate} />
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da conta:</ResultItemTitle>
          <ResultItem>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(parseFloat(bill.replace('.', '').replace(',', '.')))}
          </ResultItem>
          <ResultItemTitle>Valor da Gorjeta:</ResultItemTitle>
          <ResultItem>
            R$ {currencyValidate(tip.toFixed(2))} ({percent * 100}%)
          </ResultItem>
          <ResultItemTitle>Valor Total:</ResultItemTitle>
          <ResultItem>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(
              (
                tip + parseFloat(bill.replace('.', '').replace(',', '.'))
              ).toFixed(2),
            )}
          </ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};
