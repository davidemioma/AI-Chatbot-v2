import React from "react";
import { cn } from "@/lib/utils";
import Markdown from "./Markdown";
import { Bot, User } from "lucide-react";
import { type Message as TMessage } from "ai/react";

type Props = {
  message: TMessage;
};

const Message = ({ message }: Props) => {
  const isUserMessage = message.role === "user";

  return (
    <div
      className={cn(
        "p-6 w-full",
        isUserMessage ? "bg-zinc-800" : "bg-zinc-900/25",
      )}
    >
      <div className="w-full max-w-3xl mx-auto flex items-start gap-2.5">
        <div
          className={cn(
            "size-10 shrink-0 rounded-full flex items-center justify-center border border-zinc-700 bg-zinc-900",
            isUserMessage && "bg-blue-950 border-blue-700 text-zinc-200",
          )}
        >
          {isUserMessage ? (
            <User className="size-5" />
          ) : (
            <Bot className="size-5 text-white" />
          )}
        </div>

        <div className="flex-1 flex flex-col w-full ml-6">
          <span className="text-sm font-semibold text-white">
            {isUserMessage ? "You" : "Website"}
          </span>

          <div className="text-sm font-normal py-2.5 text-white">
            <Markdown value={message.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
