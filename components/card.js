import styled from "styled-components";
import Link from "next/link";

const CardStyle = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 240px;
  height: 300px;
`;
const Card = ({ data, index }) => {
  // 'hayoung/1' 이렇게 요청이 간다.
  // console.log(`/${process.env.NEXT_PUBLIC_USERNAME}/${index}`);
  return (
    <Link href={`/${process.env.NEXT_PUBLIC_USERNAME}/${index}`}>
      <CardStyle>
        <p>title: {data.title}</p>
        <p>contents: {data.contents}</p>
      </CardStyle>
    </Link>
  );
};

export default Card;
