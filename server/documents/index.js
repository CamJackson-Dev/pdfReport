module.exports = ({
  firstName,
  lastName,
  bdate,
  sex,
  presenting_problems,
  referral,
  heart_conditions,
  respiratory_problems,
  diabetes,
  epilepsy,
  major_surgery,
  rheumatoid_arthritis,
  fractures,
  cancer,
  thyroid,
}) => {
  const today = new Date();
  return `
  <!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>PDF Result Template</title>
  <style>
    .invoice-box {
      /* max-width: 800px; */
      margin: auto;
      padding: 10px;
      border: 1px solid #eee;
      box-shadow: 0 0 10px rgba(0, 0, 0, .15);
      font-size: 16px;
      line-height: 20px;
      font-family: 'Helvetica Neue', 'Helvetica',
        color: #555;
    }

    html {
      zoom: 0.55;
    }

    .margin-top {
      margin-top: 50px;
    }

    .justify-center {
      text-align: center;
    }

    .invoice-box table {
      width: 100%;
      line-height: inherit;
      text-align: left;
    }

    .invoice-box table td {
      padding: 5px;
      vertical-align: top;
    }

    .invoice-box table tr td:nth-child(2) {
      text-align: right;
    }

    .invoice-box table tr.top table td {
      padding-bottom: 20px;
    }

    .invoice-box table tr.top table td.title {
      font-size: 20px;
      line-height: 45px;
      color: #333;
    }

    .invoice-box table tr.heading {
      background: #eee;
      border-bottom: 1px solid #ddd;
      font-weight: bold;
      text-align: center;
      width: 100% !important;

    }

    td {
      width: 50%;
    }

    .heading {
      width: 100%;
    }

    .invoice-box table tr.details td {
      padding-bottom: 20px;
    }

    .invoice-box table tr.item td {
      border-bottom: 1px solid #eee;
    }

    .invoice-box table tr.item.last td {
      border-bottom: none;
    }

    .invoice-box table tr.total td:nth-child(2) {
      border-top: 2px solid #eee;
      font-weight: bold;
    }

    .full_width {
      width: 100%;
    }

    .flex {
      display: -webkit-box;
      display: flex;
      justify-content: center;
      -webkit-box-pack: center;

      align-items: center;
    }

    .left_col {
      width: 30%;
    }

    .mid_col {
      width: 30%;

    }

    .right_col {
      width: 30%;

    }

    .margin-left {
      /* margin: auto; */
      margin-left: 5%;
    }

    .margin-right {
      /* margin: auto; */
      margin-right: 2%;
    }

    @media only screen and (max-width: 600px) {
      .invoice-box table tr.top table td {
        width: 100%;
        display: block;
        text-align: center;
      }

      .invoice-box table tr.information table td {
        width: 100%;
        display: block;
        text-align: center;
      }
    }
  </style>
</head>

<body>
  <div class="invoice-box">
    <table cellpadding="0" cellspacing="0">
      <tr class="top">
        <td colspan="2">
          <table>
            <tr>

              <td class="title"><img
                  src="https://firebasestorage.googleapis.com/v0/b/australasia-ca07e.appspot.com/o/quantum-therapy%2Flogo%2Flogo-bg.jpg?alt=media&token=58a588a4-4a9d-48d2-9e7b-7125f8690616"
                  style="width:100%; max-width:156px;"></td>
              <td>
                Date: ${`${today.getDate()}. ${
                  today.getMonth() + 1
                }. ${today.getFullYear()}.`}
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr class="heading">
        <td colspan="2">COMMUNITY NURSING BLADDER ASSESSMENT</td>
      </tr>
      <tr>
        <td>
          Surname: ${lastName}
        </td>
        <td>
          DOB: ${bdate}
        </td>
      </tr>
      <tr>
        <td>
          First Name: ${firstName}
        </td>
        <td>Sex:${sex}</td>
      </tr>
      <tr>
        <td></td>
        <td>Referred By:${referral}</td>
      </tr>

    </table>
    <h3">Presenting Problems:</h3>
      <div class="flex">
        <p>${presenting_problems}</p>

      </div>
      <h3 class="heading">Medical History:</h3>
      <div class="flex">
        <div class="left_col">
          <div class="input-group mb-3 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="heart_conditions" ${heart_conditions}><label class="margin-left"
                  id="label_input_39_0" for="input_39_0">Heart
                  conditions</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="respiratory_problems" ${respiratory_problems}><label class="margin-left"
                  id="label_input_39_0" for="input_39_0">Respiratory
                  Problems</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="diabetes" ${diabetes}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Diabetes</label></div>
            </div>
          </div>
        </div>
        <div class="mid_col">
          <div class="input-group mb-3 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="epilepsy" ${epilepsy}><label class="margin-left"
                  id="label_input_39_0" for="input_39_0">Epilepsy</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="major_surgery" ${major_surgery}><label class="margin-left"
                  id="label_input_39_0" for="input_39_0">Major Surgery</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="rheumatoid_arthritis" ${rheumatoid_arthritis}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Rheumatoid Arthritis</label></div>
            </div>
          </div>
        </div>
        <div class="right_col">
          <div class="input-group mb-3 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="fractures" ${fractures}><label class="margin-left"
                  id="label_input_39_0" for="input_39_0">Fractures</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="cancer" ${cancer}><label class="margin-left"
                  id="label_input_39_0" for="input_39_0">Cancer</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="thyroid" ${thyroid}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Thyroid Problems</label></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</body>

</html>
    `;
};
