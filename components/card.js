import styled from "styled-components";
import Link from "next/link";
import MarkDownBody from "./markdownbody";

const CardStyle = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 240px;
  height: 300px;
`;
const Card = ({ data }) => {
  // 'hayoung/1' 이렇게 요청이 간다.
  // console.log(`/${process.env.NEXT_PUBLIC_USERNAME}/${index}`);
  return (
    <Link href={`/${process.env.NEXT_PUBLIC_USERNAME}/${data.id}`}>
      <CardStyle>
        <p>title: {data.title ?? "empty title"}</p>
        <MarkDownBody>{data.contents}</MarkDownBody>
      </CardStyle>
    </Link>
  );
};

export default Card;
