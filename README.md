# Serverless Task Management System

A fully serverless task management system, built using **Node.js + Express.js** on AWS Lambda, with **Next.js** as the frontend.

This project leverages **AWS Serverless Application Model (SAM)** for infrastructure as code, and **GitHub Actions** for automated CI/CD.

---

## 📦 Project Structure

```
graphql
复制编辑
root/
├── frontend/                 # Next.js frontend (deployed externally)
│
├── backend/                  # Express.js app for AWS Lambda
│   ├── src/
│   │    ├── routes/           # API route handlers
│   │    ├── services/         # Business logic (DynamoDB, S3)
│   │    ├── app.js            # Express app entry point
│   │    └── lambda.js         # Express-to-Lambda adapter
│   │
│   ├── package.json           # Backend dependencies
│   ├── template.yaml          # AWS SAM infrastructure template
│
├── .github/
│   └── workflows/
│        └── deploy.yml        # GitHub Actions deployment pipeline
│
└── README.md

```

---

## 🚀 Key Technologies

- **AWS Lambda** — Serverless compute
- **API Gateway** — API entry point (Proxy mode)
- **DynamoDB** — NoSQL database for task storage
- **S3** — File attachment storage (presigned URL)
- **EventBridge** — Scheduled task status updates
- **Step Functions** — Task approval workflows
- **Node.js + Express.js** — Backend application
- **Next.js** — Frontend application
- **AWS SAM** — Infrastructure as Code (IaC)
- **GitHub Actions** — Continuous Integration and Deployment (CI/CD)

---

## 🔥 Features

- Task creation, listing, and management
- File attachments uploaded via S3 presigned URLs
- Scheduled background tasks using EventBridge
- Task approval workflows via Step Functions
- Fully serverless backend architecture
- Automated deployment with GitHub Actions
- Scalable and cost-effective design

---

## 🛠️ Deployment Guide

### 1. Prerequisites

- AWS account with access key and secret key
- AWS CLI installed and configured
- AWS SAM CLI installed (`pip install aws-sam-cli`)
- Node.js 18+
- GitHub repository with configured Secrets:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`

### 2. Backend Deployment

From the root of the project:

```bash
bash
复制编辑
cd backend/
npm install
sam build
sam deploy --guided

```

When running `sam deploy --guided`, you will be asked:

- Stack Name (e.g., `serverless-task-manager`)
- AWS Region (e.g., `ap-southeast-2`)
- Confirm changesets
- Allow SAM to create IAM roles (choose `Y`)

The output will provide the deployed API Gateway URL.

### 3. Frontend Deployment

The frontend is developed separately under `/frontend/`, and can be deployed to external platforms such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Configure your environment variables (such as API base URL) in the frontend application.

---

## 🔄 GitHub Actions CI/CD

Whenever you push to the `main` branch, GitHub Actions will automatically:

- Install backend dependencies
- Build the SAM application
- Deploy the infrastructure and application to AWS

The pipeline is defined in `.github/workflows/deploy.yml`.

---

## 🧩 API Overview

| Method | Endpoint  | Description              |
| ------ | --------- | ------------------------ |
| POST   | /tasks    | Create a new task        |
| GET    | /tasks    | List all tasks           |
| GET    | /upload   | Generate S3 upload URL   |
| POST   | /approval | Submit approval decision |

More endpoints can be easily added through the Express.js routing system.

---

## 📈 Future Improvements

- JWT-based authentication and authorization
- Improved Step Functions for multi-level approvals
- WebSocket-based real-time task updates
- Full frontend task dashboard (Kanban view)

---

## 📜 License

This project is licensed under the MIT License.

---

# ✅ Quick Start

1. Clone the repo
2. Configure AWS credentials
3. Deploy backend using SAM
4. Deploy frontend separately
5. Start building amazing things!

---

# 🌟 Acknowledgements

- [AWS Serverless Application Model (SAM)](https://docs.aws.amazon.com/serverless-application-model/)
- [AWS Lambda + Express Patterns](https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https.html)
- [Vendia Serverless Express](https://www.npmjs.com/package/@vendia/serverless-express)

---

# 📣 Contact

For any questions, feel free to reach out!
