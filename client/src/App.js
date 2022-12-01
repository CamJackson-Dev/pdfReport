import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import stool from "./assets/Bristol-Stool-Form.png";

import "./App.css";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    bdate: 0,
    sex: "undefined",
    presenting_problems: "",
    referral: "",
    high_cholesterol: "",
    stroke: "",
    hepatitis: "",
    kidney_issues: "",
    heart_conditions: "",
    respiratory_problems: "",
    diabetes: "",
    alcohol: "",
    epilepsy: "",
    smoking: "",
    falls: "",
    rheumatoid_arthritis: "",
    fractures: "",
    cancer: "",
    thyroid: "",
    blood_disorder: "",
    medical_history_other: "",
    surgical_history: "",
    medications: "",
    bladder_diary_complete: "Yes",
    bladder_diary_details: "",
    urine_colour: "",
    urine_odor: "",
    toileting_function: "",
    incontinence_aids: "",
    fluid_restriction: "No",
    fluid_restriction_total: 0,
    fluid_input_caffeine: 0,
    fluid_input_alcohol: 0,
    fluid_input_other_drinks: 0,
    fluid_input_iv: 0,
    fluid_input_total: 0,
    urine_frequency: "undefined",
    nocturia: "undefined",
    bladder_min_void: 0,
    bladder_max_void: 0,
    fluid_output_total: 0,
    stress_incontinence_confirmed: "Nil",
    stress_incontinence_leakage: "None",
    overactive_bladder_confirmed: "Nil",
    overactive_bladder_leakage: "None",
    nocturnal_enuresis_confirmed: "Nil",
    nocturnal_enuresis_leakage: "None",
    overflow_incontinence_confirmed: "Nil",
    overflow_incontinence_leakage: "None",
    reflex_incontinence_confirmed: "Nil",
    reflex_incontinence_leakage: "None",
    pmd_confirmed: "Nil",
    pmd_leakage: "None",
    mobility: "Independant",
    mobility_details: "",
    cognitive_function: "",
    hand_function: "",
    environmental_barriers: "",
    faecal_soiling: "",
    faecal_incontinence: "",
    stool_type: "undefined",
    other_bowel_symptoms: "",
    skin_condition: "",
    skin_condition_comments: "",
    urogenital_examination_males: "",
    pharmaceutical_incontinence: "",
    restricted_mobility_incontinence: "",
    atrophic: "",
    infection_incontinence: "",
    stool_impaction_incontinence: "",
    euo_incontinence: "",
    dehydration_incontinence: "",
    praised_comments: "",
    assessment_completed: "",
    assessment_completed_date: "",
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/australasia-ca07e.appspot.com/o/quantum-therapy%2Flogo%2Flogo-bg.jpg?alt=media&token=58a588a4-4a9d-48d2-9e7b-7125f8690616"
            width="100%"
          />
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
          <div class="form-row border_bottom">
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
                        name="high_cholesterol"
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
                    High Cholesterol
                  </label>
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="stroke"
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
                    Stroke
                  </label>
                  <div class="input-group-prepend" id="diabetes">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="hepatitis"
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
                    Hepatitis
                  </label>
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="kidney_issues"
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
                    Kidney issues
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
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="alcohol"
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
                    Alcohol
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
                        name="epilepsy"
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
                    Epilepsy
                  </label>
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="smoking"
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
                    Smoking
                  </label>
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="falls"
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
                    Falls
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
                  <label
                    class="margin-left"
                    id="label_input_39_0"
                    for="input_39_0"
                  >
                    Rheumatoid Arthritis
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
                        name="fractures"
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
                  <label
                    class="margin-left"
                    id="label_input_39_0"
                    for="input_39_0"
                  >
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
                  <label
                    class="margin-left"
                    id="label_input_39_0"
                    for="input_39_0"
                  >
                    Thyroid problems
                  </label>
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="checkbox"
                        aria-describedby="label_39"
                        class="form-checkbox"
                        id="input_39_0"
                        name="blood_disorder"
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
                    Blood Disorder
                  </label>
                </div>
              </div>
            </div>
            <div class="form-row ">
              <div class="form-group col-md-12 item">
                <label for="medical_history_other">
                  Other Medical conditions:
                </label>
                <textarea
                  class="form-control"
                  rows="5"
                  id="medical_history_other"
                  name="medical_history_other"
                  //required
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <h6 class="heading">Surgical History:</h6>
          <div class="form-row border_bottom">
            <div class="form-group col-md-12 item">
              {/* <label for="surgical_history">Surgical History:</label> */}
              <textarea
                class="form-control"
                rows="5"
                id="surgical_history"
                name="surgical_history"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Medications:</h6>
          <div class="form-row border_bottom">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Medications:</label> */}
              <textarea
                class="form-control"
                rows="5"
                id="medications"
                name="medications"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h5 class="heading">Bladder:</h5>
          <div class="form-row">
            <div class="form-group col-md-3 item">
              <label for="bladder_diary_complete">
                Completing Bladder Diary:
              </label>
              <select
                name="bladder_diary_complete"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                {/* <option selected value="unselected" disabled /> */}
                <option selected value="Yes">
                  Yes
                </option>
                <option value="No">No</option>
              </select>
            </div>
            <div class="form-group col-md-3 item">
              <label for="bladder_diary_details">Details:</label>
              <input
                class="form-control"
                id="bladder_diary_details"
                type="text"
                name="bladder_diary_details"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="sex">Urine Colour:</label>
              <select
                name="urine_colour"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option selected value="unselected" disabled />
                <option value="Clear">Clear</option>
                <option value="Pale Yellow">Pale yellow</option>
                <option value="Yellow">Yellow</option>
                <option value="Amber">Amber</option>
                <option value="Red">Red</option>
              </select>
            </div>
            <div class="form-group col-md-3 item">
              <label for="fname">Urine Odor:</label>
              <div class="input-group-prepend">
                <div class="input-group-text bigCheckbox">
                  <input
                    type="checkbox"
                    aria-describedby="label_39"
                    class="form-checkbox"
                    id="input_39_0"
                    name="urine_odor"
                    value="checked"
                    onChange={this.handleChange}
                  />
                </div>
                <label for="odor">Offensive</label>
              </div>
            </div>
          </div>
          <h6 class="heading">Toileting Function:</h6>
          <div class="form-row">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Medications:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="toileting_function"
                name="toileting_function"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Incontinence aids currently used:</h6>
          <div class="form-row">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Medications:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="incontinence_aids"
                name="incontinence_aids"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Fluid Balance</h6>
          <div class="form-row">
            <div class="form-group col-md-3 item">
              <label for="fname">Fluid Restriction:</label>
              <div class="input-group-prepend">
                <div class="input-group-text bigCheckbox">
                  <input
                    type="checkbox"
                    aria-describedby="label_39"
                    class="form-checkbox"
                    id="input_39_0"
                    name="fluid_restriction"
                    value="Yes"
                    onChange={this.handleChange}
                  />
                </div>
                <label for="odor">Yes</label>
              </div>
            </div>

            <div class="form-group col-md-3 item">
              <label for="fname">Fluid Restriction Total (mls):</label>
              <input
                class="form-control"
                id="fluid_restriction_total"
                type="number"
                name="fluid_restriction_total"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Fluid Input - 24hrs:</h6>
          <div class="form-row">
            <div class="form-group col-md-3 item">
              <label for="fname">Caffeine Drinks (mls):</label>
              <input
                class="form-control"
                id="fluid_input_caffeine"
                type="number"
                name="fluid_input_caffeine"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="fname">Alcohol Drinks (mls):</label>
              <input
                class="form-control"
                id="fluid_input_alcohol"
                type="number"
                name="fluid_input_alcohol"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="fname">Other Drinks (mls):</label>
              <input
                class="form-control"
                id="fluid_input_other_drinks"
                type="number"
                name="fluid_input_other_drinks"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="fname">IV Fluids (mls):</label>
              <input
                class="form-control"
                id="fluid_input_iv"
                type="number"
                name="fluid_input_iv"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="fname">Total fluids (mls):</label>
              <input
                class="form-control"
                id="fluid_input_total"
                type="number"
                name="fluid_input_total"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Fluid Output - 24hrs:</h6>
          <div class="form-row">
            <div class="form-group col-md-3 item">
              <label for="urine_frequency">Frequency:</label>
              <input
                class="form-control"
                id="urine_frequency"
                type="text"
                name="urine_frequency"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="nocturia">Nocturia:</label>
              <input
                class="form-control"
                id="nocturia"
                type="text"
                name="nocturia"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="bladder_min_void">Minimum void (mls):</label>
              <input
                class="form-control"
                id="bladder_min_void"
                type="number"
                name="bladder_min_void"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="bladder_max_void">Maximum void (mls):</label>
              <input
                class="form-control"
                id="bladder_max_void"
                type="number"
                name="bladder_max_void"
                //required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-3 item">
              <label for="fluid_output_total">Total fluids (mls):</label>
              <input
                class="form-control"
                id="fluid_output_total"
                type="number"
                name="fluid_output_total"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-row border_bottom">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Type of Bladder Dysfunction</th>
                  <th scope="col">Questions to ask the client</th>
                  <th scope="col">Yes/No</th>
                  <th scope="col">Amount of leakage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Stress Incontinence</th>
                  <td>
                    <i>
                      Do you leak when: cough, laugh or sneeze? go upstairs /
                      downhill? get up from chair / bed?
                    </i>
                  </td>
                  <td>
                    <select
                      name="stress_incontinence_confirmed"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="stress_incontinence_leakage"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="None">
                        None
                      </option>
                      <option value="Small">Small</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Large">Large</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Overactive Bladder & Urge Incontinence</th>
                  <td>
                    <i>
                      How long can you hold on after you feel a desire to void?
                      Do you the feel an urgent desire to void when you hear
                      water running or put you key in the door? Is the desire so
                      great that you would leak if you did not go to the toilet?
                    </i>
                  </td>
                  <td>
                    <select
                      name="overactive_bladder_confirmed"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="overactive_bladder_leakage"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="None">
                        None
                      </option>
                      <option value="Small">Small</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Large">Large</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Nocturnal Enuresis</th>
                  <td>
                    <i>Do you wet the bed? If yes, how often?</i>
                  </td>
                  <td>
                    <select
                      name="nocturnal_enuresis_confirmed"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="nocturnal_enuresis_leakage"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="None">
                        None
                      </option>
                      <option value="Small">Small</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Large">Large</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Overflow Incontinence</th>
                  <td>
                    <i>
                      Do you know when urine is leaking? Are you wet all the
                      time? Do you completely empty your bladder? Is your stream
                      slow to start Do you have to strain to pass urine?
                    </i>
                  </td>
                  <td>
                    <select
                      name="overflow_incontinence_confirmed"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="overflow_incontinence_leakage"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="None">
                        None
                      </option>
                      <option value="Small">Small</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Large">Large</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Reflex Incontinence </th>
                  <td>Does your bladder empty without warning?</td>
                  <td>
                    <select
                      name="reflex_incontinence_confirmed"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="reflex_incontinence_leakage"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="None">
                        None
                      </option>
                      <option value="Small">Small</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Large">Large</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Post Micturition Dribbling</th>
                  <td>
                    <i>Do you leak immediately after voiding?</i>
                  </td>
                  <td>
                    <select
                      name="pmd_confirmed"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="pmd_leakage"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="None">
                        None
                      </option>
                      <option value="Small">Small</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Large">Large</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5 class="heading">Mobility:</h5>
          <div class="form-row border_bottom">
            <div class="form-group col-md-3 item">
              <label for="mobility">Function:</label>
              <select
                name="mobility"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                {/* <option selected value="unselected" disabled /> */}
                <option selected value="Independant">
                  Independant
                </option>
                <option value="Impaired">Impaired</option>
              </select>
            </div>
            <div class="form-group col-md-3 item">
              <label for="fname">Details:</label>
              <input
                class="form-control"
                id="mobility_details"
                type="text"
                name="mobility_details"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Cognitive Function:</h6>
          <div class="form-row">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Medications:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="cognitive_function"
                name="cognitive_function"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Communication:</h6>
          <div class="form-row">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Medications:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="communication"
                name="communication"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Hand Function:</h6>
          <div class="form-row">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Medications:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="hand_function"
                name="hand_function"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Environmental Barriers:</h6>
          <div class="form-row border_bottom">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Medications:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="environmental_barriers"
                name="environmental_barriers"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h5 class="heading">Bowels:</h5>
          <div class="form-row center">
            <h6 class="heading">Bristol Stool Form Scale</h6>

            <img src={stool} width="80%" />
          </div>
          <h6 class="heading">Bowel Symptoms:</h6>
          <div class="form-row">
            <p class="margin-left">
              ** If yes to any of the following - please perform bowel
              assessment. Refer to Bristol Stool Form Scale Table for Stool
              Type.
            </p>

            <div class="form-group col-md-3 item">
              <label for="faecal_soiling">Faecal soiling:</label>
              <select
                name="faecal_soiling"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                {/* <option selected value="unselected" disabled /> */}
                <option value="Yes">Yes</option>
                <option selected value="No">
                  No
                </option>
              </select>
            </div>
            <div class="form-group col-md-3 item">
              <label for="faecal_incontinence">Faecal incontinence:</label>
              <select
                name="faecal_incontinence"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                {/* <option selected value="unselected" disabled /> */}
                <option value="Yes">Yes</option>
                <option selected value="No">
                  No
                </option>
              </select>
            </div>
            <div class="form-group col-md-3 item">
              <label for="stool_type">Usual stool type:</label>
              <select
                name="stool_type"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
                <option selected value="Type 4">
                  Type 4
                </option>
                <option value="Type 5">Type 5</option>
                <option value="Type 6">Type 6</option>
                <option value="Type 7">Type 7</option>
              </select>
            </div>
          </div>
          <h6 class="heading">Other Bowel Symptoms:</h6>
          <div class="form-row border_bottom">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Medications:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="other_bowel_symptoms"
                name="other_bowel_symptoms"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h5 class="heading">Physical Examination:</h5>
          <br />
          <h6 class="heading">
            Skin Condition (perineum, groin, thighs, buttocks):
          </h6>
          <div class="form-row">
            <div class="form-group col-md-3 item">
              <label for="skin_condition">Details:</label>
              <input
                class="form-control"
                id="skin_condition"
                type="text"
                name="skin_condition"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Comments:</h6>
          <div class="form-row border_bottom">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Comments:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="skin_condition_comments"
                name="skin_condition_comments"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading ">Urogenital Examination:</h6>
          <div class="form-row ">
            <div class="form-group col-md-3 item">
              <label for="Males">Males:</label>
              <input
                class="form-control"
                id="urogenital_examination_males"
                type="text"
                name="urogenital_examination_males"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h6 class="heading">Comments:</h6>
          <div class="form-row border_bottom">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Comments:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="skin_condition_comments"
                name="skin_condition_comments"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-row border_bottom">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">
                    Check for transient causes of incontinence (“PRAISED”):
                  </th>
                  <th scope="col">Yes/No/NA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Pharmaceutical. Psychology – causing depression, grief,
                    anxiety
                  </th>

                  <td>
                    <select
                      name="pharmaceutical_incontinence"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                      <option value="Not Applicable">N/A</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Restricted mobility, retention</th>
                  <td>
                    <select
                      name="restricted_mobility_incontinence"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                      <option value="Not Applicable">N/A</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Atrophic urethritis or atrophic vaginitis</th>

                  <td>
                    <select
                      name="atrophic"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                      <option value="Not Applicable">N/A</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Infection - urinary (symptomatic)</th>
                  <td>
                    <select
                      name="infection_incontinence"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                      <option value="Not Applicable">N/A</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Stool impaction </th>
                  <td>
                    <select
                      name="stool_impaction_incontinence"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                      <option value="Not Applicable">N/A</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Excessive urine output caused by endocrine/cardiovascular
                    disorder, excessive fluid intake and pedal oedema
                  </th>

                  <td>
                    <select
                      name="euo_incontinence"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                      <option value="Not Applicable">N/A</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Dehydration. Delirium and other confusional states
                  </th>
                  <td>
                    <select
                      name="dehydration_incontinence"
                      class="form-control"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option selected value="No">
                        No
                      </option>
                      <option value="Evident">Yes</option>
                      <option value="Not Applicable">N/A</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h6 class="heading">Comments:</h6>
          <div class="form-row border_bottom">
            <div class="form-group col-md-12 item">
              {/* <label for="medications">Comments:</label> */}
              <textarea
                class="form-control"
                rows="3"
                id="praised_comments"
                name="praised_comments"
                //required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3 item">
              <label for="fname">Fluid Assessment fully completed today:</label>
              <div class="input-group-prepend">
                <div class="input-group-text bigCheckbox">
                  <input
                    type="checkbox"
                    aria-describedby="label_39"
                    class="form-checkbox"
                    id="input_39_0"
                    name="assessment_completed"
                    value="Yes"
                    onChange={this.handleChange}
                  />
                </div>
                <label for="odor">Yes</label>
              </div>
            </div>

            <div class="form-group col-md-3 item">
              <label for="bdate">
                Assessment Completion Date<span>*</span>
              </label>
              <input
                class="form-control"
                id="assessment_completed_date"
                type="date"
                name="assessment_completed_date"
                //required
                onChange={this.handleChange}
              />
              <i class="fas fa-calendar-alt" />
            </div>
          </div>
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
