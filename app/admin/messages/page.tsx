import prisma from "@/lib/prisma";
import InboxInterface from "./inbox-interface";

export const dynamic = "force-dynamic";

export default async function InboxPage() {
  const messages = await prisma.messages.findMany({
    orderBy: {
      createdAt: 'desc',
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

  return (
    <div className="h-[calc(100vh-64px)] overflow-hidden bg-black text-white">
      <InboxInterface initialMessages={messages} />
    </div>
  );
}
