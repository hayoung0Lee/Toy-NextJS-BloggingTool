import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MarkDownBody from "../../components/markdownbody";

const TextAreaStyle = styled.textarea`
  /* To make sure that all text fields have the same font settings
       By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* To give the same size to all text field */
  width: 40%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* To harmonize the look & feel of text field border */
  border: 1px solid #999;
  height: 550px;
  resize: none;
`;

const EditorBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Write = () => {
  const router = useRouter();
  const { username, id } = router.query;
  const [isEditMode, setEditMode] = useState(false);
  const [contents, setContents] = useState(
    "by default this element is filled with this text"
  );

  const create = async (contents) => {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        body: JSON.stringify({
          contents,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = await res.json();

      if (res.status === 200) {
        // successfully posted
        router.push(`/${username}/${result.data.id}`);
      } else {
        alert("retry");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const update = async (contents) => {
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        body: JSON.stringify({
          contents,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
      });
      const result = await res.json();

      if (res.status === 200) {
        // successfully posted
        // console.log(result);
        router.push(`/${username}/${id}`);
        // alert("update");
      } else {
        alert("retry");
      }
    } catch (err) {
      console.error(err);
    }
    console.log("id", id);
  };

  const handleSubmit = (event, contents) => {
    event.preventDefault();

    if (isEditMode) {
      update(contents);
    } else {
      create(contents);
    }
  };

  const getUpdateContents = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      const result = await res.json();
      console.log(result);
      if (res.status === 200) {
        // successfully posted
        return result.data;
      } else {
        alert("retry");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setEditMode(!!id);
  }, [id]);

  useEffect(async () => {
    if (isEditMode) {
      const result = await getUpdateContents();
      if (result) {
        setContents(result[0].contents);
      }
    }
  }, [isEditMode]);

  return (
    <>
      <h2>
        Write Page for {username} - {isEditMode ? `editing...` : `new contents`}
      </h2>
      <form onSubmit={(event) => handleSubmit(event, contents)}>
        <EditorBody>
          <TextAreaStyle
            name="contents"
            value={contents}
            onInput={(e) => {
              setContents(e.target.value);
            }}
          ></TextAreaStyle>
          <MarkDownBody width="55%" maxHeight="550">
            {contents}
          </MarkDownBody>
        </EditorBody>
        <div className="button">
          <button type="submit">Send your message</button>
        </div>
      </form>
    </>
  );
};

export default Write;
