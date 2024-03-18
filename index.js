const express = require("express");
const body = require("body");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post("/services/apexrest/createAccount", (req, res) => {
  const { name, email, rollNumber, phone } = req.body;
  if (!name || !email || !rollNumber || !phone) {
    return res.status(400).json({ error: "Missing required parameters" });
  }
  const account = { name, email, rollNumber, phone, accountId: "12345678" };

  res.json({ success: true, account });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
