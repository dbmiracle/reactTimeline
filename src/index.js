import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CustomTimeLine from "./CustomTimeLine";
import "react-calendar-timeline/src/lib/Timeline.scss";

//import App from "./test"
import moment from "moment";
import generateFakeData from "./generate-fake-data";
import MyForm from "./Form";

ReactDOM.render(<CustomTimeLine />, document.getElementById("root"));
// //
