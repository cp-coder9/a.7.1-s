import { AppSidebar } from "@/components/layout/AppSidebar";
import { NotificationPanel } from "@/components/layout/NotificationPanel";
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative grid min-h-screen lg:grid-cols-[280px_1fr]">
      <AppSidebar />
      <main className="p-4 md:p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <NotificationPanel />
          {children}
        </div>
      </main>
    </div>
  );
}
