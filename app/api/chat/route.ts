import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";

export async function POST(request: Request) {
  const body = await request.json();

  const { sessionId, messages } = body;

  const lastMessage = messages[messages.length - 1].content;

  const response = await ragChat.chat(lastMessage, {
    sessionId,
    streaming: true,
  });

  return aiUseChatAdapter(response);
}
