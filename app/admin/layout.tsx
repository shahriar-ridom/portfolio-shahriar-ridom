import { AdminSidebar } from "./admin-sidebar"; // Import the client component

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">

      {/* Sidebar handles its own responsiveness */}
      <AdminSidebar />

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col h-screen overflow-hidden">
        {/* Added overflow-y-auto to main so only the content scrolls,
           while the sidebar stays fixed
        */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-16 md:pt-8">
          <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
