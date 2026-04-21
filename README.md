# Project Setup Guide

A full-stack application with a frontend, backend, Supabase database, and Elasticsearch (via Docker).

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) installed on Linux

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
2. Navigate to **Project Settings → Database**
3. Copy the **Connection String** (URI format)
4. Create a `.env` file in the project root and add:

```env
DATABASE_URL=your_supabase_connection_string_here
```

---

## 3. Start Elasticsearch with Docker Compose

Elasticsearch is containerized and managed via Docker Compose.

### Start the container

```bash
docker-compose -f docker-compose.yml up -d
```

### If the container already exists and needs to be removed first

If you encounter conflicts from a previous run, remove the existing container before starting again:

```bash
rm -f docker-compose.yml
```

> **Note:** Only run the `rm -f` command if you need to replace or reset the compose file itself. To stop and remove running containers instead, use:
>
> ```bash
> docker-compose down
> ```

---

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

---

## Full Setup Sequence (Quick Reference)

```bash
# 1. Install dependencies
npm install

# 2. Set up your .env with DATABASE_URL

# 3. Start Elasticsearch
docker-compose -f docker-compose.yml up -d

# 4. Run migrations, seed, and ES setup
npm run migrate
npm run seed
npm run es:setup
```

---

## Troubleshooting

| Issue                       | Solution                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| Docker container conflict   | Run `docker-compose down` then `docker-compose -f docker-compose.yml up -d`               |
| `DATABASE_URL` not found    | Ensure `.env` file exists in the project root with the correct Supabase connection string |
| Elasticsearch not reachable | Wait a few seconds after `docker-compose up` — ES can take time to initialize             |
| Migration fails             | Double-check your `DATABASE_URL` is pointing to the correct Supabase project              |
