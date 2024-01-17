import styled from "styled-components";

const Title = styled.div`
  color: ${(props) => props.theme.accentColor};
`;

const Coins = () => {
  return <Title>코인</Title>;
};

export default Coins;
