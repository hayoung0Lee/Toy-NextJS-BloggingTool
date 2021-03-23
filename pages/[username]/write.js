import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MarkDownBody from "../../components/markdownbody";

const TextAreaStyle = styled.textarea`
  /* To make sure that all text fields have the same font settings
       By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* To give the same size to all text field */
  width: 300px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* To harmonize the look & feel of text field border */
  border: 1px solid #999;
  height: 400px;
  resize: none;
`;
const Write = () => {
  const router = useRouter();
  const { username, id } = router.query;
  const [contents, setContents] = useState(
    "by default this element is filled with this text"
  );

  useEffect(() => {
    setTimeout(() => {
      console.log("id", id, typeof id, !!id);
      if (!!id) {
        alert("fetch contents");
      }
    }, 1000);
  }, [id]);

  return (
    <>
      <h2>
        Write Page for {username} - {!!id ? `editing...` : `new contents`}
      </h2>
      <form>
        <TextAreaStyle
          name="contents"
          value={contents}
          onInput={(e) => setContents(e.target.value)}
        ></TextAreaStyle>
        <MarkDownBody>{contents}</MarkDownBody>
        <div class="button">
          <button type="submit">Send your message</button>
        </div>
      </form>
    </>
  );
};

export default Write;
