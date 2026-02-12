"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, X, Loader2, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  name: string;
  defaultValue?: string;
  folder?: string;
  label?: string;
  accept?: string;
  className?: string;
  rounded?: boolean;
}

export function ImageUpload({
  name,
  defaultValue = "",
  folder = "uploads",
  label = "Upload Image",
  accept = "image/jpeg,image/png,image/webp,image/avif,image/gif,image/svg+xml",
  className,
  rounded = false,
}: ImageUploadProps) {
  const [url, setUrl] = useState(defaultValue);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFile = useCallback(
    async (file: File) => {
      setError("");
      setUploading(true);

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", folder);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Upload failed");
        }

        setUrl(data.url);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setUploading(false);
      }
    },
    [folder],
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      uploadFile(file);
    } else {
      setError("Please drop an image file");
    }
  };

  const handleRemove = () => {
    setUrl("");
    setError("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={cn("space-y-2", className)}>
      {/* Hidden input to store the URL for form submission */}
      <input type="hidden" name={name} value={url} />

      {url ? (
        /* Preview */
        <div className="relative group">
          <div
            className={cn(
              "relative overflow-hidden border border-white/10 bg-white/[0.02]",
              rounded
                ? "rounded-full w-24 h-24"
                : "rounded-xl aspect-video w-full max-w-sm",
            )}
          >
            <img
              src={url}
              alt="Uploaded preview"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="absolute -top-2 -right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
            aria-label="Remove image"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="text-xs text-white/40 mt-1.5 truncate max-w-sm">
            {url}
          </p>
        </div>
      ) : (
        /* Upload Zone */
        <div
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          className={cn(
            "relative cursor-pointer border-2 border-dashed rounded-xl transition-all duration-200",
            "flex flex-col items-center justify-center gap-3 py-8 px-4",
            dragOver
              ? "border-primary/50 bg-primary/5"
              : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]",
            uploading && "pointer-events-none opacity-60",
          )}
        >
          {uploading ? (
            <>
              <Loader2 className="w-8 h-8 text-white/40 animate-spin" />
              <p className="text-sm text-white/50">Uploading...</p>
            </>
          ) : (
            <>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                {dragOver ? (
                  <Upload className="w-6 h-6 text-primary" />
                ) : (
                  <ImageIcon className="w-6 h-6 text-white/40" />
                )}
              </div>
              <div className="text-center">
                <p className="text-sm text-white/70">{label}</p>
                <p className="text-xs text-white/30 mt-1">
                  Drag & drop or click to browse
                </p>
                <p className="text-xs text-white/20 mt-0.5">
                  JPEG, PNG, WebP, AVIF, GIF, SVG — Max 10MB
                </p>
              </div>
            </>
          )}

          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
            aria-label={label}
          />
        </div>
      )}

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
