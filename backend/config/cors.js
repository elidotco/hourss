const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000", // Your frontend URL
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// Enable CORS with options or without if you want to allow all origins
cors(corsOptions);
