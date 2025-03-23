import builderApp from "./app/index";

const serverRunner = builderApp.listen(5000, () => {
  console.log(`SERVER RUNNING ON PORT: http://localhost:5000`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received closing HTTP Server");

  serverRunner.close(() => {
    console.log("HTTP Server closed 5000");
    process.exit(0);
  });
});
