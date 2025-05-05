"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

// Define the Task type
type Task = {
  id: number
  text: string
  completed: boolean
  // TODO #1: Add an "important" property to the Task type
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Learn React basics", completed: false },
    { id: 2, text: "Build a simple project", completed: true },
    { id: 3, text: "Practice JavaScript", completed: false },
    { id: 4, text: "Study CSS layouts", completed: false },
    { id: 5, text: "Review Git commands", completed: true },
  ])
  const [newTaskText, setNewTaskText] = useState("")
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

  // TODO #3: Implement loading tasks from localStorage on component mount
  // and saving tasks to localStorage whenever they change

  const addTask = () => {
    if (newTaskText.trim() === "") return

    const newTask: Task = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setNewTaskText("")
  }

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // TODO #2: Implement a function to toggle the "important" status of a task

  // TODO #5: Implement a function to clear all completed tasks

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>

      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow"
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask()
          }}
        />
        <Button onClick={addTask}>
          <PlusCircle className="h-5 w-5 mr-1" />
          Add
        </Button>
      </div>

      {/* TODO #4: Add form validation and error message display for empty tasks */}

      <div className="flex justify-center gap-2 mb-4">
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} size="sm">
          All
        </Button>
        <Button variant={filter === "active" ? "default" : "outline"} onClick={() => setFilter("active")} size="sm">
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          onClick={() => setFilter("completed")}
          size="sm"
        >
          Completed
        </Button>
      </div>

      <div className="space-y-2">
        {filteredTasks.map((task) => (
          <Card key={task.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                  id={`task-${task.id}`}
                />
                <label htmlFor={`task-${task.id}`} className={`${task.completed ? "line-through text-gray-500" : ""}`}>
                  {task.text}
                </label>
                {/* Add UI for important tasks here */}
              </div>
              <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
                <Trash2 className="h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add a "Clear Completed" button here */}
    </div>
  )
}
