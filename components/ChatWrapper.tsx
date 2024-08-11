"use client";

import React from "react";
import Messages from "./Messages";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send, Loader2 } from "lucide-react";
import { type Message as TMessage } from "ai/react";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  sessionId: string;
  initialMessages: TMessage[];
};

const ChatWrapper = ({ sessionId, initialMessages }: Props) => {
  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat({
    api: "/api/chat",
    body: {
      sessionId,
    },
    initialMessages,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSubmit();
  };

  return (
    <div className="relative bg-zinc-900 min-h-screen flex flex-col divide-y divide-zinc-700">
      <div className="flex-1 bg-zinc-800 flex flex-col text-white">
        <Messages messages={messages} />
      </div>

      <form
        onSubmit={onSubmit}
        className="w-full flex items-center gap-3 h-32 px-5"
      >
        <Textarea
          className="bg-zinc-800 rounded-xl text-white border-0"
          value={input}
          rows={4}
          placeholder={isLoading ? "Generating. . ." : "Ask something. . ."}
          disabled={isLoading}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              handleSubmit();

              setInput("");
            }
          }}
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
