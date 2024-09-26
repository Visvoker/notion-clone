"use client";

import { EdgeStoreProvider, useEdgeStore } from "@/lib/edgestore";
import { PartialBlock, BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

import { useTheme } from "next-themes";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
}

const Editor = ({
  onChange,
  initialContent,
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file
    })
    return response.url;
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent:
      initialContent
        ? (JSON.parse(initialContent) as PartialBlock[])
        : undefined,
    uploadFile: handleUpload
  });

  return (
    <div>
      <div>
        <BlockNoteView
          editor={editor}
          theme={resolvedTheme === "dark" ? "dark" : "light"}
          onChange={() => {
            onChange(JSON.stringify(editor.document, null, 2));
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
