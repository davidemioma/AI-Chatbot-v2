import React from "react";
import { type Message as TMessage } from "ai/react";
import Message from "./Message";

type Props = {
  messages: TMessage[];
};

const Messages = ({ messages }: Props) => {
  return (
    <div className="h-[calc(100vh-4rem)] w-full overflow-y-auto flex flex-col">
      {messages.length > 0 ? (
        messages.map((message, i) => <Message key={i} message={message} />)
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default Messages;
