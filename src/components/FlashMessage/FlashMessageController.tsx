import { stringify } from "node:querystring";
import React, { useEffect, useState, useRef } from "react";
import { useStore } from "../../utils/store";
import styles from "./Flash.module.css";
import { FlashMessageType } from "../../utils/types";

interface Props {
  message: FlashMessageType;
}

const FlashMessage: React.FC<Props> = ({ message }) => {
  const [show, setShow] = useState<boolean>(true);
  const [timeId, setTimeId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (show) {
      setTimeId(
        setTimeout(() => {
          setShow(false);
        }, message.duration)
      );
    }

    return () => {
      clearTimeout(timeId);
      // console.log("this is unmounting", messages);
    };
  }, [show]);

  if (!show) {
    // unmount
    return null;
  }

  return <div className={styles.message}>{message.message}</div>;
};

// How exactly does useEffect's return work? Why is the code preforming like it does? https://stackoverflow.com/questions/59384281/how-exactly-does-useeffects-return-work-why-is-the-code-preforming-like-it-doe
//How to disappear alert after 5 seconds in React JS?: https://stackoverflow.com/questions/65214950/how-to-disappear-alert-after-5-seconds-in-react-js
const MessageController = () => {
  // @ts-ignore
  const { messages } = useStore();
  // FIXME: messages에 계속 쌓이는 것을 주기적으로 지워줘야할 것 같음

  return (
    <div className={styles.messageWrapper}>
      {messages.map((message: FlashMessageType, id: number) => {
        return <FlashMessage key={id} message={message}></FlashMessage>;
      })}
    </div>
  );
};

export default MessageController;
