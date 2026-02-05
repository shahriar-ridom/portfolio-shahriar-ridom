import prisma from "@/lib/prisma";
import InboxInterface from "./inbox-interface";
import { connection } from "next/server";
import { Suspense } from "react";

async function MessageList() {
  await connection();
  const messages = await prisma.messages.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      message: true,
      createdAt: true,
      isRead: true,
      status: true,
    },
  });

  return <InboxInterface initialMessages={messages} />;
}

export default function InboxPage() {
  return (
    <div className="h-[calc(100vh-64px)] overflow-hidden bg-black text-white">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-full text-zinc-400">
            Loading inbox...
          </div>
        }
      >
        <MessageList />
      </Suspense>
    </div>
  );
}
