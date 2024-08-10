"use client";

import React from "react";
import DOMPurify from "dompurify";
import markdownit from "markdown-it";

type Props = {
  value: string;
};

const md = markdownit();

const Markdown = ({ value }: Props) => {
  const result = md.render(value);

  const htmlContent = DOMPurify.sanitize(result);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Markdown;
