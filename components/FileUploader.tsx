// components/FileUploader.tsx
import React, { ChangeEvent } from "react";

interface FileUploaderProps {
  onFileSelect: (file: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          onFileSelect(reader.result as string);
        }
      };
    }
  };

  return (
    <input
      type="file"
      onChange={handleFileInput}
      accept="image/*"
      className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-white hover:opacity-80"
    />
  );
};

export default FileUploader;
