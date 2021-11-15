(this["webpackJsonpf21-angels-of-mercy"]=this["webpackJsonpf21-angels-of-mercy"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(14),r=n.n(i),c=(n(27),n(28),n(22)),o=n(8),l=n(9),d=n(15),h=n(11),u=n(10),f=n(7),b=(n(29),n(48)),j=n(49),p=(n(30),n(1)),O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).generateUUID=function(){for(var e=[],t="0123456789abcdef",n=0;n<36;n++)e[n]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},a.getShiftValue=function(e){var t=0;switch(e){case"12 Hours Day":case"12 Hours Night":t=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":t=8;break;default:t=0}return t},a.handleAdd=function(e){e.preventDefault();var t=new FormData(e.target),n=Object.fromEntries(t.entries()),s=a.generateUUID(),i=parseInt(n.quantity)*a.getShiftValue(n.shift),r={id:s,quantity:n.quantity,type:n.staffType,shift:n.shift,shiftTotal:i};a.props.onStaffAdd(r),a.handleClose()},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.state={open:!1,show:!1},a}return Object(l.a)(n,[{key:"render",value:function(){for(var e=[],t=1;t<=50;t++)e.push(t);var n=e.map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"addstaff-id",onClick:this.handleShow,children:"Add Staff"}),Object(p.jsx)(b.a,{animation:!1,show:this.state.show,"data-testid":"addStaffModal-id",onHide:this.handleClose,children:Object(p.jsxs)(f.a,{onSubmit:this.handleAdd,children:[Object(p.jsx)(b.a.Header,{children:Object(p.jsx)(b.a.Title,{children:"Select your staff member"})}),Object(p.jsxs)(b.a.Body,{children:[Object(p.jsxs)(f.a.Group,{className:"mb-3",controlId:"staffType",required:!0,children:[Object(p.jsx)(f.a.Label,{children:"Staff Type"}),Object(p.jsxs)(f.a.Control,{as:"select",name:"staffType",children:[Object(p.jsx)("option",{value:"RN",children:"RN"}),Object(p.jsx)("option",{value:"LVN",children:"LVN"}),Object(p.jsx)("option",{value:"Unlicensed",children:"Unlicensed"})]})]}),Object(p.jsxs)(f.a.Group,{className:"mb-3",controlId:"shiftType",required:!0,children:[Object(p.jsx)(f.a.Label,{children:"Shift Type"}),Object(p.jsxs)(f.a.Control,{as:"select",name:"shift",className:"caret",children:[Object(p.jsx)("option",{value:"12 Hours Day",children:"12 Hours Day"}),Object(p.jsx)("option",{value:"12 Hours Night",children:"12 Hours Night"}),Object(p.jsx)("option",{value:"8 Hours Day",children:"8 Hours Day"}),Object(p.jsx)("option",{value:"8 Hours Evening",children:"8 Hours Evening"}),Object(p.jsx)("option",{value:"8 Hours Night",children:"8 Hours Night"})]})]}),Object(p.jsxs)(f.a.Group,{className:"mb-3",controlId:"quantity",required:!0,children:[Object(p.jsx)(f.a.Label,{children:"Quantity"}),Object(p.jsx)(f.a.Control,{as:"select",name:"quantity",children:n})]})]}),Object(p.jsxs)(b.a.Footer,{children:[Object(p.jsx)(j.a,{variant:"outline-secondary","data-testid":"cancelStaffAdd-id",onClick:this.handleClose,children:"Close"}),Object(p.jsx)(j.a,{variant:"outline-primary","data-testid":"addStaffConfirm-id",type:"submit",children:"Add New Staff"})]})]})})]})}}]),n}(s.a.Component),m=(n(35),n(45)),v=n(46),x=n(47),g=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).listAdd=function(t){var n=parseInt(e.props.staffs[t].quantity),a=parseInt(e.props.staffs[t].shiftTotal);n+=1,a=12===parseInt(e.props.staffs[t].shift)?parseInt(a)+12:parseInt(a)+8,n<=100&&(e.props.staffs[t].quantity=n,e.props.staffs[t].shiftTotal=a,e.props.onStaffChangeOnUpdate(e.props.staffs))},e.listSub=function(t){var n=parseInt(e.props.staffs[t].quantity),a=parseInt(e.props.staffs[t].shiftTotal);n-=1,a=12===parseInt(e.props.staffs[t].shift)?parseInt(a)-12:parseInt(a)-8,n<=0?e.props.staffs.splice(t,1):(e.props.staffs[t].quantity=n,e.props.staffs[t].shiftTotal=a),e.props.onStaffChangeOnUpdate(e.props.staffs)},e.listRemove=function(t){e.props.staffs.splice(t,1),e.props.onStaffChangeOnUpdate(e.props.staffs)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.staffs.map((function(t,n){return Object(p.jsxs)("tr",{id:t.id,children:[Object(p.jsx)("td",{children:Object(p.jsx)(m.a,{className:"bTrash","data-testid":"delete-id",onClick:e.listRemove.bind(t,n)})}),Object(p.jsx)("td",{children:t.type}),Object(p.jsxs)("td",{children:[Object(p.jsx)(v.a,{className:"bPlus","data-testid":"add-id",onClick:e.listAdd.bind(t,n)}),t.quantity,Object(p.jsx)(x.a,{className:"bDash","data-testid":"minus-id",onClick:e.listSub.bind(t,n)})]}),Object(p.jsx)("td",{children:t.shift}),Object(p.jsx)("td",{children:t.shiftTotal})]},t.id)}));return Object(p.jsxs)("table",{className:"table table-striped table-hover",id:"staffCont",children:[Object(p.jsx)("thead",{className:"table-BSU",children:t.length>0&&Object(p.jsxs)("tr",{"data-testid":"staffList-id",children:[Object(p.jsx)("th",{}),Object(p.jsx)("th",{scope:"col",children:"Staff Type"}),Object(p.jsx)("th",{scope:"col",children:"Quantity"}),Object(p.jsx)("th",{scope:"col",children:"Shift Type"}),Object(p.jsx)("th",{scope:"col",children:"Shift Total"})]})}),Object(p.jsx)("tbody",{children:t})]})}}]),n}(s.a.Component),y=g,C=(n(36),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).getShiftValue=function(e){var t=0;switch(e){case"12 Hours Day":case"12 Hours Night":t=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":t=8;break;default:t=0}return t},e.getStaffHours=function(t){for(var n=0,a=0;a<t.length;a++){n+=e.getShiftValue(t[a].shift)*parseInt(t[a].quantity)}return n},e.calculation=function(t,n){var a=parseInt(t.census)*parseInt(t.HPPD)-e.getStaffHours(n);return a||"--"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.calculation(this.props.info,this.props.staffs);return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"Hours for Day Remaining"}),Object(p.jsxs)("div",{id:"results",className:"card-body",children:[Object(p.jsx)("label",{children:"HPPD"}),Object(p.jsx)("h1",{className:e<0?"negCalc":"",children:"--"!==e?e.toFixed(0):e})]})]})}}]),n}(s.a.Component)),N=C,S=(n(37),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).random=function(e,t){var n=t-e,a=Math.random();return e+Math.round(a*n)},e.setRandomValues=function(){var t=e.random(1,30),n=e.random(1,60),a={unit:"Random Hospital Unit",HPPD:t,bedUnit:n,census:e.random(1,n)};e.props.onInfoChange(a)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"random-id",onClick:this.setRandomValues,children:"Random Scenario"})}}]),n}(s.a.Component)),H=S,P=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleStaffChange=function(e){a.setState({staffs:e})},a.handleStaffAdd=function(e){console.log(e);var t=[].concat(Object(c.a)(a.state.staffs),[e]);a.setState({staffs:t})},a.handleInfoChange=function(e){a.setState({info:e})},a.findFormErrors=function(e,t){var n={};return"HPPD"===e?t&&""!==t?(t<1||t>30)&&(n.HPPD="HPPD should be between 1 and 30"):n.HPPD="HPPD cannot be blank!":"bedUnit"===e?t&&""!==t?(t<1||t>60)&&(n.bedUnit="Number of beds should be between 1 and 60"):n.bedUnit="Number of beds cannot be blank!":"census"===e&&(t&&""!==t?t<1?n.census="Census cannot be less than 1":t>a.state.info.bedUnit&&(n.census="Census cannot exceed the number of beds in a unit!"):n.census="Census cannot be blank!"),n},a.state={results:"",staffNum:"The Results:",num:"",center:{"text-align":"center"},staffs:[],info:{unit:"",HPPD:"",bedUnit:"",census:""},errors:{HPPD:"",bedUnit:"",census:""}},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name,s={};"unit"!==a&&(s=this.findFormErrors(a,n),Object.keys(s).length>0&&this.setState((function(e){var t=Object.assign({},e.errors);return t[a]=s[a],{errors:t}}))),this.setState((function(e){var t=Object.assign({},e.info);t[a]=n,"bedUnit"===a&&(t.census=n);var i=Object.assign({},e.errors);return i[a]&&i[a]!==s[a]&&(i[a]=null),{info:t,errors:i}}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"row mt-5",children:[Object(p.jsx)("div",{className:"col-md-3 col-sm-6 order-sm-last",children:Object(p.jsx)(N,{staffs:this.state.staffs,info:this.state.info})}),Object(p.jsxs)("div",{className:"col-md-9 col-sm-6 order-sm-first",children:[Object(p.jsxs)(f.a,{className:"row",noValidate:!0,children:[Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)(f.a.Label,{htmlFor:"unit",children:"Hospital unit"}),Object(p.jsx)(f.a.Control,{type:"text",name:"unit",id:"unit","data-testid":"unit-id",placeholder:"Hospital Unit",onChange:this.handleInputChange,value:this.state.info.unit})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)(f.a.Label,{htmlFor:"HPPD",children:"HPPD"}),Object(p.jsx)(f.a.Control,{type:"number",name:"HPPD",id:"HPPD","data-testid":"hppd-id",placeholder:"HPPD",onChange:this.handleInputChange,value:this.state.info.HPPD,isInvalid:!!this.state.errors.HPPD}),Object(p.jsx)(f.a.Control.Feedback,{type:"invalid",children:this.state.errors.HPPD})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)(f.a.Label,{htmlFor:"bedUnit",children:"Number of beds"}),Object(p.jsx)(f.a.Control,{type:"number",name:"bedUnit",id:"bedUnit","data-testid":"numbeds-id",placeholder:"Number of Beds",onChange:this.handleInputChange,value:this.state.info.bedUnit,isInvalid:!!this.state.errors.bedUnit}),Object(p.jsx)(f.a.Control.Feedback,{type:"invalid",children:this.state.errors.bedUnit})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)(f.a.Label,{htmlFor:"census",children:"Census"}),Object(p.jsx)(f.a.Control,{type:"number",name:"census",id:"census","data-testid":"census-id",placeholder:"Census",onChange:this.handleInputChange,value:this.state.info.census,isInvalid:!!this.state.errors.census}),Object(p.jsx)(f.a.Control.Feedback,{type:"invalid",children:this.state.errors.census})]})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-4 mt-4 ",children:Object(p.jsx)(O,{onStaffChange:this.handleStaffChange,onStaffAdd:this.handleStaffAdd,staffs:this.state.staffs})}),Object(p.jsx)("div",{className:"col-md-4 mt-4 ",children:Object(p.jsx)(H,{onInfoChange:this.handleInfoChange})})]})]})]}),Object(p.jsx)("div",{className:"row mt-5",children:Object(p.jsx)("div",{className:"col-md-9",children:Object(p.jsx)(y,{staffs:this.state.staffs,onStaffChangeOnUpdate:this.handleStaffChange})})})]})}}]),n}(s.a.Component),I=(n(38),n.p+"static/media/Left-aligned-square-gray-2.11bbe62b.png"),D=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onReload=function(){console.log("Reload clicked"),window.location.reload()},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("header",{children:[Object(p.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("img",{src:I,alt:"Logo","data-testid":"reload",onClick:this.onReload}),Object(p.jsx)("div",{id:"navbarSupportedContent",children:Object(p.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{className:"nav-link",href:"https://www.boisestate.edu/nursing/",children:"BSU Nursing Department"})})})})]})}),Object(p.jsx)("div",{className:"p-5 bg-primary text-white rounded",children:Object(p.jsx)("h1",{children:"Inpatient Nurse Staffing Simulator"})})]})}}]),n}(s.a.Component),w=D;n(39);var k=function(){return Object(p.jsx)("footer",{id:"footer",children:"BSU Nursing |   Dr. Renee Walters   |   reneewalters@boisestate.edu"})};var U=function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(w,{}),Object(p.jsx)(P,{}),Object(p.jsx)(k,{})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};n(40);r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.0ce0c515.chunk.js.map