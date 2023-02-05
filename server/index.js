const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const https = require("https");
const pdfTemplate = require("./documents/index");
const options = "";
const app = express();

const port = process.env.PORT || 5001;
// const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
https.createServer(options, app).listen(443);
app.post("/create-pdf", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

// 405 & 404 error catcher
// app.use("", (req, _, next) => {
//   const err = buildError(app, req);
//   if (!err) return next();
//   return next(err);
// });
// // 405 & 404 error catcher

// // Error handling
// app.use((err, _, res, __) =>
//   res.status(err.status).json({ message: err.message })
// );

app.listen(port, () => console.log(`Listening on port ${port}`));
