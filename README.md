# Node.js CI/CD Pipeline using GitHub Actions

## Project Overview
This project demonstrates automated CI/CD deployment of a Node.js application using GitHub Actions, Docker, DockerHub, and AWS EC2.

## Tools & Technologies
- GitHub
- GitHub Actions
- Node.js
- Docker
- DockerHub
- AWS EC2

## CI/CD Pipeline
1. Developer pushes code to the main branch.
2. GitHub Actions automatically triggers.
3. Node.js dependencies are installed.
4. Application tests are executed.
5. Docker image is built.
6. Docker image is pushed to DockerHub.
7. Latest image is deployed automatically to AWS EC2.

## DockerHub
`deepanshu11130/nodejs-demo-app:latest`

## Application
The application is deployed on AWS EC2 using Docker on port 3000.

## Workflow File
`.github/workflows/main.yml`

## Result
Successfully implemented an automated CI/CD pipeline using GitHub Actions with Docker image deployment to AWS EC2.
