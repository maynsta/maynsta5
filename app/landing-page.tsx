import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Animation */}
      <div className="stripe-bg" />
      
      {/* Header with Buttons */}
      <header className="absolute top-0 right-0 p-8 flex gap-4">
        <Link href="/auth/login">
          <Button variant="ghost" className="rounded-full px-8">Login</Button>
        </Link>
        <Link href="/auth/sign-up">
          <Button className="rounded-full px-8">Register</Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="text-center z-10 px-4">
        <div className="flex justify-center mb-8">
          <div className="h-24 w-24 bg-primary rounded-full flex items-center justify-center shadow-2xl">
            <Music className="h-12 w-12 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-foreground">
          Maynsta
        </h1>
        <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-lg mx-auto leading-tight">
          The best Music streaming and publishing App.
        </p>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 text-sm text-muted-foreground opacity-50">
        &copy; 2026 Maynsta Inc.
      </footer>
    </div>
  )
}
