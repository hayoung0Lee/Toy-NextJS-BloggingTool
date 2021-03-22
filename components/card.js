import styled from "styled-components";

const CardStyle = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 240px;
  height: 300px;
`;
const Card = ({ data }) => {
  return (
    <CardStyle>
      <p>title: {data.title}</p>
      <p>contents: {data.contents}</p>
    </CardStyle>
  );
};

export default Card;
