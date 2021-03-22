import styled from "styled-components";
import { Remarkable } from "remarkable";

const MarkDownLayout = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
`;

const MarkDownBody = ({ children }) => {
  const md = new Remarkable();
  console.log("children", children, md.render(children));
  return (
    <MarkDownLayout
      dangerouslySetInnerHTML={{ __html: md.render(children) }}
    ></MarkDownLayout>
  );
};

export default MarkDownBody;
