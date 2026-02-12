"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, X, Loader2, ImageIcon, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface MultiImageUploadProps {
  name: string;
  defaultValue?: string[];
  folder?: string;
  label?: string;
  accept?: string;
  className?: string;
  max?: number;
}

export function MultiImageUpload({
  name,
  defaultValue = [],
  folder = "uploads",
  label = "Upload Screenshots",
  accept = "image/jpeg,image/png,image/webp,image/avif,image/gif,image/svg+xml",
  className,
  max = 10,
}: MultiImageUploadProps) {
  const [urls, setUrls] = useState<string[]>(defaultValue);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFile = useCallback(
    async (file: File) => {
      if (urls.length >= max) {
        setError(`Maximum ${max} images allowed`);
        return;
      }

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

        setUrls((prev) => [...prev, data.url]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setUploading(false);
      }
    },
    [folder, urls.length, max],
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => uploadFile(file));
    }
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files) {
      Array.from(files)
        .filter((f) => f.type.startsWith("image/"))
        .forEach((file) => uploadFile(file));
    }
  };

  const handleRemove = (index: number) => {
    setUrls((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={cn("space-y-3", className)}>
      {/* Hidden inputs to store URLs for form submission */}
      {urls.map((url, i) => (
        <input key={i} type="hidden" name={name} value={url} />
      ))}
      {/* If no URLs, still send empty so FormData has the field */}
      {urls.length === 0 && <input type="hidden" name={name} value="" />}

      {/* Image Grid */}
      {urls.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {urls.map((url, index) => (
            <div
              key={index}
              className="relative group aspect-video rounded-lg overflow-hidden border border-white/10 bg-white/[0.02]"
            >
              <img
                src={url}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/70 text-white hover:bg-red-500 transition-colors opacity-0 group-hover:opacity-100"
                aria-label={`Remove screenshot ${index + 1}`}
              >
                <X className="w-3 h-3" />
              </button>
              <div className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/60 text-[10px] text-white/60 font-mono">
                {index + 1}
              </div>
            </div>
          ))}

          {/* Add More Button */}
          {urls.length < max && (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="aspect-video rounded-lg border-2 border-dashed border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col items-center justify-center gap-2 transition-all"
            >
              <Plus className="w-5 h-5 text-white/30" />
              <span className="text-xs text-white/30">Add more</span>
            </button>
          )}
        </div>
      )}

      {/* Upload Zone (shown when empty) */}
      {urls.length === 0 && (
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
                  Drag & drop or click to browse — Multiple files supported
                </p>
                <p className="text-xs text-white/20 mt-0.5">
                  JPEG, PNG, WebP, AVIF, GIF, SVG — Max 10MB each
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* File Input */}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        multiple
        aria-label={label}
      />

      {uploading && urls.length > 0 && (
        <div className="flex items-center gap-2 text-xs text-white/50">
          <Loader2 className="w-3 h-3 animate-spin" />
          Uploading...
        </div>
      )}

      {error && <p className="text-red-500 text-xs">{error}</p>}

      <p className="text-xs text-white/20">
        {urls.length}/{max} screenshots (optional)
      </p>
    </div>
  );
}
