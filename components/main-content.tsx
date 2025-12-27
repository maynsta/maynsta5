"use client"

import { useSidebar } from "@/contexts/sidebar-context"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function MainContent({ children }: { children: ReactNode }) {
  const { isCollapsed, toggleSidebar } = useSidebar()

  return (
    <>
      {isCollapsed && (
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="fixed left-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
      <main
        className={cn(
          "pb-24 min-h-screen transition-all duration-300",
          isCollapsed ? "ml-0" : "ml-64"
        )}
      >
        {children}
      </main>
    </>
  )
}
