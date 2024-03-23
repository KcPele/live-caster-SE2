"use client";

import { useState } from "react";
import { useLivepeerUpload } from "~~/hooks/livepeer/useLivepeerUpload";

const LivePeer = () => {
  const [video, setVideo] = useState<File | null>();
  const [name, setName] = useState("");
  const { uploading, uploadError, uploadedUrl, handleUpload } = useLivepeerUpload();
  console.log({ uploadedUrl });
  console.log({ uploadError });
  function fileUpload() {
    handleUpload(video);
  }
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <input
        value={name}
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <input
        type="file"
        accept="video/*"
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) {
            setVideo(file);
          }
        }}
      />
      <button type="button" disabled={uploading} onClick={fileUpload}>
        Upload
      </button>
    </div>
  );
};

export default LivePeer;
