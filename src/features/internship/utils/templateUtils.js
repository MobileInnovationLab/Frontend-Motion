import React from "react";

/**
 * Escapes HTML characters to prevent XSS attacks when generating HTML strings.
 */
export const sanitize = (str) => {
  if (str === null || str === undefined) return "";
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[m]);
};

/**
 * Dynamic template parser that returns an HTML string with sanitized values and semantic <strong> tags.
 */
export const parseDynamicTemplate = (template, data = {}) => {
  if (!template) return "";

  const STYLE_CLASS = "text-[#F82F1E] font-bold uppercase";

  let text = template;
  if (!data.nim) {
    text = text.replace(/\s*\(\{nim\}\)/gi, "").replace(/\{nim\}/gi, "");
  }

  return text
    .split(/(\{\w+\})/g)
    .map((part) => {
      const match = part.match(/^\{(\w+)\}$/);
      if (!match) return part;

      const key = match[1];
      const lowerKey = key.toLowerCase();
      const rawValue =
        data[lowerKey] !== undefined
          ? data[lowerKey]
          : data[key] !== undefined
          ? data[key]
          : "";

      const styleClass =
        lowerKey === "division"
          ? "text-[#F82F1E] font-bold"
          : STYLE_CLASS;

      return `<strong class="${styleClass}">${sanitize(rawValue)}</strong>`;
    })
    .join("");
};

/**
 * Replace placeholders like {name}, {division}, {nim} in a template string using Regex.
 * If options.toHtml is true, wraps highlighted variables in HTML tags with red and bold styles and escapes XSS.
 */
export const replaceTemplateWithRegex = (template, data = {}, options = {}) => {
  if (!template) return "";

  if (options.toHtml) {
    return parseDynamicTemplate(template, data);
  }

  let result = template;
  if (!data.nim) {
    result = result.replace(/\s*\(\{nim\}\)/gi, "").replace(/\{nim\}/gi, "");
  }

  return result.replace(/\{(\w+)\}/g, (match, key) => {
    const lowerKey = key.toLowerCase();
    const val =
      data[lowerKey] !== undefined
        ? data[lowerKey]
        : data[key] !== undefined
        ? data[key]
        : match;
    return val;
  });
};

/**
 * Parses and renders template string into React elements using Regex.
 * Highlights {name} and {division} in red and bold using unified <strong> tags.
 */
export const renderTemplateWithRegex = (template, data = {}) => {
  if (!template) return null;

  let text = template;
  if (!data.nim) {
    text = text.replace(/\s*\(\{nim\}\)/gi, "").replace(/\{nim\}/gi, "");
  }

  const parts = [];
  const regex = /\{(\w+)\}/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, placeholder] = match;
    const startIndex = match.index;

    if (startIndex > lastIndex) {
      parts.push(text.slice(lastIndex, startIndex));
    }

    const key = placeholder.toLowerCase();
    const val =
      data[key] !== undefined
        ? data[key]
        : data[placeholder] !== undefined
        ? data[placeholder]
        : "";

    const className =
      key === "division"
        ? "text-[#F82F1E] font-bold"
        : "text-[#F82F1E] font-bold uppercase";

    parts.push(
      React.createElement(
        "strong",
        {
          key: `highlight-${startIndex}-${key}`,
          className,
        },
        val
      )
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};
