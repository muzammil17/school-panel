(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1197:function(e,a,t){"use strict";t.r(a);var r=t(889),n=t(227),s=t(228),l=t(230),o=t(229),c=t(231),i=t(3),m=t.n(i),d=t(895),h=t(896),u=t(894),p=t(887),g=t(903),E=t(886),b=function(e){function a(){var e,t;Object(n.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={FirstName:"",LastName:"",FatherName:"",ContactNo:"",Address:"",PermanentAddress:"",CNIC:"",Email:"",DOB:"",JoiningDate:"",Salary:"",Department:"",Designation:"",Gender:"",TeacherImage:null,maritalStatus:"",loan:"",totalLoan:"",FirstNameError:"",LastNameError:"",FatherNameError:"",ContactNoError:"",AddressError:"",PermanentAddressError:"",CNICError:"",EmailError:"",DOBError:"",JoiningDateError:"",SalaryError:"",DepartmentError:"",DesignationError:"",GenderError:"",maritalStatusError:"",loanError:"",totalloanError:"",loading:!1,success:!1,errorText:""},t.handleChange=function(e){var a;t.setState((a={},Object(r.a)(a,e.target.name,e.target.value),Object(r.a)(a,"errorText",""),Object(r.a)(a,e.target.name+"Error",""),Object(r.a)(a,"success",!1),a))},t.handleImage=function(e){console.log(e.target.files),t.setState({TeacherImage:e.target.files[0]})},t.submitButton=function(e){e.preventDefault(),console.log("hello");var a=!0;if(""===t.state.FatherName&&(t.setState({FatherNameError:"* Father name is required"}),a=!1),""===t.state.FirstName&&(t.setState({FirstNameError:"* First name is required"}),a=!1),""===t.state.LastName&&(t.setState({LastNameError:"* Last name is required"}),a=!1),""===t.state.ContactNo&&(t.setState({ContactNoError:"* Contact number is required"}),a=!1),""===t.state.Address&&(t.setState({AddressError:"* Address is required"}),a=!1),""===t.state.PermanentAddress&&(t.setState({PermanentAddressError:"* Permanent Address is required"}),a=!1),""===t.state.Email&&(t.setState({EmailError:"* Email is required"}),a=!1),""===t.state.CNIC&&(t.setState({CNICError:"* CNIC is required"}),a=!1),""===t.state.DOB&&(t.setState({DOBError:"* date of birth is required"}),a=!1),""===t.state.Gender&&(t.setState({GenderError:"* Gender is required"}),a=!1),""===t.state.maritalStatus&&(t.setState({maritalStatusError:"* martial Status is required"}),a=!1),""===t.state.JoiningDate&&(t.setState({JoiningDateError:"* Joining date is required"}),a=!1),""===t.state.Designation&&(t.setState({DesignationError:"* Designation is required"}),a=!1),""===t.state.Department&&(t.setState({DepartmentError:"* date of birth is required"}),a=!1),""===t.state.salary&&(t.setState({salaryError:"* date of birth is required"}),a=!1),""===t.state.Loan&&(t.setState({LoanError:"* Loan Amount is required"}),a=!1),""===t.state.totalLoan&&(t.setState({totalLoanError:"* Loan Amount is required"}),a=!1),console.log(a),a){var n=new FormData;n.append("FirstName",t.state.FirstName),n.append("LastName",t.state.LastName),n.append("FatherName",t.state.FatherName),n.append("Address",t.state.Address),n.append("ContactNo",t.state.ContactNo),n.append("PermanentAddress",t.state.PermanentAddress),n.append("Email",t.state.Email),n.append("CNIC",t.state.CNIC),n.append("DOB",t.state.DOB),n.append("Gender",t.state.Gender),n.append("maritalStatus",t.state.maritalStatus),n.append("JoiningDate",t.state.JoiningDate),n.append("Designation",t.state.Designation),n.append("Department",t.state.Department),n.append("Salary",t.state.Salary),n.append("loan",t.state.loan),n.append("totalLoan",t.state.totalLoan),null!==t.state.TeacherImage&&void 0!==t.state.TeacherImage&&n.append("TeacherImage",t.state.TeacherImage),t.setState({loading:!0});var s=t.props.location.state.search,l=!0,o=!1,c=void 0;try{for(var i,m=n.values()[Symbol.iterator]();!(l=(i=m.next()).done);l=!0){var d=i.value;console.log(d)}}catch(h){o=!0,c=h}finally{try{l||null==m.return||m.return()}finally{if(o)throw c}}Object(p.a)("teacher/".concat(s),"post",n).then(function(e){if(console.log(e),"fail"!==e.data.status)t.setState({loading:!1,success:!0}),t.componentDidMount();else{var a=e.data.message;Object.keys(a).map(function(e){var n;t.setState((n={},Object(r.a)(n,"".concat(e,"Error"),a[e]),Object(r.a)(n,"loading",!1),n))})}}).catch(function(e){console.log(e),console.log(e.response),t.setState({loading:!1}),e.response?t.setState({errorText:e.response.data.message}):t.setState({errorText:"* Network error"})})}},t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(this.props.location.state){var a=this.props.location.state.search;Object(p.a)("teacher/"+a,"get").then(function(a){console.log(a),e.setState({teacherData:a.data.Teachers,FirstName:a.data.Teachers.FirstName,LastName:a.data.Teachers.LastName,FatherName:a.data.Teachers.FatherName,ContactNo:a.data.Teachers.ContactNo,Address:a.data.Teachers.Address,PermanentAddress:a.data.Teachers.PermanentAddress,CNIC:a.data.Teachers.CNIC,Email:a.data.Teachers.Email,DOB:a.data.Teachers.DOB,JoiningDate:a.data.Teachers.JoiningDate,Salary:a.data.Teachers.salary,Department:a.data.Teachers.Department,Designation:a.data.Teachers.Designation,Gender:a.data.Teachers.Gender,maritalStatus:a.data.Teachers.maritalStatus,loan:a.data.Teachers.loan,totalLoan:a.data.Teachers.totalLoan,loading:!1}),a.data.Teachers.TeacherImage&&e.setState({TeacherImage:a.data.Teachers.TeacherImage})}).catch(function(e){return console.log(e)})}else this.props.history.push("/listTeacher")}},{key:"render",value:function(){var e,a,t;return null===this.state.teacherData?m.a.createElement("h2",null,"Loading"):m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"form card-body"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:" col-md-6 col-sm-12"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"exampleFormControlFile1"},"Change Image :"," "),m.a.createElement("input",{type:"file",className:"form-control-file",id:"exampleFormControlFile1",name:"TeacherImage",onChange:this.handleImage,defaultValue:this.state.TeacherImage})))),null!==this.state.TeacherImage&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:" col-6 col-sm-3 "},m.a.createElement("img",{src:E.b+this.state.TeacherImage,style:{height:150}}))),m.a.createElement("hr",null)),m.a.createElement(d.a,{type:"text",labelFor:"firstName",Label:"First Name :",onChange:this.handleChange,placeHolder:"First Name",name:"FirstName",value:this.state.FirstName}),m.a.createElement(d.a,{type:"text",labelFor:"LastName",Label:"Last Name :",onChange:this.handleChange,placeHolder:"Last Name",name:"LastName",value:this.state.LastName}),m.a.createElement(d.a,{type:"text",labelFor:"FatherName",Label:"Father's Name :",onChange:this.handleChange,placeHolder:"Father Name",name:"FatherName",value:this.state.FatherName}),m.a.createElement(d.a,(e={type:"tel",labelFor:"number",Label:"Contact No :",onChange:this.handleChange},Object(r.a)(e,"onChange",this.handleChange),Object(r.a)(e,"placeHolder","034512345678"),Object(r.a)(e,"name","ContactNo"),Object(r.a)(e,"value",this.state.ContactNo),e)),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.ContactNoError),m.a.createElement(d.a,{type:"text",labelFor:"address",Label:"Address : ",onChange:this.handleChange,placeHolder:"street 4",name:"Address",value:this.state.Address}),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.AddressError),m.a.createElement(d.a,{type:"text",labelFor:"permanentAddress",Label:"Permanent Address : ",onChange:this.handleChange,placeHolder:"street 4",name:"PermanentAddress",value:this.state.PermanentAddress}),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.PermanentAddressError),m.a.createElement(d.a,(a={type:"text",labelFor:"cnic",Label:"Father CNIC : ",onChange:this.handleChange},Object(r.a)(a,"onChange",this.handleChange),Object(r.a)(a,"placeHolder","42201-12121212-1"),Object(r.a)(a,"name","CNIC"),Object(r.a)(a,"value",this.state.CNIC),a)),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.CNICError),m.a.createElement(d.a,(t={type:"main",labelFor:"main",Label:"Email : ",onChange:this.handleChange},Object(r.a)(t,"onChange",this.handleChange),Object(r.a)(t,"placeHolder","example123@gmail.com"),Object(r.a)(t,"name","Email"),Object(r.a)(t,"value",this.state.Email),t)),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.EmailError),m.a.createElement(d.a,{type:"date",labelFor:"date",Label:"Date Of Birth : ",name:"DOB",onChange:this.handleChange,value:this.state.DOB}),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.DOBError),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-12 formInput"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"sel1",className:"semi-bold"},"Gender :"),m.a.createElement("select",{className:"form-control select",id:"sel1",name:"Gender",onChange:this.handleChange,defaultValue:this.state.Gender},m.a.createElement("option",{disabled:!0},"Select Gender"),m.a.createElement("option",null,"Male"),m.a.createElement("option",null,"Female"),m.a.createElement("option",null,"Other"))))),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.GenderError),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-12 formInput"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"sel1",className:"semi-bold"},"Martial Status :"),m.a.createElement("select",{className:"form-control select",id:"sel1",name:"maritalStatus",onChange:this.handleChange,defaultValue:this.state.maritalStatus},m.a.createElement("option",{disabled:!0},"Status"),m.a.createElement("option",null,"Status 2"),m.a.createElement("option",null,"Status 1"),m.a.createElement("option",null,"Status 3"))))),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.maritalStatusError),m.a.createElement(d.a,{type:"date",labelFor:"joiningDate",Label:"Joining Date : ",name:"JoiningDate",onChange:this.handleChange,value:this.state.JoiningDate}),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.JoiningDateError),m.a.createElement(d.a,{type:"text",labelFor:"designation",Label:"Designation : ",onChange:this.handleChange,placeHolder:"1112 street",name:"Designation",value:this.state.Designation}),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.DesignationError),m.a.createElement(d.a,{type:"text",labelFor:"De",Label:"Department : ",onChange:this.handleChange,placeHolder:"1112 street",name:"Department",value:this.state.Department}),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.DepartmentError),m.a.createElement(d.a,{type:"number",labelFor:"De",Label:"Salary : ",onChange:this.handleChange,placeHolder:"Amount",name:"Salary",value:this.state.Salary}),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.salaryError),m.a.createElement(d.a,{type:"number",labelFor:"De",Label:"Loan : ",onChange:this.handleChange,placeHolder:"Amount",name:"loan",value:this.state.loan}),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.loanError),m.a.createElement(d.a,{type:"number",labelFor:"De",Label:"Total Loan : ",onChange:this.handleChange,placeHolder:"Amount",name:"totalLoan",value:this.state.totalLoan}),m.a.createElement("small",{style:{color:"#f86c6b"}},this.state.totalloanError),""!==this.state.errorText&&m.a.createElement(g.a,{color:"danger",className:"mt-3"},this.state.errorText),this.state.success&&m.a.createElement(g.a,{color:"success",className:"mt-3"},"Data successfully submitted"),this.state.loading?m.a.createElement(u.a,null):m.a.createElement(h.a,{onClick:this.submitButton}))))}}]),a}(i.Component);a.default=b},886:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return n});var r="http://school.mictronicx.com/backend/public/api/",n="http://school.mictronicx.com/backend/public/"},887:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var r=t(888),n=t.n(r),s=t(886);function l(e,a,t){console.log(s.a+e);var r=localStorage.getItem("token");return console.log(r),console.log("bearer ".concat(r)),"get"===a||"Get"===a||"delete"===a||"Delete"===a?n()({method:a,url:s.a+e,params:t,headers:{Authorization:"Bearer ".concat(r)},config:{headers:{"Content-Type":"application/json"}}}):n()({method:a,url:s.a+e,data:t,headers:{Authorization:"Bearer ".concat(r)},config:{headers:{"Content-Type":"application/json"}}})}},889:function(e,a,t){"use strict";function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",function(){return r})},894:function(e,a,t){"use strict";var r=t(3),n=t.n(r);a.a=function(e){return n.a.createElement("div",{className:"submitButton"},n.a.createElement("button",{className:"btn-primary px-5 py-3 ml-2"},n.a.createElement("div",{className:"spinner-border spinner-border-sm",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))))}},895:function(e,a,t){"use strict";var r=t(3),n=t.n(r);a.a=function(e){var a=e.forlabel,t=e.Label,r=e.placeHolder,s=e.type,l=e.value,o=e.name,c=e.onChange;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 formInput"},n.a.createElement("label",{htmlFor:a,className:"semi-bold"}," ",t," "),n.a.createElement("input",{type:s,name:o,placeholder:r,defaultValue:l,onChange:c,className:"py-2 px-3"})))}},896:function(e,a,t){"use strict";var r=t(3),n=t.n(r);a.a=function(e){var a=e.onClick;return n.a.createElement("div",{className:"submitButton"},n.a.createElement("button",{type:"submit",className:"btn-primary px-5 py-3 ml-2",onClick:a},"Submit"))}},903:function(e,a,t){"use strict";var r=t(35),n=t(100),s=t(897),l=t(3),o=t.n(l),c=t(112),i=t.n(c),m=t(884),d=t.n(m),h=t(885),u=t(898),p={children:i.a.node,className:i.a.string,closeClassName:i.a.string,closeAriaLabel:i.a.string,cssModule:i.a.object,color:i.a.string,fade:i.a.bool,isOpen:i.a.bool,toggle:i.a.func,tag:h.l,transition:i.a.shape(u.a.propTypes),innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},g={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(s.a)({},u.a.defaultProps,{unmountOnExit:!0})};function E(e){var a=e.className,t=e.closeClassName,l=e.closeAriaLabel,c=e.cssModule,i=e.tag,m=e.color,p=e.isOpen,g=e.toggle,E=e.children,b=e.transition,N=e.fade,f=e.innerRef,C=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(h.h)(d()(a,"alert","alert-"+m,{"alert-dismissible":g}),c),v=Object(h.h)(d()("close",t),c),D=Object(s.a)({},u.a.defaultProps,b,{baseClass:N?b.baseClass:"",timeout:N?b.timeout:0});return o.a.createElement(u.a,Object(r.a)({},C,D,{tag:i,className:y,in:p,role:"alert",innerRef:f}),g?o.a.createElement("button",{type:"button",className:v,"aria-label":l,onClick:g},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,E)}E.propTypes=p,E.defaultProps=g,a.a=E}}]);
//# sourceMappingURL=27.99d89ad6.chunk.js.map