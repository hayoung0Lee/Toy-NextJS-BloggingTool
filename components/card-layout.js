import styled from "styled-components";

const CardLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    270px
  ); // 칼럼의 크기를 구하는 것, auto-fill을 통해서는 채울수 있는만큼 반복해서 column을 채운다
  gap: 10px; // gap을 줄수있다
  grid-auto-rows: 300px; // 행의 높이를 지정
  justify-content: space-between; // flex에서 알아서 간격 배치되는것
`;
const CardLayout = ({ children }) => {
  return <CardLayoutStyle>{children}</CardLayoutStyle>;
};

export default CardLayout;
