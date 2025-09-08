import express from "express";

const app = express();
const port = Number(process.env.PORT || 80);

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: process.env.SERVICE_NAME || "hello-argocd-and-github-actions",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`listening on http://0.0.0.0:${port}`);
});
