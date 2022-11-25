import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

import "./App.css";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    bdate: 0,
    sex: "undefined",
    referral: "",
    presenting_problems: "",
    heart_conditions: "",
    respiratory_problems: "",
    diabetes: "",
    epilepsy: "",
    major_surgery: "",
    rheumatoid_arthritis: "",
    fractures: "",
    cancer: "",
    thyroid: "",
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        console.log(res.data);
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "pt-report.pdf");
      });
  };

  render() {
    return (
      <div className="App">
        <div class="banner">
          <h3 class="assessmentHeading">
            COMMUNITY NURSING BLADDER ASSESSMENT
          </h3>
        </div>
        <br />
        <fieldset>
          <div class="form-row">
            <div class="form-group col-md-3 item">
              <label for="fname">
                First Name<span>*</span>
              </label>
              <input
                class="form-control"
                id="fname"
                type="text"
                name="firstName"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="lastName">
                Last Name<span>*</span>
              </label>
              <input
                class="form-control"
                id="lname"
                type="text"
                name="lastName"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="bdate">
                DOB<span>*</span>
              </label>
              <input
                class="form-control"
                id="bdate"
                type="date"
                name="bdate"
                //required
                onChange={this.handleChange}
              />
              <i class="fas fa-calendar-alt" />
            </div>
            <div class="form-group col-md-3 item">
              <label for="sex">
                Sex <span>*</span>
              </label>
              <select
                name="sex"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option selected value="Undefined" disabled />
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3 item">
              <label for="referral">
                Referred By<span>*</span>
              </label>
              <input
                class="form-control"
                id="referral"
                type="text"
                name="referral"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12 item">
              <label for="presenting_problems">
                Presenting problems, previous treatment & management strategies:
              </label>
              <textarea
                class="form-control"
                rows="5"
                id="presenting_problems"
                name="presenting_problems"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Is Condition:</h6>

          <div class="form-row">
            <div class="form-group col-md-3 item">
              <label for="gradual">
                Gradual <span>*</span>
              </label>
              <select
                name="gradual"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option selected value="Undefined" disabled />
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div class="form-group col-md-3 item">
              <label for="sudden">
                Sudden <span>*</span>
              </label>
              <select
                name="sudden"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option selected value="Undefined" disabled />
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div class="form-group col-md-3 item">
              <label for="onset">
                Onset <span>*</span>
              </label>
              <select
                name="onset"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option selected value="Undefined" disabled />
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div class="form-group col-md-3 item">
              <label for="worsening">
                Worsening <span>*</span>
              </label>
              <select
                name="worsening"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option selected value="Undefined" disabled />
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12 item">
              <label for="presenting_problems">
                How does your bladder problem affect your life:
              </label>
              <textarea
                class="form-control"
                rows="5"
                id="how_affects_life"
                name="how_affects_life"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Medical History:</h6>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div class="input-group mb-3 margin-left">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="heart_conditions"
                        value="checked"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label
                    class="margin-left"
                    id="label_input_39_0"
                    for="input_39_0"
                  >
                    Heart conditions
                  </label>
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="respiratory_problems"
                        value="checked"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label
                    class="margin-left"
                    id="label_input_39_0"
                    for="input_39_0"
                  >
                    Respiratory problems
                  </label>
                  <div class="input-group-prepend" id="diabetes">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="diabetes"
                        value="checked"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label
                    class="margin-left"
                    id="label_diabetes"
                    for="input_39_0"
                  >
                    Diabetes
                  </label>
                </div>
              </div>
              <div class="col-sm">
                <div class="input-group mb-3 margin-left">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="heart_conditions"
                        value="checked"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label
                    class="margin-left"
                    id="label_input_39_0"
                    for="input_39_0"
                  >
                    Heart conditions
                  </label>
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="respiratory_problems"
                        value="checked"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label
                    class="margin-left"
                    id="label_input_39_0"
                    for="input_39_0"
                  >
                    Respiratory problems
                  </label>
                  <div class="input-group-prepend" id="diabetes">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="diabetes"
                        value="checked"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label
                    class="margin-left"
                    id="label_diabetes"
                    for="input_39_0"
                  >
                    Diabetes
                  </label>
                </div>
              </div>
              <div class="col-sm">
                <div class="input-group mb-3 margin-left">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="heart_conditions"
                        value="checked"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label
                    class="margin-left"
                    id="label_input_39_0"
                    for="input_39_0"
                  >
                    Heart conditions
                  </label>
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="respiratory_problems"
                        value="checked"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label
                    class="margin-left"
                    id="label_input_39_0"
                    for="input_39_0"
                  >
                    Respiratory problems
                  </label>
                  <div class="input-group-prepend" id="diabetes">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="diabetes"
                        value="checked"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label
                    class="margin-left"
                    id="label_diabetes"
                    for="input_39_0"
                  >
                    Diabetes
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="input-group mb-3 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="heart_conditions"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Heart conditions
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="respiratory_problems"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Respiratory problems
            </label>
            <div class="input-group-prepend" id="diabetes">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="diabetes"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_diabetes" for="input_39_0">
              Diabetes
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="epilepsy"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Epilepsy
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="major_surgery"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Major Surgery
            </label>
          </div>
          <div class="input-group mb-5 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="rheumatoid_arthritis"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Rheumatoid Arthritis
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="fractures"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Fractures
            </label>
            <div class="input-group-prepend" id="diabetes">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="diabetes"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_diabetes" for="input_39_0">
              Diabetes
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="heart_conditions"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Heart conditions
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="respiratory_problems"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Respiratory problems
            </label>
          </div>
          <div class="input-group mb-3 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="epilepsy"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Epilepsy
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="major_surgery"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Major Surgery
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="rheumatoid_arthritis"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Rheumatoid Arthritis
            </label>
          </div>
          <div class="input-group mb-3 margin-left">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="fractures"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Fractures
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="cancer"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Cancer
            </label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  aria-describedby="label_39"
                  class="form-checkbox"
                  id="input_39_0"
                  name="thyroid"
                  value="checked"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label class="margin-left" id="label_input_39_0" for="input_39_0">
              Thyroid problems
            </label>
          </div>

          {/*      <span class="form-checkbox-item">
                  <span class="dragger-item" />
                  <input
                    type="checkbox"
                    aria-describedby="label_39"
                    class="form-checkbox"
                    id="input_39_9"
                    name="q39_input39[]"
                    value="None of the above"
                  />
                  <label id="label_input_39_9" for="input_39_9">
                    None of the above
                  </label>
                </span>
              </div>
            </div>
          </li> */}
          {/* <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div> */}

          {/* <div class="item">
            <label for="instructions">
              Presenting problems, previous treatment & management strategies:
            </label>
            <textarea id="instructions" rows="5" />
          </div>
           <div class="question">
            <label>Gradual</label>
            <div class="question-answer">
              <div>
                <input
                  type="radio"
                  value="y"
                  id="radio_1"
                  name="gradual"
                  onChange={this.handleChange}
                />
                <label for="radio_1" class="radio">
                  <span>Yes</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="n"
                  id="radio_2"
                  name="gradual"
                  onChange={this.handleChange}
                />
                <label for="radio_2" class="radio">
                  <span>No</span>
                </label>
              </div>
            </div>
            <label>Sudden</label>
            <div class="question-answer">
              <div>
                <input
                  type="radio"
                  value="y"
                  id="radio_3"
                  name="sudden"
                  onChange={this.handleChange}
                />
                <label for="radio_1" class="radio">
                  <span>Yes</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="n"
                  id="radio_4"
                  name="sudden"
                  onChange={this.handleChange}
                />
                <label for="radio_2" class="radio">
                  <span>No</span>
                </label>
              </div>
            </div>
            <label>Is condition:</label>
            <label>Onset</label>
            <div class="question-answer">
              <div>
                <input
                  type="radio"
                  value="none"
                  id="radio_1"
                  name="visit"
                  onChange={this.handleChange}
                />
                <label for="radio_1" class="radio">
                  <span>Yes</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="none"
                  id="radio_2"
                  name="visit"
                  onChange={this.handleChange}
                />
                <label for="radio_2" class="radio">
                  <span>No</span>
                </label>
              </div>
            </div>
            <label>Worsening</label>
            <div class="question-answer">
              <div>
                <input
                  type="radio"
                  value="none"
                  id="radio_1"
                  name="visit"
                  onChange={this.handleChange}
                />
                <label for="radio_1" class="radio">
                  <span>Yes</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="none"
                  id="radio_2"
                  name="visit"
                  onChange={this.handleChange}
                />
                <label for="radio_2" class="radio">
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
          <div class="item">
            <label for="instructions">
              How does your bladder problem affect your life?
            </label>
            <textarea id="instructions" rows="3" />
          </div>
          <div class="item">
            <label for="instructions">Client’s treatment goal: </label>
            <textarea id="instructions" rows="3" />
          </div>
          <div class="item">
            <label for="instructions">Medical History: </label>
            <textarea id="instructions" rows="3" />
          </div>
          <div class="item">
            <label for="instructions">Surgical History: </label>
            <textarea id="instructions" rows="3" />
          </div>
          <div class="item">
            <label for="instructions">Medications: </label>
            <textarea id="instructions" rows="3" />
          </div>
          <div class="item">
            <label for="instructions">Function: </label>
            <textarea id="instructions" rows="3" />
          </div>
          <div class="item">
            <label for="fname">
              Urine:<span>*</span>
            </label>
            <input id="fname" type="text" name="urine" //required />
          </div>
          <label for="sex">
            Mobility<span>*</span>
          </label>
          <select id="sex">
            <option selected value="" disabled selected />
            <option value="independant_mobility">Independant</option>
            <option value="impaired_mobility">Impaired</option>
            <option value="with_aid_mobility">Walks with Aid</option>
          </select>
          <div class="item">
            <label for="fname">
              Cognitive Function:<span>*</span>
            </label>
            <input id="fname" type="text" name="cognitive" //required />
          </div>
          <div class="item">
            <label for="fname">
              Hand Function:<span>*</span>
            </label>
            <input id="fname" type="text" name="hand_function" //required />
          </div>
          <div class="item">
            <label for="fname">
              Communication:<span>*</span>
            </label>
            <input id="fname" type="text" name="communication" //required />
          </div>
          <div class="item">
            <label for="fname">
              Environmental barriers:<span>*</span>
            </label>
            <input id="fname" type="text" name="environmental" //required />
          </div>
          <div class="item">
            <label for="instructions">Bladder Diary: </label>
            <textarea id="instructions" rows="5" />
          </div>
          <div class="item">
            <label for="instructions">Incontinence aids currently used: </label>
            <textarea id="instructions" rows="5" />
          </div>
          <div class="item">
            <label for="phone">
              Daytime Phone<span>*</span>
            </label>
            <input id="phone" type="number" name="phone" //required />
          </div>
          <div class="item">
            <label for="phone">
              Evening Phone<span>*</span>
            </label>
            <input id="phone" type="number" name="phone" //required />
          </div>
        </fieldset>
        <br />
        <fieldset>
          <legend>Appointment Information</legend>
          <div class="item">
            <label for="date">
              Date<span>*</span>
            </label>
            <input id="date" type="date" name="date" //required />
            <i class="fas fa-calendar-alt" />
          </div>
          <div class="item">
            <p>Time</p>
            <select>
              <option selected value="" disabled selected />
              <option value="m">Morning</option>
              <option value="a">Afternoon</option>
              <option value="e">Evening</option>
            </select>
          </div>
          <div class="question">
            <label>Preferred Physician</label>
            <div class="question-answer">
              <div>
                <input
                  type="radio"
                  value="none"
                  id="radio_1"
                  name="physician"
                />
                <label for="radio_1" class="radio">
                  <span>Dr. Anderson</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="none"
                  id="radio_3"
                  name="physician"
                />
                <label for="radio_3" class="radio">
                  <span>Dr. Patel</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="none"
                  id="radio_4"
                  name="physician"
                />
                <label for="radio_4" class="radio">
                  <span>No preference</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="none"
                  id="radio_5"
                  name="physician"
                />
                <label for="radio_5" class="radio">
                  <span>Dr. Jones</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="none"
                  id="radio_6"
                  name="physician"
                />
                <label for="radio_6" class="radio">
                  <span>Dr. Smith</span>
                </label>
              </div>
            </div>
          </div>
          */}
        </fieldset>
        <div class="btn-block">
          {/* <button type="submit" href="/">
            Submit
          </button> */}
          <button onClick={this.createAndDownloadPdf}>Download PDF</button>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
