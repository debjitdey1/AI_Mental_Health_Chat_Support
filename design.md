# Mental Health AI Chatbot – System Design Document

## 1. System Architecture Overview

The system follows a **client-server architecture**:

Frontend (Next.js + Tailwind + TypeScript)  
→ API Layer (Next.js API Routes / Express.js)  
→ AI Layer (Google Gemini AI)  
→ Database (MongoDB)

---

## 2. High-Level Architecture

User  
→ Web Interface (Next.js)  
→ Backend API (Node.js + Express.js)  
→ AI Service (Google Gemini AI)  
→ Database (MongoDB)

---

## 3. Component Design

### 3.1 Frontend Components

- Authentication Pages (Login, Register)
- Chat Interface
- Mood Tracker Dashboard
- User Profile
- Feedback Form

**Technologies Used:**

- Next.js
- TypeScript
- Tailwind CSS
- Radix UI
- Framer Motion
- React Hook Form
- Lucide React

---

### 3.2 Backend Components

- Authentication API
- Chat API
- User Data API
- Mood Tracking API

**Technologies Used:**

- Node.js
- Express.js
- MongoDB

---

### 3.3 AI Integration Module

- Sends user messages to **Google Gemini AI API**
- Receives responses
- Filters unsafe content
- Returns structured responses

---

## 4. Database Design (MongoDB Collections)

### 4.1 Users Collection

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "createdAt": "date"
}
```

