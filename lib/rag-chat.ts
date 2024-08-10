import { redis } from "./redis";
import { Ratelimit } from "@upstash/ratelimit";
import { RAGChat, upstash } from "@upstash/rag-chat";

export const ragChat = new RAGChat({
  model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
  ratelimit: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 s"),
  }),
});
