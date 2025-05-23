"use client";

import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { useRef } from "react";
import { LuImage } from "react-icons/lu";

type ImageUploaderProps = {
  setImageFile: (file: File | null) => void;
};

export default function ImageUploader({ setImageFile }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type === "image/jpeg") {
      setImageFile(file);
    } else {
      alert("Por favor, envie uma imagem .jpeg válida.");
      setImageFile(null);
    }

    e.target.value = "";
  };

  return (
    <>
      <input
        ref={inputRef}
        accept="image/jpeg"
        className="hidden"
        type="file"
        onChange={handleChange}
      />

      <Tooltip content="Enviar arquivo de imagem">
        <Button
          isIconOnly
          className="border dark:border-zinc-600"
          color="default"
          radius="full"
          type="button"
          onPress={handleButtonClick}
        >
          <LuImage />
        </Button>
      </Tooltip>
    </>
  );
}
