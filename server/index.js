const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

const pdfTemplate = require("./documents/index");

const app = express();

const port = process.env.PORT || 5001;

app.use(
  cors({
    origin: "https://pdf-report-client-fj9e5td71-camjackson-dev.vercel.app",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res
        .status(500)
        .send({ error: "An error occurred while creating the PDF." });
    } else {
      res.status(200).send({ success: "PDF created successfully." });
    }
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
