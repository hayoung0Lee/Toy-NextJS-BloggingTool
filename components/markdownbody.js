import styled from "styled-components";
import { Remarkable } from "remarkable";

const MarkDownLayout = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: ${(props) => props.width || `200px`};
  max-height: ${(props) => props.maxHeight || 300}px;
  overflow: hidden;
  overflow-y: scroll;
`;

const MarkDownBody = ({ children, width, maxHeight }) => {
  const md = new Remarkable();
  // console.log("children", md.render(children));
  return (
    <MarkDownLayout
      width={width}
      maxHeight={maxHeight}
      dangerouslySetInnerHTML={{ __html: md.render(children) }}
    ></MarkDownLayout>
  );
};

export default MarkDownBody;
