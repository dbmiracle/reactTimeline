import React, { Component } from "react";
import moment from "moment";
import Timeline from "react-calendar-timeline";
import generateFakeData from "./generate-fake-data";
import MyForm from "./Form";
import "react-calendar-timeline/src/lib/Timeline.scss";

//import FormDialog from './FormDialog';

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end"
};

export default class App extends Component {
  constructor(props) {
    super(props);

    const items = [] || props.items;
    //const groups = [{ id: 1, title: "group 1" }];
    const { groups } = generateFakeData();
    const defaultTimeStart = moment().startOf("day").toDate();
    const defaultTimeEnd = moment().startOf("day").add(1, "day").toDate();

    this.state = {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd,
      opened: false,
      group: " ",
      time: 0
    };

    //this.handleonCanvasClick = this.handleonCanvasClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);

    //this.handleItemMove=this.handleItemMove.bind(this);
    //this.handleItemResize=this.handleItemResize.bind(this);
    this.itemfunc = this.itemfunc.bind(this);
    //this.handleClick=this.handleClick.bind(this);
    this.openthing = this.openthing.bind(this);
  }

  openthing = (e) => {
    this.setState({
      opened: !this.state.opened
    });
  };

  handleDoubleClick = (group, time, e) => {
    e.preventDefault();
    //const { opened } = this.state;

    this.setState({
      group: group,
      time: time
    });

    this.openthing(e);
    //
    //     // this.setState ({
    //     //   opened: !this.state.opened  });
    //
    //   //return (<div>{this.state.opened ? alert("Hi"+" "+group+" "+time):console.log("bye")}</div>)
    //
  };

  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state;
    //console.log(items)
    const group = groups[newGroupOrder];

    this.setState({
      items: items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id
            })
          : item
      )
    });

    console.log("Moved", itemId, dragTime, newGroupOrder, items);
  };
  //

  //
  //       console.log("Resized", itemId, time, edge);
  //     };
  //

  // return(
  //   <div>{this.state.opened ? <Form /> : null }</div>
  // )
  //};
  //

  // handlemoveResizeValidator(action, itemId, time, resizeEdge){
  //
  //   if (time < new Date().getTime()) {
  //     var newTime = Math.ceil(new Date().getTime() / (15*60*1000)) * (15*60*1000);
  //     return newTime;
  //   }
  //
  //   return time;
  // };

  //
  //   handleDoubleClick = (group, time, e) => {
  //     const {items}=this.state;
  //     //console.log('handleDoubleClick', group, time, e)
  //  const  title= prompt("Please enter a name for your event: ");
  //
  //  const newItems = [...this.state.items, {
  //   id:Math.random()*100,//here should be a unique number uuid probably
  //   group: group,
  //   title: title,
  //   start: moment(time).startOf().valueOf(), //ugly need later fix
  //   end: moment().startOf().valueOf()+(1*3*60*1000),//also ugly, need later fix
  //   canMove: true,
  //   canResize: true,
  //   canChangeGroup: true,
  //   className: 'weekend',
  //
  //
  //   itemProps: {
  //     // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
  //     'data-custom-attribute': 'Random content',
  //     'aria-hidden': true,
  //     onDoubleClick: () => { console.log('You clicked double1!') },
  //     style: {
  //       background: "OrangeRed"
  //     },
  //
  //   }
  //
  // }]
  //
  // // //  items.push({
  // // //   id:this.state.items=((Math.random() * 100) + 1),
  // // //   group: group,
  // // //   title: eventTitle,
  // // //   start_time: moment(time).startOf('day').valueOf(),
  // // //   end_time: moment().startOf('day').valueOf()+1*12*60*60*1000,
  // // //   canMove: true,
  // // //   canResize: true,
  // // //   canChangeGroup: true,
  // // //   className: 'weekend',
  // // //
  // // //   itemProps: {
  // // //     // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
  // // //     'data-custom-attribute': 'Random content',
  // // //     'aria-hidden': true,
  // // //     onDoubleClick: () => { console.log('You clicked double!') },
  // // //   }
  // // // });
  // // //
  // // //console.log(items)
  // // // console.log(newItems)
  // // //
  //    this.setState({
  //      items: newItems
  //   });
  // //
  // // //
  // // //     return (
  // // //
  // // //           items
  // // //
  // // //
  // // //
  // // //   );
  //  };
  //

  handleItemResize = (itemId, time, edge) => {
    //returns the default color
    const { items } = this.state;

    //console.log(items)
    this.setState({
      items: items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === "left" ? time : item.start,
              end: edge === "left" ? item.end : time
            })
          : item
      )
    });

    //  console.log("Resized", itemId, time, edge);
  };
  //
  // itemRenderer = ({
  //   item,
  //   timelineContext,
  //   itemContext,
  //   getItemProps,
  //   getResizeProps
  // }) => {
  //   const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
  //   const background = itemContext.selected
  //     ? itemContext.dragging
  //       ? "yellow"
  //       : item.selectedBgColor
  //     : item.bgColor;
  //   const borderColor = itemContext.resizing ? "yellow" : item.color;
  //   return (
  //     <div
  //       {...getItemProps({
  //         style: {
  //           background,
  //           color: item.color,
  //           borderColor,
  //           borderStyle: "solid",
  //           borderWidth: 1,
  //           borderRadius: 4,
  //           borderLeftWidth: itemContext.selected ? 3 : 1,
  //           borderRightWidth: itemContext.selected ? 3 : 1
  //         },
  //         onMouseDown: () => {
  //           console.log("on item click", item);
  //         }
  //       })}
  //     >
  //       {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}
  //
  //       <div
  //         style={{
  //           height: itemContext.dimensions.height,
  //           overflow: "hidden",
  //           paddingLeft: 3,
  //           textOverflow: "ellipsis",
  //           whiteSpace: "nowrap"
  //         }}
  //       >
  //         {itemContext.title}
  //       </div>
  //
  //       {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
  //     </div>
  //   );
  // };

  // updateItemTitle = (itemId, e) => {
  // console.log('updateItemTitle')
  // const generateChange = (item, title) => {
  //   return {
  //     $set: {
  //       ...item,
  //       title
  //     }
  //   }
  // };

  // {
  //
  //
  //   return (
  //
  //    <ToggleBox title="Show Vehicles">
  // 		<Form />
  // 	</ToggleBox>
  //
  //
  //
  // );
  //window.alert(`Canvas clicked ${groupId} ${time}`)
  //window.open()
  //return(<div>"hallow"</div>)}

  // const { opened } = this.state;
  // this.setState({
  //   opened: !opened,
  // // });
  //

  itemfunc(newitem) {
    const { items } = this.state;

    //
    // this.setState({
    //
    //  items:items
    //
    // }
    // )

    this.setState({
      items: [...this.state.items, newitem]
    });

    return items;
  }

  //  handleClick = (group,time,e ) => {
  //  //
  //  //
  //         const {items}=this.state;
  //  //       //console.log('handleDoubleClick', group, time, e)
  //  //
  //  //
  //
  //
  //  // const newItems = [...this.state.items, {
  //  //    id:Math.random()*100,
  //  //    group: group,
  //  //    title: "lalala",
  //  //    start: moment(time).startOf().valueOf(),
  //  //    end: moment().startOf().valueOf()+(1*3*60*1000),
  //  //    canMove: true,
  //  //    canResize: true,
  //  //    canChangeGroup: true,
  //  //    className: 'weekend',
  //  //
  //  //    itemProps: {
  //  //      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
  //  //      'data-custom-attribute': 'Random content',
  //  //      'aria-hidden': true,
  //  //      onDoubleClick: () => { console.log('You clicked double!') },
  //  //      style: {
  //  //           background: "OrangeRed"
  //  //         },
  //  //
  //  //
  //  //    }
  //  //  }]
  //
  //    //  const newItems = [...this.state.items, {
  //    //   id:Math.random()*100,//here should be a unique number uuid probably
  //    //   group: group,
  //    //   title: "lalal",
  //    //   start: moment(time).startOf().valueOf(), //ugly need later fix
  //    //   end: moment().startOf().valueOf()+(1*3*60*1000),//also ugly, need later fix
  //    //   canMove: true,
  //    //   canResize: true,
  //    //   canChangeGroup: true,
  //    //   className: 'weekend',
  //    //
  //    //
  //    //   itemProps: {
  //    //     // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
  //    //     'data-custom-attribute': 'Random content',
  //    //     'aria-hidden': true,
  //    //     onDoubleClick: () => { console.log('You clicked double!') },
  //    //     style: {
  //    //       background: "OrangeRed"
  //    //     },
  //    //
  //    //   }
  //    //
  //    // }]
  //    //
  //
  //
  //
  //
  //      //
  //         this.setState ({
  //
  //           items: newItems
  //
  //        });
  // };
  //
  //

  //
  // shouldComponentUpdate(nextProps, nextState) {
  //  return this.state.items !== nextState.items
  //
  //
  // }

  // itemfunc(it) {
  //
  //   const {items}=this.state;
  //
  //      this.setState({
  //
  //       items:it
  //
  //      }
  //      )
  //
  //   // this.setState({
  //   //
  //   //  items: [...items, newvar]
  //   //
  //   // }
  //   // )
  //
  //  console.log(items)
  //
  //
  //  return(items);
  //
  // };

  render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;
    // const { title, children } = this.props;
    // const { opened } = this.state;
    console.log(items);

    return (
      <>
        <Timeline
          //ref={r => { this.timeline = r; }}
          items={items}
          groups={groups}
          keys={keys}
          fullUpdate
          sidebarContent={<div>Above The Left</div>}
          itemsSorted
          itemTouchSendsClick={false}
          stackItems
          canMove={true}
          itemHeightRatio={0.75}
          showCursorLine
          canResize={"both"}
          defaultTimeStart={defaultTimeStart}
          defaultTimeEnd={defaultTimeEnd}
          // itemRenderer={this.itemRenderer}
          onItemMove={this.handleItemMove}
          onItemResize={this.handleItemResize}
          onCanvasDoubleClick={this.handleDoubleClick}

          // moveResizeValidator={this.handlemoveResizeValidator}
        />
        {this.state.opened ? (
          <MyForm
            parentfunction={this.itemfunc}
            group={this.state.group}
            handleclose={this.openthing}
            time={this.state.time}
          />
        ) : (
          console.log("bye")
        )}
      </>
    );
  }
}

// import React, { Component } from "react";
// import moment from "moment";
// import Timeline  from "react-calendar-timeline";
// import generateFakeData from "./generate-fake-data";
// import ToggleBox from "./createproject";
// import Form from "./Form";
// import PropTypes from 'prop-types';
//
//
//
// //import FormDialog from './FormDialog';
//
//
//
//
//
//
// var keys = {
//   groupIdKey: "id",
//   groupTitleKey: "title",
//   groupRightTitleKey: "rightTitle",
//   itemIdKey: "id",
//   itemTitleKey: "title",
//   itemDivTitleKey: "title",
//   itemGroupKey: "group",
//   itemTimeStartKey: "start",
//   itemTimeEndKey: "end"
// };
//
// export default class CustomTimeLine extends Component {
//   constructor(props) {
//     super(props);
//
//
//
//     const items= [];
//     const groups=[{ id: 1, title: 'group 1' }] ;
//   //  const {groups}=generateFakeData();
//     const defaultTimeStart = moment()
//       .startOf("day")
//       .toDate();
//     const defaultTimeEnd = moment()
//       .startOf("day")
//       .add(1, "day")
//       .toDate();
//
//     this.state = {
//       groups,
//       items,
//       defaultTimeStart,
//       defaultTimeEnd,
//       opened:false,
//
//
//
//     };
//
//    //this.handleonCanvasClick = this.handleonCanvasClick.bind(this);
//     this.handleDoubleClick=this.handleDoubleClick.bind(this);
//     //this.handleItemMove=this.handleItemMove.bind(this);
//     //this.handleItemResize=this.handleItemResize.bind(this);
//
//
//   }
//
//   handleDoubleClick = (group, time, e)=>
//   {
//     e.preventDefault();
//     const {opened}=this.state;
//
//
//
//   this.setState((prevState) => ({
//     opened: !prevState.opened
//   }));
//
//   // this.setState ({
//   //   opened: !this.state.opened  });
//
//
//     //return (<div>{this.state.opened ? alert("Hi"+" "+group+" "+time):console.log("bye")}</div>)
//
//
//
//
// };
//
//
//
//
//
//
//
//
//
//
//
//     handleItemMove = (itemId, dragTime, newGroupOrder) => {
//       const {items, groups } = this.state;
//       //console.log(items)
//       const group = groups[newGroupOrder];
//
//
//
//       this.setState({
//         items:items.map(item =>
//               item.id === itemId
//                 ? Object.assign({}, item, {
//                     start: dragTime,
//                     end: dragTime + (item.end - item.start),
//                     group: group.id,
//                   })
//                 : item)
//
//       });
//
//       console.log("Moved", itemId, dragTime, newGroupOrder, items);
//     };
// //
//
// //
// //       console.log("Resized", itemId, time, edge);
// //     };
// //
//
//
//    // return(
//    //   <div>{this.state.opened ? <Form /> : null }</div>
//    // )
// //};
// //
//
//
//
// // handlemoveResizeValidator(action, itemId, time, resizeEdge){
// //
// //   if (time < new Date().getTime()) {
// //     var newTime = Math.ceil(new Date().getTime() / (15*60*1000)) * (15*60*1000);
// //     return newTime;
// //   }
// //
// //   return time;
// // };
//
//
//
//
//
//
//
//
//
// //
// //   handleDoubleClick = (group, time, e) => {
// //     const {items}=this.state;
// //     //console.log('handleDoubleClick', group, time, e)
// //  const  title= prompt("Please enter a name for your event: ");
// //
// //  const newItems = [...this.state.items, {
// //   id:Math.random()*100,//here should be a unique number uuid probably
// //   group: group,
// //   title: title,
// //   start: moment(time).startOf().valueOf(), //ugly need later fix
// //   end: moment().startOf().valueOf()+(1*3*60*1000),//also ugly, need later fix
// //   canMove: true,
// //   canResize: true,
// //   canChangeGroup: true,
// //   className: 'weekend',
// //
// //
// //   itemProps: {
// //     // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
// //     'data-custom-attribute': 'Random content',
// //     'aria-hidden': true,
// //     onDoubleClick: () => { console.log('You clicked double!') },
// //     style: {
// //       background: "OrangeRed"
// //     },
// //
// //   }
// //
// // }
// //
// //
// // ]
//
//
//
//
//
//
//
//
//
//
// //  items.push({
// //   id:this.state.items=((Math.random() * 100) + 1),
// //   group: group,
// //   title: eventTitle,
// //   start_time: moment(time).startOf('day').valueOf(),
// //   end_time: moment().startOf('day').valueOf()+1*12*60*60*1000,
// //   canMove: true,
// //   canResize: true,
// //   canChangeGroup: true,
// //   className: 'weekend',
// //
// //   itemProps: {
// //     // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
// //     'data-custom-attribute': 'Random content',
// //     'aria-hidden': true,
// //     onDoubleClick: () => { console.log('You clicked double!') },
// //   }
// // });
// //
// //console.log(items)
// // console.log(newItems)
// // //
//   //    this.setState({
//   //      items: newItems
//   //   });
//   //
//   //
//   //     return (
//   //
//   //           items
//   //
//   //
//   //
//   //   );
//   // };
//
//
//   handleItemResize = (itemId, time, edge) => {
//     //returns the default color
//     const { items } = this.state;
//     console.log(items)
//
//     //console.log(items)
//     this.setState({
//       items: items.map(item =>
//          item.id === itemId
//            ? Object.assign({}, item, {
//                start: edge === "left" ? time : item.start,
//                end: edge === "left" ? item.end: time,
//
//
//              })
//            : item
//        )
//     });
//
//   //  console.log("Resized", itemId, time, edge);
//
//   };
//   //
//   itemRenderer = ({
//     item,
//     timelineContext,
//     itemContext,
//     getItemProps,
//     getResizeProps
//   }) => {
//     const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
//     const background = itemContext.selected ? itemContext.dragging ? "yellow" : item.selectedBgColor : item.bgColor;
//     const borderColor = itemContext.resizing ? "yellow" : item.color;
//     return (
//       <div
//         {...getItemProps({
//           style: {
//             background,
//             color: item.color,
//             borderColor,
//             borderStyle: "solid",
//             borderWidth: 1,
//             borderRadius: 4,
//             borderLeftWidth: itemContext.selected ? 3 : 1,
//             borderRightWidth: itemContext.selected ? 3 : 1
//           },
//           onMouseDown: () => {
//             console.log("on item click", item);
//           }
//         })}
//       >
//         {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}
//
//         <div
//           style={{
//             height: itemContext.dimensions.height,
//             overflow: "hidden",
//             paddingLeft: 3,
//             textOverflow: "ellipsis",
//             whiteSpace: "nowrap"
//           }}
//         >
//           {itemContext.title}
//         </div>
//
//         {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
//       </div>
//     );
//   };
//
//   // updateItemTitle = (itemId, e) => {
//   // console.log('updateItemTitle')
//   // const generateChange = (item, title) => {
//   //   return {
//   //     $set: {
//   //       ...item,
//   //       title
//   //     }
//   //   }
//   // };
//
//
//    // {
//    //
//    //
//    //   return (
//    //
//    //    <ToggleBox title="Show Vehicles">
// 		// 		<Form />
// 		// 	</ToggleBox>
//    //
//    //
//    //
// 		// );
//     //window.alert(`Canvas clicked ${groupId} ${time}`)
//     //window.open()
//     //return(<div>"hallow"</div>)}
//
//     // const { opened } = this.state;
//     // this.setState({
//     //   opened: !opened,
//     // });
//
//
//
//
//   render() {
//     const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;
//     const {Form}=this.props;
//     // const { title, children } = this.props;
//     // const { opened } = this.state;
//
//     return (
//       <>
//
//       <Timeline
//         //ref={r => { this.timeline = r; }}
//
//         groups={groups}
//         items={items}
//         keys={keys}
//         fullUpdate
//         sidebarContent={<div>Above The Left</div>}
//         itemsSorted
//         itemTouchSendsClick={false}
//         stackItems
//         itemHeightRatio={0.75}
//         showCursorLine
//         canMove={true}
//         canResize={'both'}
//         defaultTimeStart={defaultTimeStart}
//         defaultTimeEnd={defaultTimeEnd}
//         // // itemRenderer={this.itemRenderer}
//         // onItemMove={this.handleItemMove}
//         // onItemResize={this.handleItemResize}
//         // onCanvasClick= {this.handleonCanvasClick}
//
//         onCanvasDoubleClick={this.handleDoubleClick}
//
//
//
//         // moveResizeValidator={this.handlemoveResizeValidator}
//         //onCanvasClick={this.handleonCanvasClick}
//        />
//
//        {this.state.opened ?
//          <Form/>
//          :console.log("bye")}
//
//          </>
//
//
//
//     );
//   }
// }
//
//
//
// // import React, { Component } from "react";
// // import moment from "moment";
// //
// // import Timeline from "react-calendar-timeline";
// //
// // import generateFakeData from "./generate-fake-data";
// //
// // var keys = {
// //   groupIdKey: "id",
// //   groupTitleKey: "title",
// //   groupRightTitleKey: "rightTitle",
// //   itemIdKey: "id",
// //   itemTitleKey: "title",
// //   itemDivTitleKey: "title",
// //   itemGroupKey: "group",
// //   itemTimeStartKey: "start",
// //   itemTimeEndKey: "end"
// // };
// //
// // export default class App extends Component {
// //   constructor(props) {
// //     super(props);
// //
// //     const { groups, items } = generateFakeData();
// //     const defaultTimeStart = moment()
// //       .startOf("day")
// //       .toDate();
// //     const defaultTimeEnd = moment()
// //       .startOf("day")
// //       .add(1, "day")
// //       .toDate();
// //
// //     this.state = {
// //       groups,
// //       items,
// //       defaultTimeStart,
// //       defaultTimeEnd
// //     };
// //   }
// //
// //   render() {
// //     const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;
// //
// //     return (
// //       <Timeline
// //         groups={groups}
// //         items={items}
// //         keys={keys}
// //         sidebarContent={<div>Above The Left</div>}
// //         itemsSorted
// //         itemTouchSendsClick={false}
// //         stackItems
// //         itemHeightRatio={0.75}
// //         showCursorLine
// //         canMove={false}
// //         canResize={false}
// //         defaultTimeStart={defaultTimeStart}
// //         defaultTimeEnd={defaultTimeEnd}
// //       />
// //     );
// //   }
// // }
//
//
// // const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' },{ id: 3, title: 'group 3' },{ id: 4, title: 'group 3' },{ id: 5, title: 'group 3' },{ id: 6, title: 'group 3' },{ id: 7, title: 'group 3' },{ id: 8, title: 'group 3' },{ id: 9, title: 'group 3' }]
// //
// // const items = [
// //   {
// //     id: 1,
// //     group: 1,
// //     title: 'item 1',
// //     start_time: moment(),
// //     end_time: moment().add(1, 'hour'),
// //
// // },
// //   {
// //     id: 2,
// //     group: 2,
// //     title: 'item 2',
// //     start_time: moment().add(-0.5, 'hour'),
// //     end_time: moment().add(0.5, 'hour')
// //   },
// //   {
// //     id: 3,
// //     group: 1,
// //     title: 'item 3',
// //     start_time: moment().add(2, 'hour'),
// //     end_time: moment().add(3, 'hour')
// //   },
// //   {
// //     id: 4,
// //     group: 1,
// //     title: 'item 1',
// //     start_time: moment().add(5, 'hour'),
// //     end_time: moment().add(10, 'hour'),
// //     style:{
// //     bgColor:'rgba(225, 166, 244, 0.6)',
// //   },
// //    itemProps: {
// //   // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
// //   'data-custom-attribute': 'Random content',
// //   'aria-hidden': true,
// //
// //    onDoubleClick: () => { console.log('You clicked double!') },
// //    onClick:()=>{ console.log('You clicked!') },
// // },
// // },
// // {
// //   id: 5,
// //   group: 1,
// //   title: 'item 1',
// //   start_time: moment().add(5, 'hour'),
// //   end_time: moment().add(10, 'hour'),
// //
// //   bgColor:'rgba(225, 166, 244, 0.6)',
// //
// //  itemProps: {
// // // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
// // 'data-custom-attribute': 'Random content',
// // 'aria-hidden': true,
// //
// //  onDoubleClick: () => { console.log('You clicked double!') }
// // },
// // },
// // ]
// //
// //
// // groups={groups}
// // items={items}
// // defaultTimeStart={moment().add(-12, 'hour')}
// // defaultTimeEnd={moment().add(12, 'hour')}
