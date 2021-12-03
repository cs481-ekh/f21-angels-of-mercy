(this["webpackJsonpf21-angels-of-mercy"]=this["webpackJsonpf21-angels-of-mercy"]||[]).push([[0],{53:function(e,t,s){},54:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(23),c=s.n(i),r=(s(53),s(54),s(7)),o=s(9),l=s(10),d=s(12),h=s(11),j=s(79),u=s(78),f=s.p+"static/media/budget.adcb126c.jpeg",b=s.p+"static/media/error.eba8aeea.jpeg",p=s.p+"static/media/initialpg.11b079f6.jpeg",O=s.p+"static/media/input.a9a76a69.jpeg",m=s.p+"static/media/shifts.fff9adcb.jpeg",x=s.p+"static/media/staffModal.211817ac.jpeg",g=s(1),v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsx)("h3",{children:"Senior Design Project"}),Object(g.jsx)("h3",{children:"CS 481 Fall 2021"}),Object(g.jsx)("h3",{children:"Boise State University"})]}),Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsx)("h4",{children:"Project Members"}),Object(g.jsx)("p",{children:"Emma Lytle, Lih Wei Liang, and Becka Seevers"})]}),Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsx)("h4",{children:"Sponsor"}),Object(g.jsx)("p",{children:"Dr. Renee Walters - reneewalters@boisestate.edu"})]}),Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsx)("h4",{children:"Project Statement"}),Object(g.jsx)("p",{children:"The goal of the Inpatient Nurse Staffing Simulator was to create an interactive interface that will help Boise State nursing students simulate how to staff a hospital unit."})]}),Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsx)("h4",{children:"Project Description"}),Object(g.jsx)("p",{children:'The Boise State Nursing Department requires that students practice staffing a hospital unit. In the past, students were given scenarios and they were expected to calculate the HPPD, which is the measurement of the average number of hours needed to care for each patient on the unit. After calculating the HPPD, students then fill out their staffing choices and subtract the hours staffed from the HPPD to determine how many hours they have left in the budget. The goal is to staff the unit so that the HPPD is met, or is 0. If HPPD is a negative value, the unit is overstaffed and if it is positive, then it is understaffed. The purpose of the simulator was to take the math component out of the equation, to allow students to just focus on allocating resources appropriately. The simulator will usually be used in class where the instructor is providing the scenario values, but students have the option to create values with the "Random Scenario" button for more practice.'}),Object(g.jsx)("p",{children:'Students can prepopulate the hospital staffing scenario fields by clicking the "Random Scenario" button or they can enter values manually. Once values are entered in the scenario fields, the HPPD value will change in the "Hours Remaining in the Day" box. Students are then expected to add staff members to determine how to staff for this scenario while still remaining within budget. If they schedule too many staff members, the HPPD value will become negative and display red. Students can also choose to show the salary budget by selecting the "Show Budget" checkbox. This will display the total cost to staff the unit based off of their staffing decisions. For this application\'s calculations, RNs are $35/hour, LVNs are $24/hour, and Unlicensed are $15/hour. Once students add staff members, they appear in the table below the scenario fields and total staff hours for each shift are shown to the right of the page. Calculations used for this project are shown below:'}),Object(g.jsx)(j.a,{className:"mb-4",children:Object(g.jsxs)(j.a.Body,{children:[Object(g.jsx)("h6",{children:"Calculating HPPD"}),Object(g.jsx)("p",{children:"totalHPPD = (numberPatients * inputHPPD) - totalStaffHours"}),Object(g.jsx)("h6",{children:"Calculating Staff Budgets"}),Object(g.jsx)("p",{children:"totalBudget = totalRNs * 35 + totalLVNs * 24 + totalUnlicensed * 15"})]})}),Object(g.jsx)("p",{children:"This project is written in ReactJS and hosted on Github Pages. ReactJS was chosen as the framework for this project because it is a popular web development framework and we, as a team, wanted to gain more experience with it, as well as it is useful when creating responsive web pages. With ReactJS, it is important to keep components simple as each of them are considered building blocks that stack on top of one another. We built our file structure as follows:"}),Object(g.jsx)(j.a,{className:"mb-4",children:Object(g.jsx)(j.a.Body,{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Index.js "}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"App.js"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Header.js "}),Object(g.jsx)("li",{children:"Scenario.js "}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"RandomHPPDInfo.js "}),Object(g.jsx)("li",{children:"Result.js"}),Object(g.jsx)("li",{children:"StaffBudget.js "}),Object(g.jsx)("li",{children:"ShiftTotals.js "}),Object(g.jsx)("li",{children:"StaffAdd.js "}),Object(g.jsx)("li",{children:"StaffList.js  "})]}),Object(g.jsx)("li",{children:"About.js "}),Object(g.jsx)("li",{children:"Footer.js"})]})]})]})})}),Object(g.jsx)("p",{children:"State was used to pass information between components, such as adding a new staff member updates the state, which allows StaffList.js to display that new staff member in the table below the scenario. React-Bootstrap was used in all of our styling to keep it consistent between developers. React-Bootstrap also has a lot of documentation on how to write the HTML tags and classes to utilize their various styling options. NPM was used as the package manager and to build, test, run, and deploy the web application."}),Object(g.jsx)("p",{children:"Here are some example screenshots from the web application:"}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Inital load",src:p}),Object(g.jsx)(u.a.Caption,{children:"Web application on initial load."})]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Page after input is entered",src:O}),Object(g.jsx)(u.a.Caption,{children:"Web application after scenario information is entered and staff are added."})]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Error handling",src:b}),Object(g.jsx)(u.a.Caption,{children:"Error handling in form."})]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Staff modal",src:x}),Object(g.jsx)(u.a.Caption,{children:"Staff modal."})]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Staff shifts",src:m}),Object(g.jsx)(u.a.Caption,{children:"Staff shifts displayed."})]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Budget",src:f}),Object(g.jsx)(u.a.Caption,{children:"Budget is displayed."})]})]}),Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsx)("h4",{children:"Technical Details"}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"ReactJS"}),Object(g.jsx)("li",{children:"React-Bootstrap styling"}),Object(g.jsx)("li",{children:"Hosted on Github Pages"}),Object(g.jsx)("li",{children:"NPM"})]})})]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("a",{href:"https://boisestate.github.io/nursestaffingsim/",children:"Nurse Staffing Simulator"})," is maintained by ",Object(g.jsx)("a",{href:"https://github.com/cs481-ekh",children:"Dr. Eric Henderson"}),"  - ehenderson@boisestate.edu"]})]})}}]),s}(n.a.Component),y=v,w=s(48),N=s(35),S=s(16),C=(s(58),s(75)),H=s(70),P=(s(59),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).generateUUID=function(){for(var e=[],t="0123456789abcdef",s=0;s<36;s++)e[s]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},a.getShiftValue=function(e){var t=0;switch(e){case"12 Hours Day":case"12 Hours Night":t=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":t=8;break;default:t=0}return t},a.handleAdd=function(e){e.preventDefault();var t=new FormData(e.target),s=Object.fromEntries(t.entries()),n=a.generateUUID(),i=parseInt(s.quantity)*a.getShiftValue(s.shift),c={id:n,quantity:s.quantity,type:s.staffType,shift:s.shift,shiftTotal:i};a.props.onStaffAdd(c),a.handleClose()},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.state={open:!1,show:!1},a}return Object(l.a)(s,[{key:"render",value:function(){for(var e=[],t=1;t<=50;t++)e.push(t);var s=e.map((function(e){return Object(g.jsx)("option",{value:e,children:e},e)}));return Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"addstaff-id",onClick:this.handleShow,children:"Add Staff"}),Object(g.jsx)(C.a,{animation:!1,show:this.state.show,"data-testid":"addStaffModal-id",onHide:this.handleClose,children:Object(g.jsxs)(S.a,{onSubmit:this.handleAdd,children:[Object(g.jsx)(C.a.Header,{children:Object(g.jsx)(C.a.Title,{children:"Select your staff member"})}),Object(g.jsxs)(C.a.Body,{children:[Object(g.jsxs)(S.a.Group,{className:"mb-3",controlId:"staffType",required:!0,children:[Object(g.jsx)(S.a.Label,{children:"Staff Type"}),Object(g.jsxs)(S.a.Control,{as:"select",name:"staffType",children:[Object(g.jsx)("option",{value:"RN",children:"RN"}),Object(g.jsx)("option",{value:"LVN",children:"LVN"}),Object(g.jsx)("option",{value:"Unlicensed",children:"Unlicensed"})]})]}),Object(g.jsxs)(S.a.Group,{className:"mb-3",controlId:"shiftType",required:!0,children:[Object(g.jsx)(S.a.Label,{children:"Shift Type"}),Object(g.jsxs)(S.a.Control,{as:"select",name:"shift",className:"caret",children:[Object(g.jsx)("option",{value:"12 Hours Day",children:"12 Hours Day"}),Object(g.jsx)("option",{value:"12 Hours Night",children:"12 Hours Night"}),Object(g.jsx)("option",{value:"8 Hours Day",children:"8 Hours Day"}),Object(g.jsx)("option",{value:"8 Hours Evening",children:"8 Hours Evening"}),Object(g.jsx)("option",{value:"8 Hours Night",children:"8 Hours Night"})]})]}),Object(g.jsxs)(S.a.Group,{className:"mb-3",controlId:"quantity",required:!0,children:[Object(g.jsx)(S.a.Label,{children:"Quantity"}),Object(g.jsx)(S.a.Control,{as:"select",name:"quantity",children:s})]})]}),Object(g.jsxs)(C.a.Footer,{children:[Object(g.jsx)(H.a,{variant:"outline-secondary","data-testid":"cancelStaffAdd-id",onClick:this.handleClose,children:"Close"}),Object(g.jsx)(H.a,{variant:"outline-primary","data-testid":"addStaffConfirm-id",type:"submit",children:"Add New Staff"})]})]})})]})}}]),s}(n.a.Component)),D=(s(61),s(71)),k=s(72),I=s(73),T=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).listAdd=function(e){var t=parseInt(a.props.staffs[e].quantity),s=parseInt(a.props.staffs[e].shiftTotal);t+=1,s=12===parseInt(a.props.staffs[e].shift)?parseInt(s)+12:parseInt(s)+8,t<=100&&(a.props.staffs[e].quantity=t,a.props.staffs[e].shiftTotal=s,a.props.onStaffChangeOnUpdate(a.props.staffs))},a.listSub=function(e){var t=parseInt(a.props.staffs[e].quantity),s=parseInt(a.props.staffs[e].shiftTotal);t-=1,s=12===parseInt(a.props.staffs[e].shift)?parseInt(s)-12:parseInt(s)-8,t<=0?a.props.staffs.splice(e,1):(a.props.staffs[e].quantity=t,a.props.staffs[e].shiftTotal=s),a.props.onStaffChangeOnUpdate(a.props.staffs)},a.listRemove=function(e){a.props.staffs.splice(e,1),a.props.onStaffChangeOnUpdate(a.props.staffs)},a.state={shiftFilter:"All"},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.staffs.filter((function(t){return!e.state.shiftFilter||(t.shift===e.state.shiftFilter||"All"===e.state.shiftFilter)})).map((function(t,s){return Object(g.jsxs)("tr",{id:t.id,children:[Object(g.jsx)("td",{children:Object(g.jsx)(D.a,{className:"bTrash","data-testid":"delete-id",onClick:e.listRemove.bind(t,s)})}),Object(g.jsx)("td",{children:t.type}),Object(g.jsxs)("td",{children:[Object(g.jsx)(k.a,{className:"bPlus","data-testid":"add-id",onClick:e.listAdd.bind(t,s)}),t.quantity,Object(g.jsx)(I.a,{className:"bDash","data-testid":"minus-id",onClick:e.listSub.bind(t,s)})]}),Object(g.jsx)("td",{children:t.shift}),Object(g.jsx)("td",{children:t.shiftTotal})]},t.id)}));return this.props.staffs.length>0?Object(g.jsxs)("div",{children:[Object(g.jsxs)(S.a.Group,{className:"mb-3",controlId:"shiftType",required:!0,children:[Object(g.jsx)(S.a.Label,{children:"Filter by Shift"}),Object(g.jsxs)(S.a.Control,{as:"select",name:"shift",onChange:function(t){e.setState({shiftFilter:t.target.value})},className:"caret",children:[Object(g.jsx)("option",{value:"All",children:"All"}),Object(g.jsx)("option",{value:"12 Hours Day",children:"12 Hours Day"}),Object(g.jsx)("option",{value:"12 Hours Night",children:"12 Hours Night"}),Object(g.jsx)("option",{value:"8 Hours Day",children:"8 Hours Day"}),Object(g.jsx)("option",{value:"8 Hours Evening",children:"8 Hours Evening"}),Object(g.jsx)("option",{value:"8 Hours Night",children:"8 Hours Night"})]})]}),Object(g.jsxs)("table",{className:"table table-striped table-hover",id:"staffCont",children:[Object(g.jsx)("thead",{className:"table-BSU",children:t.length>0&&Object(g.jsxs)("tr",{"data-testid":"staffList-id",children:[Object(g.jsx)("th",{}),Object(g.jsx)("th",{scope:"col",children:"Staff Type"}),Object(g.jsx)("th",{scope:"col",children:"Quantity"}),Object(g.jsx)("th",{scope:"col",children:"Shift"}),Object(g.jsx)("th",{scope:"col",children:"Shift Total"})]})}),Object(g.jsx)("tbody",{children:t})]})]}):null}}]),s}(n.a.Component),B=(s(62),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getShiftValue=function(e){var t=0;switch(e){case"12 Hours Day":case"12 Hours Night":t=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":t=8;break;default:t=0}return t},e.getStaffHours=function(t){for(var s=0,a=0;a<t.length;a++){s+=e.getShiftValue(t[a].shift)*parseInt(t[a].quantity)}return s},e.calculation=function(t,s){var a=parseInt(t.census)*parseInt(t.HPPD)-e.getStaffHours(s);return a||"--"},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.calculation(this.props.info,this.props.staffs);return Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("div",{className:"card-header",children:"Hours for Day Remaining"}),Object(g.jsxs)("div",{id:"results",className:"card-body",children:[Object(g.jsx)("label",{children:"HPPD"}),Object(g.jsx)("h1",{"data-testid":"result",className:e<0?"negCalc":"",children:"--"!==e?e.toFixed(0):e})]})]})}}]),s}(n.a.Component)),U=B,R=(s(63),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).random=function(e,t){var s=t-e,a=Math.random();return e+Math.round(a*s)},e.setRandomValues=function(){var t=e.random(1,30),s=e.random(1,60),a={unit:"Random Hospital Unit",HPPD:t,bedUnit:s,census:e.random(1,s)};e.props.onInfoChange(a)},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(g.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"random-id",onClick:this.setRandomValues,children:"Random Scenario"})}}]),s}(n.a.Component)),A=R,F=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getShiftBudget=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);"RN"===e[s].type?t+=35*a:"LVN"===e[s].type?t+=24*a:t+=15*a}return t},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.getShiftBudget(this.props.staffs);return this.props.showBudget?Object(g.jsxs)("div",{className:"card mt-4",children:[Object(g.jsx)("div",{className:"card-header",children:"Total Staff Expenses"}),Object(g.jsx)("div",{id:"budget",className:"card-body",children:Object(g.jsxs)("h1",{"data-testid":"shiftBudgetValue-id",children:["$",e]})})]}):null}}]),s}(n.a.Component),L=F,E=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getDayShift=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);("12 Hours Day"===e[s].shift||"8 Hours Day"===e[s].shift)&&(t+=a)}return t},e.getEveningShift=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);"8 Hours Evening"===e[s].shift&&(t+=a)}return t},e.getNightShift=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);("12 Hours Night"===e[s].shift||"8 Hours Night"===e[s].shift)&&(t+=a)}return t},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.getDayShift(this.props.staffs),t=this.getEveningShift(this.props.staffs),s=this.getNightShift(this.props.staffs);return this.props.staffs.length>0?Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"card mt-4",children:[Object(g.jsx)("div",{className:"card-header",children:" Day Shift Hours"}),Object(g.jsx)("div",{id:"dayTotal",className:"card-body",children:Object(g.jsx)("h1",{children:e})})]}),Object(g.jsxs)("div",{className:"card mt-4",children:[Object(g.jsx)("div",{className:"card-header",children:"Evening Shift Hours"}),Object(g.jsx)("div",{id:"eveningTotal",className:"card-body",children:Object(g.jsx)("h1",{children:t})})]}),Object(g.jsxs)("div",{className:"card mt-4",children:[Object(g.jsx)("div",{className:"card-header",children:" Night Shift Hours"}),Object(g.jsx)("div",{id:"nightTotal",className:"card-body",children:Object(g.jsx)("h1",{children:s})})]})]}):null}}]),s}(n.a.Component),q=E,V=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleStaffChange=function(e){a.setState({staffs:e})},a.handleStaffAdd=function(e){console.log(e);var t=[].concat(Object(w.a)(a.state.staffs),[e]);a.setState({staffs:t})},a.handleInfoChange=function(e){a.setState({info:e})},a.handleCheckChange=function(e){var t=e.target.checked;a.setState((function(e){Object.assign({},e.showBudget);return{showBudget:t}}))},a.findFormErrors=function(e,t){var s={};return"HPPD"===e?t&&""!==t?(t<1||t>30)&&(s.HPPD="HPPD should be between 1 and 30"):s.HPPD="HPPD cannot be blank!":"bedUnit"===e?t&&""!==t?(t<1||t>60)&&(s.bedUnit="Number of beds should be between 1 and 60"):s.bedUnit="Number of beds cannot be blank!":"census"===e&&(t&&""!==t?t<1?s.census="Census cannot be less than 1":t>a.state.info.bedUnit&&(s.census="Census cannot exceed the number of beds in a unit!"):s.census="Census cannot be blank!"),s},a.state={results:"",staffNum:"The Results:",num:"",center:{"text-align":"center"},staffs:[],showBudget:!1,info:{unit:"",HPPD:"",bedUnit:"",census:""},errors:{HPPD:"",bedUnit:"",census:""}},a.handleInputChange=a.handleInputChange.bind(Object(N.a)(a)),a}return Object(l.a)(s,[{key:"handleInputChange",value:function(e){var t=e.target,s=t.value,a=t.name,n={};"unit"!==a&&(n=this.findFormErrors(a,s),Object.keys(n).length>0&&this.setState((function(e){var t=Object.assign({},e.errors);return t[a]=n[a],{errors:t}}))),this.setState((function(e){var t=Object.assign({},e.info);t[a]=s,"bedUnit"===a&&(t.census=s);var i=Object.assign({},e.errors);return i[a]&&i[a]!==n[a]&&(i[a]=null),{info:t,errors:i}}))}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsx)("div",{className:"col-md-4 ",children:Object(g.jsx)(A,{onInfoChange:this.handleInfoChange})}),Object(g.jsx)("div",{className:"col-md-8 fs-5",children:Object(g.jsx)("div",{className:"float-sm-end",children:Object(g.jsx)(S.a.Check,{type:"checkbox",id:"showBudget",label:"Show Budget",name:"showBudget","data-testid":"showbudget-id",checked:this.state.showBudget,onChange:this.handleCheckChange})})})]}),Object(g.jsxs)("div",{className:"row mt-5",children:[Object(g.jsxs)("div",{className:"col-md-3 col-sm-6 order-sm-last",children:[Object(g.jsx)(U,{staffs:this.state.staffs,info:this.state.info}),Object(g.jsx)(L,{staffs:this.state.staffs,showBudget:this.state.showBudget}),Object(g.jsx)(q,{staffs:this.state.staffs})]}),Object(g.jsxs)("div",{className:"col-md-9 col-sm-6 order-sm-first",children:[Object(g.jsxs)(S.a,{className:"row",noValidate:!0,children:[Object(g.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(g.jsx)(S.a.Label,{htmlFor:"unit",children:"Hospital unit"}),Object(g.jsx)(S.a.Control,{type:"text",name:"unit",id:"unit","data-testid":"unit-id",placeholder:"Hospital Unit",onChange:this.handleInputChange,value:this.state.info.unit})]}),Object(g.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(g.jsx)(S.a.Label,{htmlFor:"bedUnit",children:"Number of beds"}),Object(g.jsx)(S.a.Control,{type:"number",name:"bedUnit",id:"bedUnit","data-testid":"numbeds-id",placeholder:"Number of Beds",onChange:this.handleInputChange,value:this.state.info.bedUnit,isInvalid:!!this.state.errors.bedUnit}),Object(g.jsxs)(S.a.Control.Feedback,{type:"invalid",children:[" ",this.state.errors.bedUnit," "]})]}),Object(g.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(g.jsx)(S.a.Label,{htmlFor:"HPPD",children:"HPPD"}),Object(g.jsx)(S.a.Control,{type:"number",name:"HPPD",id:"HPPD","data-testid":"hppd-id",placeholder:"HPPD",onChange:this.handleInputChange,value:this.state.info.HPPD,isInvalid:!!this.state.errors.HPPD}),Object(g.jsxs)(S.a.Control.Feedback,{type:"invalid",children:[" ",this.state.errors.HPPD," "]})]}),Object(g.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(g.jsx)(S.a.Label,{htmlFor:"census",children:"Census"}),Object(g.jsx)(S.a.Control,{type:"number",name:"census",id:"census","data-testid":"census-id",placeholder:"Census",onChange:this.handleInputChange,value:this.state.info.census,isInvalid:!!this.state.errors.census}),Object(g.jsxs)(S.a.Control.Feedback,{type:"invalid",children:[" ",this.state.errors.census," "]})]})]}),Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"col-md-4 mt-4 ",children:Object(g.jsx)(P,{onStaffChange:this.handleStaffChange,onStaffAdd:this.handleStaffAdd,staffs:this.state.staffs})})}),Object(g.jsx)("div",{className:"row mt-5 ",children:Object(g.jsx)("div",{className:"mb-10",children:Object(g.jsx)(T,{staffs:this.state.staffs,onStaffChangeOnUpdate:this.handleStaffChange})})})]})]})]})}}]),s}(n.a.Component),M=(s(64),s.p+"static/media/Left-aligned-square-gray-2.11bbe62b.png"),W=s(77),G=s(74),J=s(76),$=s(26),Q=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onReload=function(){console.log("Reload clicked"),window.location.reload()},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("header",{children:[Object(g.jsx)(W.a,{bg:"light",children:Object(g.jsxs)(G.a,{children:[Object(g.jsx)("img",{src:M,alt:"Logo","data-testid":"reload",onClick:this.onReload}),Object(g.jsxs)(J.a,{className:"me-auto",children:[Object(g.jsx)($.b,{className:"text-dark nav-link",to:"/f21-angels-of-mercy",children:"Home"}),Object(g.jsx)($.b,{className:"text-dark nav-link",to:"/f21-angels-of-mercy/about",children:"About"}),Object(g.jsx)(J.a.Link,{className:"text-dark",href:"https://www.boisestate.edu/nursing/",children:"BSU Nursing Department"})]})]})}),Object(g.jsx)("div",{className:"p-5 bg-primary text-white rounded",children:Object(g.jsx)("h1",{children:"Inpatient Nurse Staffing Simulator"})})]})}}]),s}(n.a.Component),z=Q;s(65);var K=function(){return Object(g.jsx)("footer",{id:"footer",children:"BSU Nursing |   Dr. Renee Walters   |   reneewalters@boisestate.edu"})};var X=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(z,{}),Object(g.jsxs)(r.c,{children:[Object(g.jsx)(r.a,{index:!0,path:"/f21-angels-of-mercy",element:Object(g.jsx)(V,{})}),Object(g.jsx)(r.a,{path:"/f21-angels-of-mercy/about",element:Object(g.jsx)(y,{})})]})]}),Object(g.jsx)(K,{})]})})},Y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,80)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};s(66);c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)($.a,{children:Object(g.jsx)(X,{})})}),document.getElementById("root")),Y()}},[[67,1,2]]]);
//# sourceMappingURL=main.aa10c616.chunk.js.map