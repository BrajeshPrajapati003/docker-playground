🐳 Docker Playground — A Complete Hands-On DevOps Lab

By Brajesh Prajapati

Welcome to Docker Playground, my personal, end-to-end learning environment where I explore Docker, container networking, microservices architecture, Dockerfiles, Docker Compose, multi-stage builds, and more.

This repository is a live lab that demonstrates practical industry-grade Docker concepts through real examples — the same stuff used in production engineering teams.

🚀 What This Repo Covers

✔️ Building Docker Images (with proper Dockerfiles)

Spring Boot (Java 17/21/25)

React + Vite + TypeScript

Next.js + TypeScript

TailwindCSS setups

Multi-stage builds

Optimized production images

Lightweight runtime stages (Temurin JRE / Alpine)

✔️ Running Containers

Exposing ports

Using named containers

Background mode vs interactive mode

Container logs & debugging

✔️ Docker Networking Deep Dive

Bridge networks

Container-to-container communication

Docker DNS (127.0.0.11)

How container names resolve to IPs

Why ping works in BusyBox but not in Nginx

DNS vs direct IP communication

User-defined networks vs default bridge

✔️ Docker Compose

Running backend + frontend + database together

Auto networking between services

Service name resolution

Ports, volumes, environment variables

Simplifying full-stack workflows

✔️ Databases in Docker

Running Postgres / MySQL in containers

Persistent volumes

Connecting via DBeaver / GUI tools

Accessing DB from backend containers

DB networking inside compose

✔️ BusyBox for Networking Debugging

Testing DNS

Testing IP routes

Inspecting network configs

Curl/wget/ping functionality

✔️ Real-World Scenarios I Practiced

Frontend → Backend communication

Backend → Database communication

Multi-container setups

Static hosting with NGINX

Node/Next.js runtime containers

Spring Boot microservice builds

🛠️ Tech Stack Used
Frontend

React

Next.js

TypeScript

Tailwind CSS

Vite

NGINX

Backend

Spring Boot (with Lombok, Security, JPA)

Java 17/21/25

Maven Wrapper

DevOps / Docker

Docker Engine

Docker Compose

Custom Dockerfiles

Multi-stage builds

BusyBox

Alpine Linux images

Temurin JDK/JRE

Internal DNS (127.0.0.11)

Databases

PostgreSQL

MySQL

📁 Repository Structure

<img width="583" height="690" alt="image" src="https://github.com/user-attachments/assets/7d4a193a-4f6a-41fa-a297-32d773b82bd4" />

🔥 Key Learnings Documented in This Repo

🔹 1. How Docker Builds Images

Layer caching

Copy vs add

Production optimization

Using .dockerignore

Multi-stage Dockerfiles

🔹 2. How Containers Talk to Each Other

Container DNS mapping

Hostname → IP mapping

Why container names are preferred over container IPs

Bridge network routing

Why IPs change after restart

How to inspect container IPs

🔹 3. Why BusyBox Can Ping NGINX but NGINX Can’t Ping Back

BusyBox includes ICMP tools

NGINX image is minimal (no ping)

Installing iputils if needed

Networking vs tools discussion

🔹 4. Full-Stack Docker Architecture

Frontend → Backend → Database flow

Proper port mapping (3000, 8080, 5432)

Internal networking vs external ports


🔹 5. Using Docker Compose as a Multi-Service Orchestrator

Building images automatically

Networking without configs

Automatic hostname resolution

Environment variables for DB connections

Persisting databases using volumes

🧩 Example Commands I Practiced

Build images
* docker build -t my-backend ./backend
* docker build -t my-frontend ./frontend

Run containers
* docker run -p 8080:8080 my-backend
* docker run -p 3000:3000 my-frontend

Create and inspect networks
* docker network create app-network
* docker network inspect app-network

Exec into containers
* docker exec -it busybox sh
* docker exec -it backend bash

Check DNS resolution
* ping backend
* nslookup backend
* getent hosts backend

🌟 Why I Created This Repo

To:

Cement my understanding of dockerized development

Build a full DevOps foundation

Create reusable templates for future projects

Showcase practical containerization skills

Understand real-world networking between services

Impress recruiters & teams with hands-on capability


🤝 Contributions

This is a personal learning space, but feel free to fork it or use the Dockerfiles for your own projects.

⭐ If you find this repo helpful, leave a star!
