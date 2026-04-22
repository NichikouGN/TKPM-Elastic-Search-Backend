# Project Setup Guide

A full-stack application with a frontend, backend, Supabase database, and Elasticsearch (via Docker).

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/) For Linux

```bash
#For Linux
sudo apt update
sudo apt install docker.io docker-compose

sudo systemctl enable docker
sudo systemctl start docker
```

---

## 1. Install Dependencies

From the project root, install all Node.js dependencies:

```bash
npm install
```

---

## 2. Configure Environment Variables

You will need your **Supabase Database URL** before running any migrations or seeds.

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to your project
3. Click on **Connect** on the top bar
4. Choose Direct > Session pooler and copy the Connecting String with your password included
5. Create a `.env` file in the project root and add:

```env
DATABASE_URL=your_supabase_connection_string_here
```

---

## 3. Start Elasticsearch with Docker Compose

Elasticsearch is containerized and managed via Docker Compose.

### Start the container

From the project root run

```bash
#For linux
sudo docker-compose up -d

#For Windows
docker compose up -d
```

## 4. Run Database Migrations

Apply the database schema to your Supabase instance:

```bash
npm run migrate
```

---

## 5. Seed the Database

Populate the database with initial data:

```bash
npm run seed
```

---

## 6. Set Up Elasticsearch Index

Sync and configure the Elasticsearch index with your data:

```bash
npm run es:setup
```

## 7. Start the server

Run the backend server

```bash
npm run dev
```
