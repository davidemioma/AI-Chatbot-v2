"use client";

import React from "react";
import Messages from "./Messages";
import { useChat } from "ai/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send, Loader2 } from "lucide-react";

type Props = {
  sessionId: string;
};

const ChatWrapper = ({ sessionId }: Props) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
      body: {
        sessionId,
      },
    });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSubmit();
  };

  return (
    <div className="relative bg-zinc-900 min-h-screen flex flex-col divide-y divide-zinc-700">
      <div className="flex-1 bg-zinc-800 flex flex-col text-black">
        <Messages messages={messages} />
      </div>

      <form
        onSubmit={onSubmit}
        className="w-full flex items-center gap-3 h-16 px-5"
      >
        <Input
          className=""
          value={input}
          placeholder={isLoading ? "Generating. . ." : "Ask something. . ."}
          disabled={isLoading}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0842A0]"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 flex-shrink-0 animate-spin" />
          ) : (
            <Send className="h-5 w-5 flex-shrink-0" />
          )}
        </Button>
      </form>
    </div>
  );
};

export default ChatWrapper;
