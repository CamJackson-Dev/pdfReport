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
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "pt-report.pdf");
      });
  };

  render() {
    return (
      <div className="App">
        {/* <input
          type="text"
          placeholder="Surname"
          name="lastName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="First Name!"
          name="firstName"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 1"
          name="price1"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 2"
          name="price2"
          onChange={this.handleChange}
        /> */}
        {/* <div class="testbox"> */}
        <div class="banner">
          <h1 class="assessmentHeading">
            COMMUNITY NURSING BLADDER ASSESSMENT
          </h1>
        </div>
        <br />
        <fieldset>
          <legend>Patient Information</legend>
          <div class="item">
            <label for="fname">
              First Name<span>*</span>
            </label>
            <input
              id="fname"
              type="text"
              name="firstName"
              required
              onChange={this.handleChange}
            />
          </div>
          <div class="item">
            <label for="lastName">
              Last Name<span>*</span>
            </label>
            <input
              id="lname"
              type="text"
              name="lastName"
              required
              onChange={this.handleChange}
            />
          </div>
          <div class="item">
            <label for="bdate">
              DOB <span>*</span>
            </label>
            <input
              id="bdate"
              type="date"
              name="bdate"
              required
              onChange={this.handleChange}
            />
            <i class="fas fa-calendar-alt" />
          </div>
          <label for="sex">
            Sex <span>*</span>
          </label>
          <select
            name="sex"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option selected value="Undefined" disabled />
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div class="item">
            <label for="referral">
              Referred By<span>*</span>
            </label>
            <input
              id="referral"
              type="text"
              name="referral"
              required
              onChange={this.handleChange}
            />
          </div>
          <div class="item">
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
            <input id="fname" type="text" name="urine" required />
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
            <input id="fname" type="text" name="cognitive" required />
          </div>
          <div class="item">
            <label for="fname">
              Hand Function:<span>*</span>
            </label>
            <input id="fname" type="text" name="hand_function" required />
          </div>
          <div class="item">
            <label for="fname">
              Communication:<span>*</span>
            </label>
            <input id="fname" type="text" name="communication" required />
          </div>
          <div class="item">
            <label for="fname">
              Environmental barriers:<span>*</span>
            </label>
            <input id="fname" type="text" name="environmental" required />
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
            <input id="phone" type="number" name="phone" required />
          </div>
          <div class="item">
            <label for="phone">
              Evening Phone<span>*</span>
            </label>
            <input id="phone" type="number" name="phone" required />
          </div>
        </fieldset>
        <br />
        <fieldset>
          <legend>Appointment Information</legend>
          <div class="item">
            <label for="date">
              Date<span>*</span>
            </label>
            <input id="date" type="date" name="date" required />
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
