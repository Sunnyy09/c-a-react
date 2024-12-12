import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import config from "../conf/config";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={config.tinyMceApiKey}
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "inserdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor ",
              ],
              toolbar:
                "undo redo | blocks | image | formatselect | bold italic forecolor| alignleft aligncenter alignright alignjustify | bullist nimlist outdent indent | removeformat | help",
              content_style:
                "body {font-family: Helvetica, Arial, sans-serif; font-size: 14px}",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
