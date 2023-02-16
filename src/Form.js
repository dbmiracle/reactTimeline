import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  InputGroup,
  Form,
  Dropdown,
  DropdownButton,
  ButtonToolbar,
  SplitButton
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
//import Draggable from 'react-draggable';
import moment from "moment";
import App from "./CustomTimeLine";
import Timeline from "react-calendar-timeline";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    //const items = [];
    this.state = {
      group: props.group,
      time: props.time,
      site: " ",
      project: " ",
      city: " ",

      it: {}
      //validated: false,
      //setValidated:false

      //	opened: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange_project = this.onChange_project.bind(this);
    this.onChange_site = this.onChange_site.bind(this);
    //this.onClickhandleclose=this.onClickhandleclose.bind(this);
    //this.handleitemcreate=this.handleitemcreate.bind(this);
  }

  onChange_project = (e) => {
    this.setState({ project: e.target.value });
  };
  onChange_site = (e) => {
    this.setState({ site: e.target.value });
  };

  // handleitemcreate=(e)=>{
  //   const {it}=this.state;
  //   const  {group}=this.state;
  //   const {time}=this.state;
  //   const {project}=this.state;
  //
  // e.preventDefault()
  //
  //   this.setState({
  //
  //       it:[ ...this.state.it, {
  //             id:Math.random()*100,
  //             group: group,
  //             title: project,
  //             start: moment(time).startOf().valueOf(),
  //             end: moment().startOf().valueOf()+(1*3*60*1000),
  //             canMove: true,
  //             canResize: true,
  //             canChangeGroup: true,
  //             className: 'weekend',
  //
  //             itemProps: {
  //               // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
  //               'data-custom-attribute': 'Random content',
  //               'aria-hidden': true,
  //               onDoubleClick: () => { console.log('You clicked double!') },
  //               style: {
  //                    background: "OrangeRed"
  //                  },
  //
  //
  //             }
  //           }]
  //
  //  });
  //
  // }

  onSubmit(e) {
    e.preventDefault();

    // const setValidated=this.setValidated;
    // const validated=this.validated;

    const { it } = this.state;
    const { group } = this.state;
    const { time } = this.state;
    const { project } = this.state;

    // it.push({
    //       id:Math.random()*100,
    //       group: group,
    //       title: project,
    //       start: moment(time).startOf().valueOf(),
    //       end: moment().startOf().valueOf()+(1*3*60*1000),
    //       canMove: true,
    //       canResize: true,
    //       canChangeGroup: true,
    //       className: 'weekend',
    //
    //       itemProps: {
    //         // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
    //         'data-custom-attribute': 'Random content',
    //         'aria-hidden': true,
    //         onDoubleClick: () => { console.log('You clicked double!') },
    //         style: {
    //              background: "OrangeRed"
    //            },
    //
    //
    //       }
    //     })
    // const newItems={
    //   id:Math.random()*100,
    //   group: group,
    //   title: project,
    //   start: moment(time).startOf().valueOf(),
    //   end: moment().startOf().valueOf()+(1*3*60*1000),
    //   canMove: true,
    //   canResize: true,
    //   canChangeGroup: true,
    //   className: 'weekend',
    //
    //   itemProps: {
    //     // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
    //     'data-custom-attribute': 'Random content',
    //     'aria-hidden': true,
    //     onDoubleClick: () => { console.log('You clicked double!') },
    //     style: {
    //          background: "OrangeRed"
    //        },
    //
    //
    //   }
    //
    //    }

    const newitem = {
      id: Math.random() * 100,
      group: group,
      title: project,
      start: moment(time).startOf().valueOf(),
      end: moment().startOf().valueOf() + 1 * 3 * 60 * 1000,
      canMove: true,
      canResize: true,
      canChangeGroup: true,
      className: "weekend",

      itemProps: {
        // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
        "data-custom-attribute": "Random content",
        "aria-hidden": true,
        onDoubleClick: () => {
          console.log(newitem);
        },
        style: {
          background: "OrangeRed"
        }
      }
    };

    this.setState({
      it: newitem
    });

    this.props.parentfunction(newitem);
    this.props.handleclose(e);

    //   return (
    //
    //         item
    //
    //
    //
    // );
  }

  //
  // onClickhandleclose=(e)=>{
  //
  //   this.props.handleclose(e)
  // }

  render() {
    return (
      <>
        <Form noValidate onSubmit={this.handleitemcreate} className="myform">
          <Form.Row>
            <Form.Group as={Col} size="sm" controlId="validationCustom01">
              <Form.Label>Project</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={this.onChange_project}
                placeholder="Project Name"
                value={this.state.project}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button
            bsPrefix="super-btn"
            variant="primary"
            type="submit"
            className="buttoncreate"
            onClick={this.onSubmit}
          >
            Create
          </Button>
        </Form>
      </>

      // <form className="loginform">
      //   <div class="center">
      //     <input type="text" placeholder="Enter Project Name" required />
      //     <Button>Create!</Button>
      //   </div>
      // </form>
    );
  }
}

export default MyForm;

//     <ButtonToolbar>
//   {[DropdownButton, SplitButton].map((DropdownType, idx) => (
//     <DropdownType
//       size="sm"
//       variant="secondary"
//       title="Drop small"
//       id={`dropdown-button-drop-${idx}`}
//       key={idx}
//     >
//       <Dropdown.Item eventKey="1">In Progress</Dropdown.Item>
//       <Dropdown.Item eventKey="2">Finished</Dropdown.Item>
//       <Dropdown.Item eventKey="3">Billed</Dropdown.Item>
//       <Dropdown.Divider />
//
//     </DropdownType>
//   ))}
// </ButtonToolbar>

// import React, { Component } from "react";
// import './index.css';
//
// const Form=function (props) {
// // 	constructor(props) {
// //     super(props);
// // 	this.state = {
// //
// // 	//	opened: false,
// // 	};
// //
// // };
// //
// //
//
// //	render() {
//   	return (
//
//     	<form className="loginform">
//
// 			<div class="center">
//     	  <input
//           type="text"
//           placeholder="Enter Project Name"
//           required
//         />
//         <button>Create!</button>
// 				 </div>
//     	</form>
//
//
//     );
//   //}
// }
//
//
// export default Form;
