# SnapIn, A Community Forum for Everyone 
[DEPLOYMENT LINK](https://snap-in.vercel.app/)

<div align="center">
  <br />
  <a href="https://youtu.be/_sSTzz13tVY" target="_blank">
    <img src="https://github.com/777anishsingh/SnapIn/blob/main/src/assets/Screenshot%202025-06-23%20215219.png" alt="Project Banner">
  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </div>
  <h3 align="center">Build a Modern Social Media Website</h3>
  <br />
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Code Snippets](#code-snippets)

## 🚀 Introduction

SnapIn is a fully featured community forum using modern web technologies. It covers everything from real-time interactions and Google authentication to stunning glassy UI elements with glowing gradient effects. The project is a dynamic, interactive, and beautifully designed web application.


## ⚙️ Tech Stack

- **React** for building the user interface
- **Vite** for fast development and build processes
- **TypeScript** for type safety and modern JavaScript features
- **Supabase** for backend services including authentication, real-time data, and storage
- **Tailwind CSS** for rapid and responsive styling

## ⚡️ Features

- **User Authentication via Google:**  
  Securely sign in with Google and display user avatars and usernames across the site.

- **Post Creation with Image Uploads:**  
  Create posts with rich content and optional image uploads, complete with the creator’s profile picture.

- **Dynamic Clapped System:**  
  Hearts with subtle white glow effects to indicate you clapped.

- **Modern Glassmorphism & Glow Effects:**  
  Enjoy a visually striking interface featuring glassy, transparent cards with glowing gradient borders on hover.

- **Real-Time Data Updates:**  
  All interactions (posting, clapping) update in real time using Supabase and React Query.

## 👌 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

Run the following commands in your terminal:

```bash
git clone https://github.com/777anishsingh/SnapIn.git
cd SnapIn
```

### Installation

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a file named `.env` in the project root and add your Supabase credentials and other configuration values:

```env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🕸️ Code Snippets

Below are some key code snippets from the project.

### RPC Function with Avatar URL

```sql
CREATE OR REPLACE FUNCTION get_posts_with_counts()
RETURNS TABLE (
  id integer,
  title text,
  content text,
  created_at timestamptz,
  image_url text,
  like_count integer,
  user_avatar_url text
)
LANGUAGE sql
AS $$
  SELECT 
    p.id,
    p.title,
    p.content,
    p.created_at,
    p.image_url,
    (SELECT COUNT(*) FROM votes v WHERE v.post_id = p.id) AS like_count,
    p.user_avatar_url
  FROM posts p
  ORDER BY p.created_at DESC;
$$;
```
