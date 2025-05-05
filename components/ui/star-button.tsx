"use client"

// This is a placeholder component that the interviewee can use or modify
// for implementing the "important" task feature

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StarButtonProps {
  isImportant: boolean
  onClick: () => void
}

export function StarButton({ isImportant, onClick }: StarButtonProps) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className={isImportant ? "text-yellow-500" : "text-gray-300"}>
      <Star className="h-5 w-5" fill={isImportant ? "currentColor" : "none"} />
    </Button>
  )
}
