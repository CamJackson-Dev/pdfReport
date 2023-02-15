const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

const pdfTemplate = require("./documents/index");

const app = express();

const port = process.env.REACT_APP_PORT || 5001;

app.use(cors());
//CORS middleware
var allowCrossDomain = function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://pdf-report-client.vercel.app/"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};
app.use(allowCrossDomain);
// app.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://pdf-report-client.vercel.app/"
//   ); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   next();
// });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.append("Access-Control-Allow-Origin", [
//     "https://pdf-report-client.vercel.app/",
//   ]);
//   res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.append("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.post("/create-pdf", (req, res) => {
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
