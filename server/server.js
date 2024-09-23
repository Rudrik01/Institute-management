//Start Server
const express = require("express");
const http = require("http");
const app = express();
let server = http.createServer(app);
server.listen(PORT, () => {
    _response.server = "Healthy";
    console.log(`Server running on port: ${PORT}`);
  });
  