exports.signup_stageOne = async (req, res) => {
    console.log('triggering ')
    try {
      const { name, email, password } = req.body;
      console.log("Received signup request with data:", req.body);
  
      // Add signup logic here (e.g., save user to DB)
      res.status(200).json({ message: "Signup successful" }); // Send a success response
  
    } catch (error) {
      console.error("Error in signup process:", error);
      res.status(500).json({ error: "Internal Server Error" }); // Send an error response
    }
  };
  