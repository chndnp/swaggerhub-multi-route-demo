# 🚀 Swagger + Node.js Multi-Route API (SwaggerHub + GitHub Actions)

This project is a **Node.js Express API** with a **multi-route structure**, fully documented using **Swagger/OpenAPI**, and integrated with **SwaggerHub** and **GitHub Actions CI** for automated validation.

---

## 📁 Project Structure

swaggerhub-multi-route-demo
│
├── .github
│ ├── workflows
|   ├── ci.yaml
├── controllers
│ ├── helloController.js
│ └── userController.js
│
├── routes
│ ├── hello.js
│ └── users.js
│
├── swagger.yaml
├── index.js
├── package.json
└── README.md


---

## 🛠️ Getting Started (WSL / Ubuntu)

### 1️⃣ Install dependencies

```
npm install
```
### 2️⃣ Run the server
```
node index.js
```
Server runs at: http://localhost:3000

## 📘 Swagger Documentation (Local)
Once server is running, open: http://localhost:3000/api-docs
This displays Swagger UI using your swagger.yaml.

## 📑 OpenAPI Validation
This project uses ibm-openapi-validator for validating the Swagger/OpenAPI spec.

Validate manually:
```
npx lint-openapi swagger.yaml
```

## ☁️ SwaggerHub Integration
The project is connected to SwaggerHub through:
* Auto-sync from SwaggerHub → GitHub
* OpenAPI spec stored at /swagger.yaml
* SwaggerHub pushes updates when the API is Published
* This ensures your GitHub repo and SwaggerHub stay in sync.

## 🤖 GitHub Actions CI
A CI pipeline runs on every push to the main branch.

What CI does:
✔ Installs dependencies
✔ Validates swagger.yaml using swagger-cli
✔ Starts the server and performs a smoke test
✔ Uploads the swagger file as an artifact

Workflow file is located at:
```
.github/workflows/ci.yml
```

## 🧪 Smoke Test (in CI)
The GitHub Action starts the server and checks:
```
curl http://localhost:3000/hello
```
If this returns 200 OK, the smoke test passes.

## 📦 API Endpoints
GET /hello
Returns a simple welcome message.

GET /users
Returns a list of sample users.

These endpoints are fully documented in swagger.yaml.

## 📘 Useful Commands
Install dependencies -> npm install
Start the server -> node index.js
Validate OpenAPI spec -> npx lint-openapi swagger.yaml