import React from "react";

/**
 * Replace placeholders like {name}, {division}, {nim} in a template string using Regex.
 * If toHtml is true, wraps highlighted variables in HTML tags with red and bold styles.
 */
export const replaceTemplateWithRegex = (template, data = {}, options = {}) => {
  if (!template) return "";

  let result = template;

  // Clean up ({nim}) if nim is not provided
  if (!data.nim) {
    result = result.replace(/\s*\(\{nim\}\)/gi, "").replace(/\{nim\}/gi, "");
  }

  if (options.toHtml) {
    if (data.name !== undefined) {
      result = result.replace(
        /\{name\}/gi,
        `<strong class="text-[#F82F1E] font-bold uppercase">${data.name}</strong>`
      );
    }
    if (data.division !== undefined) {
      result = result.replace(
        /\{division\}/gi,
        `<strong class="text-[#F82F1E] font-bold">${data.division}</strong>`
      );
    }
    if (data.nim !== undefined) {
      result = result.replace(
        /\{nim\}/gi,
        `<strong class="text-[#F82F1E] font-bold">${data.nim}</strong>`
      );
    }
    return result;
  }

  if (data.name !== undefined) {
    result = result.replace(/\{name\}/gi, data.name);
  }
  if (data.division !== undefined) {
    result = result.replace(/\{division\}/gi, data.division);
  }
  if (data.nim !== undefined) {
    result = result.replace(/\{nim\}/gi, data.nim);
  }

  return result;
};

/**
 * Parses and renders template string into React elements using Regex.
 * Highlights {name} and {division} in red and bold corresponding to the UI styles.
 */
export const renderTemplateWithRegex = (template, data = {}) => {
  if (!template) return null;

  let text = template;

  // Clean up ({nim}) if nim is not provided
  if (!data.nim) {
    text = text.replace(/\s*\(\{nim\}\)/gi, "").replace(/\{nim\}/gi, "");
  }

  // Regex to match placeholders such as {name}, {division}, {nim}
  const regex = /\{(\w+)\}/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, placeholder] = match;
    const startIndex = match.index;

    // Push plain text before the placeholder
    if (startIndex > lastIndex) {
      parts.push(text.slice(lastIndex, startIndex));
    }

    const key = placeholder.toLowerCase();
    const val = data[key] ?? data[placeholder] ?? "";

    if (key === "name") {
      parts.push(
        <b
          key={`highlight-${startIndex}-${key}`}
          className="text-[#F82F1E] font-bold uppercase"
        >
          {val}
        </b>
      );
    } else if (key === "division") {
      parts.push(
        <span
          key={`highlight-${startIndex}-${key}`}
          className="text-[#F82F1E] font-bold"
        >
          {val}
        </span>
      );
    } else if (key === "nim") {
      parts.push(
        <b
          key={`highlight-${startIndex}-${key}`}
          className="text-[#F82F1E] font-bold"
        >
          {val}
        </b>
      );
    } else {
      parts.push(
        <strong
          key={`highlight-${startIndex}-${key}`}
          className="text-[#F82F1E] font-bold"
        >
          {val || fullMatch}
        </strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Push remaining text after the last placeholder
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};
