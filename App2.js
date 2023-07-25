import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const App2 = () => (
  <Container>
    <Text >React Native</Text>
  </Container>
);

const Container = styled.View`
  background-color: pink;
  align-items: center;
  justify-content: center;
`;

export default App2;