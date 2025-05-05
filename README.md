# Task Manager Interview Project

This is a simple task manager application built with Next.js and React. The project is designed as an interview exercise for developers to demonstrate their understanding of React fundamentals.

## Project Overview

The Task Manager app allows users to:
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks by status (all, active, completed)

## Interview Instructions

As an interviewee, your task is to complete the 5 TODO items in the codebase. These tasks are designed to test your understanding of React, state management, and basic web development concepts.

### Setup Instructions

1. Clone this repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### TODO Items

You need to implement the following features:

1. **TODO #1: Add an "important" property to tasks**
   - Add an "important" boolean property to the Task type
   - Update the UI to show important tasks differently (e.g., with a star icon or different color)
   - Add a way for users to toggle the important status of a task

2. **TODO #2: Implement a function to toggle the "important" status**
   - Create a function that toggles the "important" property of a task
   - Connect this function to a UI element (like a star button)

3. **TODO #3: Implement localStorage persistence**
   - Save tasks to localStorage whenever they change
   - Load tasks from localStorage when the component mounts
   - Make sure the app doesn't crash if localStorage is empty

4. **TODO #4: Add form validation**
   - Prevent users from adding empty tasks
   - Display an error message when a user tries to add an empty task
   - Clear the error message when the input becomes valid

5. **TODO #5: Implement a "Clear Completed" button**
   - Add a button to remove all completed tasks
   - Implement the function to filter out completed tasks
   - Update the UI to include this new button

### Evaluation Criteria

Your implementation will be evaluated based on:
- Correctness: Does each feature work as expected?
- Code quality: Is your code clean, well-organized, and easy to understand?
- Problem-solving: How did you approach each problem?
- Attention to detail: Did you handle edge cases and potential errors?

### Tips

- Read through the entire codebase before starting to understand how everything works together
- Test each feature thoroughly after implementing it
- Don't hesitate to add comments explaining your thought process
- Focus on functionality first, then improve the UI if time permits

## Submission

When you've completed all the TODO items, please:
1. Make sure all features work correctly
2. Explain your implementation decisions
3. Be prepared to discuss your code and any challenges you faced

Good luck!
