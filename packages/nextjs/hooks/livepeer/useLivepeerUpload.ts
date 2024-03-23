// Assume this imports a valid Livepeer hook
"use client";

import { useState } from "react";
import { useLivepeer } from "./useLivepeer";

// Assume this imports a valid Livepeer hook

// Assume this imports a valid Livepeer hook

// Assume this imports a valid Livepeer hook

// Assume this imports a valid Livepeer hook

// Assume this imports a valid Livepeer hook

// Assume this imports a valid Livepeer hook

// Assume this imports a valid Livepeer hook

// Assume this imports a valid Livepeer hook

// Assume this imports a valid Livepeer hook

// Assume this imports a valid Livepeer hook

export function useLivepeerUpload() {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState<string | undefined>(undefined);

  const livepeer = useLivepeer();

  const handleUpload = async (file: File | undefined | null) => {
    console.log({ file });

    setUploading(true);
    setUploadError("");
    console.log("called");
    try {
      if (!file) {
        throw new Error("File not selected for upload");
      }
      //   const fileName = "filename.mp4";

      //   const assetData = {
      //     name: fileName,
      //   };
      const response = await livepeer.asset.create(file);

      console.log("Asset upload request:", response);
      setUploadedUrl(response.object?.url);
      console.log(response.object?.url);
    } catch (error) {
      console.error("Error requesting asset upload:", error);
      setUploadError("Error requesting asset upload");
    } finally {
      setUploading(false);
    }
  };

  return {
    uploading,
    uploadError,
    uploadedUrl,
    handleUpload,
  };
}
