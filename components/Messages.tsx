"use client";

import React, { ElementRef, useEffect, useRef } from "react";
import Message from "./Message";
import { MessageSquare } from "lucide-react";
import { type Message as TMessage } from "ai/react";

type Props = {
  messages: TMessage[];
};

const Messages = ({ messages }: Props) => {
  const bottomRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-[calc(100vh-8rem)] w-full overflow-y-auto flex flex-col">
      {messages.length > 0 ? (
        messages.map((message, i) => <Message key={i} message={message} />)
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />

          <h2 className="text-xl font-semibold">You&apos;re all set!</h2>

          <p className="text-sm text-zinc-500">
            Ask your first question to get started.
          </p>
        </div>
      )}

      {messages.length > 0 && <div ref={bottomRef} />}
    </div>
  );
};

export default Messages;
