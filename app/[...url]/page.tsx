import { reconstructURL } from "@/lib/utils";

type Props = {
  params: {
    url: string | string[] | undefined;
  };
};

export default function URLPage({ params: { url } }: Props) {
  const contructedUrl = reconstructURL(url as string[]);

  console.log(contructedUrl);

  return <div>URLPage {contructedUrl}</div>;
}
