"use client";

import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/TextEffect";
import { zodResolver } from "@hookform/resolvers/zod";
import { UrlSchema, UrlValidator } from "@/lib/validator/url";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function Home() {
  const router = useRouter();

  const form = useForm<UrlValidator>({
    resolver: zodResolver(UrlSchema),
    defaultValues: {
      url: "",
    },
  });

  const onSubmit = (values: UrlValidator) => {
    router.push(`/${values.url}`);
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen flex flex-col justify-center items-center px-5">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-3">
        <TextEffect
          className="text-center text-5xl font-bold"
          per="char"
          preset="fade"
          as="h1"
        >
          AI chatbot
        </TextEffect>

        <TextEffect className="text-center" per="char" preset="fade" as="p">
          Enter your website URL to start chat.
        </TextEffect>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex items-center gap-2"
          >
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="bg-zinc-800 w-full flex-1 text-white border-0 placeholder:text-zinc-500"
                      placeholder="https://www.website.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0842A0]"
            >
              <Send className="h-5 w-5 flex-shrink-0" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
