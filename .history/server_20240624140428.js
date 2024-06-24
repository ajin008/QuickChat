require("dotenv").config();
const { app, http } = require("./app");

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(
    `server is running on port ${PORT} http://localhost:3000/user/login`
  );
});
