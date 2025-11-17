const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const helloRoutes = require("./routes/helloRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

// Swagger Setup
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/hello", helloRoutes);
app.use("/users", userRoutes);

// Server Start
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger UI:   http://localhost:${port}/api-docs`);
});
