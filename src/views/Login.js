import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../routes";

import Button from "../components/atoms/Button";
import { gradientLoginTranslate } from "../animations";

const Content = styled.div`
  min-height: 100vh;
  padding: 0 0 0 0px;
  background: linear-gradient(
    -45deg,
    #b54798,
    #e67625,
    #4353b3,
    #38207f,
    #45a77e,
    #02929b,
    #803a9e,
    #4d1360
  );
  background-size: 800% 800%;

  animation: ${gradientLoginTranslate} 40s ease infinite;
`;

const Login = () => (
  <Content>
    <h1>Zaloguj się cwaniaczku</h1>
    <Button as={Link} to={routes.topics}>
      siema
    </Button>
  </Content>
);

export default Login;
