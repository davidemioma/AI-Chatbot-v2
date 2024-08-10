import { redis } from "@/lib/redis";
import { ragChat } from "@/lib/rag-chat";
import { reconstructURL } from "@/lib/utils";
import ChatWrapper from "@/components/ChatWrapper";

type Props = {
  params: {
    url: string | string[] | undefined;
  };
};

export default async function URLPage({ params: { url } }: Props) {
  const contructedUrl = reconstructURL(url as string[]);

  const isIndexed = await redis.sismember("indexed-urls", contructedUrl);

  if (!isIndexed) {
    await ragChat.context.add({
      type: "html",
      source: contructedUrl,
      config: {
        chunkOverlap: 50,
        chunkSize: 200,
      },
    });

    await redis.sadd("indexed-urls", contructedUrl);
  }

  return <ChatWrapper sessionId="xnnnsjjwjswjsksk-ddd" />;
}
