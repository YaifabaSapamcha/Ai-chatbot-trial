# AI Chatbot Client

A modern web frontend for the AI Career Advisor Chatbot.

## Features

- Clean, responsive chat interface
- Real-time communication with backend API
- Career recommendations, learning roadmaps, and job market insights
- Mobile-friendly design

## Setup

1. Make sure the backend API is running on `http://localhost:5000`
2. Open `index.html` in a web browser
3. Start chatting!

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and responsive design
- `script.js` - JavaScript functionality and API communication

## Backend Integration

The client communicates with the backend via REST API at `/api/chat` endpoint.

Example request:
```json
{
  "message": "I know Python and machine learning"
}
```

Example response:
```json
{
  "careers": "Software Engineer, Data Scientist...",
  "roadmap": "1. Learn Python basics...",
  "job_market": "High demand for Python developers..."
}
```