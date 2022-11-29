module.exports = ({
  firstName,
  lastName,
  bdate,
  sex,
  presenting_problems,
  referral,
  high_cholesterol,
  stroke,
  hepatitis,
  kidney_issues,
  heart_conditions,
  respiratory_problems,
  diabetes,
  alcohol,
  epilepsy,
  smoking,
  falls,
  rheumatoid_arthritis,
  fractures,
  cancer,
  thyroid,
  blood_disorder,
  medical_history_other,
  surgical_history,
  medications,
  bladder_diary_complete,
  bladder_diary_details,
  urine_colour,
  urine_odor,
  stress_incontinence_confirmed,
  stress_incontinence_leakage,
  overactive_bladder_confirmed,
  overactive_bladder_leakage,
  nocturnal_enuresis_confirmed,
  nocturnal_enuresis_leakage,
  overflow_incontinence_confirmed,
  overflow_incontinence_leakage,
  reflex_incontinence_confirmed,
  reflex_incontinence_leakage,
  pmd_confirmed,
  pmd_leakage,
  toileting_function,
  incontinence_aids,
  fluid_restriction,
  fluid_restriction_total,
  fluid_input_caffeine,
  fluid_input_alcohol,
  fluid_input_other_drinks,
  fluid_input_iv,
  fluid_input_total,
  urine_frequency,
  nocturia,
  bladder_min_void,
  bladder_max_void,
  fluid_output_total,
  mobility,
  mobility_details,
  cognitive_function,
  hand_function,
  environmental_barriers,
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
        -webkit-align-self: center;
  
      }
  
      .flex {
        display: -webkit-box;
        display: flex;
      }
  
      .center {
        justify-content: center;
        -webkit-box-pack: center;
  
        align-items: center;
        -webkit-align-self: center;
  
      }
  
      .align-center {
        text-align: center;
      }
  
      .space-around {
        justify-content: space-around;
        -webkit-box-pack: space-around;
      }
  
      .column {
        display: flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        width: 100%;
      }
  
      .top {
        width: 100%;
  
      }
  
      .end {
        align-items: flex-end;
        -webkit-align-self: flex-end;
      }
  
      .start {
        -webkit-align-self: flex-start;
  
        align-items: flex-start;
  
      }
  
      .bottom {
        display: flex;
        display: -webkit-box;
  
        width: 100%;
  
      }
  
      .align-left {
        text-align: left;
      }
  
      .align-right {
        text-align: right;
      }
  
      .left_col_25 {
        width: 25%;
      }
  
      .mid_col_25 {
        width: 25%;
      }
  
  
      .right_col_25 {
        width: 25%;
  
      }
  
      .left_col_50 {
        width: 50%;
      }
  
      .right_col_50 {
        width: 50%;
  
      }
  
      .margin-left {
        /* margin: auto; */
        margin-left: 5%;
      }
  
      .margin-left-2 {
        margin-left: 2%;
      }
  
      .margin-right {
        /* margin: auto; */
        margin-right: 2%;
      }
  
      .border {
        border: solid black 1px;
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
      <h3>Presenting Problems:</h3>
      <div class="flex">
        <p>${presenting_problems}</p>
  
      </div>
      <h3 class="heading">Medical History:</h3>
      <div class="flex margin-left">
        <div class="left_col_25">
          <div class="input-group mb-3 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="high_cholesterol" ${high_cholesterol}><label class="margin-left"
                  id="label_input_39_0" for="input_39_0">High Cholesterol</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="stroke" ${stroke}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Stroke</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="hepatitis" ${hepatitis}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Hepatitis</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="kidney_issues" ${kidney_issues}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Kidney Issues</label></div>
            </div>
          </div>
        </div>
        <div class="mid_col_25">
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
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="alcohol" ${alcohol}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Alcohol</label></div>
            </div>
          </div>
        </div>
        <div class="mid_col_25">
          <div class="input-group mb-3 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="epilepsy" ${epilepsy}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Epilepsy</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="smoking" ${smoking}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Smoking</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="falls" ${falls}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Falls</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="rheumatoid_arthritis" ${rheumatoid_arthritis}><label class="margin-left"
                  id="label_input_39_0" for="input_39_0">Rheumatoid Arthritis</label></div>
            </div>
          </div>
        </div>
        <div class="right_col_25">
          <div class="input-group mb-3 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="fractures" ${fractures}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Fractures</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="cancer" ${cancer}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Cancer</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="thyroid" ${thyroid}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Thyroid Problems</label></div>
            </div>
            <div class="input-group-prepend">
              <div class="input-group-text"><input type="checkbox" aria-describedby="label_39" class="form-checkbox"
                  id="input_39_0" name="blood_disorder" ${blood_disorder}><label class="margin-left" id="label_input_39_0"
                  for="input_39_0">Blood Disorder</label></div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <h3>Other/Details:</h3>
      <div class="flex">
        <p>${medical_history_other}</p>
      </div>
      <h3 class="heading">Surgical History:</h3>
      <div class="align-left">
        <p>${surgical_history}</p>
      </div>
      <h3 class="heading">Medications:</h3>
      <div class="align-left">
        <p>${medications}</p>
      </div>
  
      <h3 class="heading">Bladder:</h3>
      <div class="align-left">
        <p>Bladder Diary Maintained: ${bladder_diary_complete}</p>
        <p>Bladder Diary Details: ${bladder_diary_details}</p>
        <p>Urine Colour: ${urine_colour}</p>
        <label id="label_input_39_0" for="input_39_0">Urine Odor: </label><input type="checkbox"
          aria-describedby="label_39" class="form-checkbox" id="input_39_0" name="urine_odor" ${urine_odor}><label
          class="margin-left-2" id="label_input_39_0" for="input_39_0">Offensive</label>
      </div>
      <h3 class="heading">Bladder Dysfunction:</h3>
  
      <p>Stress Incontinence: ${stress_incontinence_confirmed}, Leakage Amount: ${stress_incontinence_leakage}</p>
      <p>Overactive Bladder: ${overactive_bladder_confirmed}, Leakage Amount: ${overactive_bladder_leakage}</p>
      <p>Nocturnal Enuresis: ${nocturnal_enuresis_confirmed}, Leakage Amount: ${nocturnal_enuresis_leakage}</p>
      <p>Overflow Incontinence : ${overflow_incontinence_confirmed}, Leakage Amount: ${overflow_incontinence_leakage}</p>
      <p>Reflex Incontinence: ${reflex_incontinence_confirmed}, Leakage Amount: ${reflex_incontinence_leakage}</p>
      <p>Post Micturition Dribbling: ${pmd_confirmed}, Leakage Amount: ${pmd_leakage}</p>
      <h3 class="heading">Toileting Function:</h3>
      <div class="align-left">
        <p>${toileting_function}</p>
      </div>
      <div class="align-left">
        <p>${incontinence_aids}</p>
      </div>
      <h3>Fluid Balance: </h3>
      <div class="align-left">
        <p>Fluid Restriction: ${fluid_restriction}</p>
        <p>Fluid Restriction Total: ${fluid_restriction_total}</p>
      </div>
      <div class="flex ">
        <div class="flex left_col_50 center">
          <div class="top flex center border">
            <h5>Fluid Input (24hrs)</h5>
          </div>
        </div>
  
        <div class="flex right_col_50 center">
          <div class="top flex center border">
            <h5>Fluid Output (24hrs)</h5>
          </div>
        </div>
      </div>
      <div class="flex ">
        <div class="left_col_25 border align-center ">
          <p>Caffeine Drinks: </p>
          <p>Alcohol Drinks: </p>
          <p>Other Drinks: </p>
          <p>IV Fluids: </p>
          <p>Total: </p>
        </div>
        <div class="mid_col_25 border align-center ">
          <p>${fluid_input_caffeine} mls</p>
          <p>${fluid_input_alcohol} mls</p>
          <p>${fluid_input_other_drinks} mls</p>
          <p>${fluid_input_iv} mls</p>
          <p>${fluid_input_total} mls</p>
        </div>
        <div class="mid_col_25 border align-center ">
          <p>Frequency: </p>
          <p>Nocturia: </p>
          <p>Minimum void: </p>
          <p>Maximum void:</p>
          <p>Total: </p>
  
        </div>
        <div class="right_col_25 border align-center ">
          <p>${urine_frequency}</p>
          <p>${nocturia}</p>
          <p>${bladder_min_void} mls</p>
          <p>${bladder_max_void} mls</p>
          <p>${fluid_output_total} mls</p>
  
        </div>
      </div>
  
      <h3 class="heading">Mobility:</h3>
      <div class="align-left">
        <p>Function: ${mobility}</p>
        <p>Details: ${mobility_details}</p>
      </div>
      <h3 class="heading">Cognitive Function:</h3>
      <div class="align-left">
        <p>${cognitive_function}</p>
      </div>
      <h3 class="heading">Hand Function:</h3>
      <div class="align-left">
        <p>${hand_function}</p>
      </div>
      <h3 class="heading">Environmental Barriers:</h3>
      <div class="align-left">
        <p>${environmental_barriers}</p>
      </div>
  
  
  
    </div>
  
  </body>
  
  </html>
    `;
};
