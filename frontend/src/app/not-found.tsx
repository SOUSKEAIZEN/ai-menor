import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-contrast">
      <div className="space-y-6 text-center max-w-md px-4">
        <h1 className="text-display text-8xl font-bold tracking-tighter text-main">404</h1>
        <h2 className="text-display text-2xl font-semibold">
          Looks like this page took a wrong turn.
        </h2>
        <p className="text-muted">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="pt-4">
          <Link href="/student/dashboard">
            <Button size="lg" className="w-full sm:w-auto">
              Return to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
