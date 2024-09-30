import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: () => (
    <div className="w-full h-screen bg-[url('public/shopping-cat.png')] bg-cover bg-center">
      {/* Your page content goes here */}
    </div>
  ),
});
