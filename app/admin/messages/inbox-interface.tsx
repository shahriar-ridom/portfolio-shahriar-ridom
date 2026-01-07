"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Mail, Trash2, Clock, User, AtSign } from "lucide-react";
import { deleteMessage, updateStatus } from "@/app/actions";
import { toast } from "sonner";

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  isRead: boolean;
  status: string;
};

export default function InboxInterface({
  initialMessages,
}: {
  initialMessages: Message[];
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedMessage = messages.find((m) => m.id === selectedId);

  const handleSelect = async (msg: Message) => {
    setSelectedId(msg.id);

    if (!msg.isRead) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, isRead: true } : m))
      );
      await updateStatus(msg.id, true);
    }
  };

  const handleDelete = async () => {
    if (!selectedMessage) return;

    const idToDelete = selectedMessage.id;

    setMessages((prev) => prev.filter((m) => m.id !== idToDelete));

    setSelectedId(null);

    try {
      await deleteMessage(idToDelete);
      toast.success("Message Deleted Successfully...!!!");
    } catch (error) {
      console.error("Failed to delete", error);
      toast.error("Coudn't delete the Message...!!!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-full border-t border-zinc-800">
      <div className="col-span-1 border-r border-zinc-800 overflow-y-auto bg-black">
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center sticky top-0 bg-black/95 backdrop-blur z-10">
          <h2 className="text-lg font-semibold text-white">Inbox</h2>
          <span className="text-xs text-zinc-500 font-mono">
            {messages.length} Messages
          </span>
        </div>

        <div className="flex flex-col">
          {messages.length === 0 ? (
            <div className="p-8 text-center text-zinc-500">
              No messages yet.
            </div>
          ) : (
            messages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => handleSelect(msg)}
                className={`flex flex-col gap-1 p-4 border-b border-zinc-800/50 text-left transition-colors hover:bg-zinc-900/50 ${
                  selectedId === msg.id
                    ? "bg-zinc-900 border-l-2 border-l-white"
                    : "border-l-2 border-l-transparent"
                }`}
              >
                <div className="flex justify-between w-full mb-1">
                  <span
                    className={`text-sm font-medium ${msg.isRead ? "text-zinc-400" : "text-white"}`}
                  >
                    {msg.name}
                  </span>
                  {!msg.isRead && (
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                  )}
                </div>
                <span
                  className="text-xs text-zinc-500 font-mono mb-2"
                  suppressHydrationWarning
                >
                  {formatDistanceToNow(new Date(msg.createdAt), {
                    addSuffix: true,
                  })}
                </span>
                <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                  {msg.message}
                </p>
              </button>
            ))
          )}
        </div>
      </div>
      <div className="col-span-2 bg-zinc-950/50 h-full overflow-y-auto p-0 flex flex-col">
        {selectedMessage ? (
          <>
            <div className="p-6 border-b border-zinc-800 flex justify-between items-start bg-zinc-950">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  Message Details
                </h1>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <span
                    className={`px-2 py-0.5 rounded border ${
                      selectedMessage.status === "New"
                        ? "border-green-900/50 bg-green-900/20 text-green-400"
                        : "border-zinc-700 bg-zinc-800 text-zinc-300"
                    } text-xs uppercase tracking-wider`}
                  >
                    {selectedMessage.status}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {new Date(selectedMessage.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
                  title="Delete"
                  onClick={handleDelete}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="p-8 max-w-3xl">
              <div className="flex items-center gap-4 p-4 mb-8 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <User size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">
                    {selectedMessage.name}
                  </div>
                  <div className="text-zinc-500 text-sm flex items-center gap-1">
                    <AtSign size={12} /> {selectedMessage.email}
                  </div>
                </div>
                <a
                  href={`mailto:${selectedMessage.email}`}
                  className="ml-auto px-4 py-2 text-sm bg-white text-black font-medium rounded hover:bg-zinc-200 transition-colors"
                >
                  Reply
                </a>
              </div>

              <div className="prose prose-invert prose-p:text-zinc-300 max-w-none">
                <h3 className="text-zinc-500 text-xs uppercase tracking-widest font-semibold mb-4">
                  Message Content
                </h3>
                <div className="whitespace-pre-wrap leading-relaxed text-base">
                  {selectedMessage.message}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-zinc-600 gap-4">
            <div className="p-4 rounded-full bg-zinc-900">
              <Mail size={32} />
            </div>
            <p>Select a message to read details</p>
          </div>
        )}
      </div>
    </div>
  );
}
