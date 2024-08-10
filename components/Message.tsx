import React from "react";
import { type Message as TMessage } from "ai/react";

type Props = {
  message: TMessage;
};

const Message = ({ message }: Props) => {
  const isUserMessage = message.role === "user";

  return <div>Message</div>;
};

export default Message;
