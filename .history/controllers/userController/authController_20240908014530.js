exports.signup_stageOne = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Log the received signup data
    console.log("Received signup request with data:", req.body);

    // After processing, redirect the user to the login page (or another page)
    res.redirect("/login");
  } catch (error) {
    console.error("Error in signup process:", error);

    // Respond with an error message and status
    res.status(500).send("Internal Server Error");
  }
};
