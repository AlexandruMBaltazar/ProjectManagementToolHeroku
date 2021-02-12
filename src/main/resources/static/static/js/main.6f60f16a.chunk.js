(this["webpackJsonpproject-management-tool-portal"]=this["webpackJsonpproject-management-tool-portal"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(1),n=a.n(c),s=a(25),o=a.n(s),i=(a(50),a(51),a(4)),l=a(5),j=a(7),d=a(6),u=a(8),p=function(){return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsx)(u.b,{to:"/addProject",className:"btn btn-lg btn-info",children:"Create a Project"})})},h=a(2),m=a(9),b=a.n(m),O=a(17),v=a(14),f=a.n(v),x="GET_ERRORS",g="GET_PROJECTS",y="GET_PROJECT",N="DELETE_PROJECT",k="GET_BACKLOG",C="GET_PROJECT_TASK",w="DELETE_PROJECT_TASK",S="SET_CURRENT_USER",P=function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("/api/project",e);case 3:t.push("/dashboard"),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},D=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"onDeleteClick",value:function(e){this.props.deleteProject(e)}},{key:"render",value:function(){var e=this.props.project;return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"card card-body bg-light mb-3",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)("span",{className:"mx-auto",children:e.projectIdentifier})}),Object(r.jsxs)("div",{className:"col-lg-6 col-md-4 col-8",children:[Object(r.jsx)("h3",{children:e.projectName}),Object(r.jsx)("p",{children:e.description})]}),Object(r.jsx)("div",{className:"col-md-4 d-none d-lg-block",children:Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsx)(u.b,{to:"/projectBoard/".concat(e.projectIdentifier),children:Object(r.jsx)("li",{className:"list-group-item board",children:Object(r.jsx)("i",{className:"fa fa-flag-checkered pr-1",children:" Project Board "})})}),Object(r.jsx)(u.b,{to:"/updateProject/".concat(e.projectIdentifier),children:Object(r.jsx)("li",{className:"list-group-item update",children:Object(r.jsx)("i",{className:"fa fa-edit pr-1",children:" Update Project Info"})})}),Object(r.jsx)("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier),children:Object(r.jsx)("i",{className:"fa fa-minus-circle pr-1",children:" Delete Project"})})]})})]})})})}}]),a}(c.Component),_=Object(h.b)(null,{deleteProject:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure you want to delete this project ?")){t.next=5;break}return t.next=3,f.a.delete("/api/project/".concat(e));case 3:t.sent,a({type:N,payload:e});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(D),T=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return Object(r.jsx)("div",{className:"projects",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-12",children:[Object(r.jsx)("h1",{className:"display-4 text-center",children:"Projects"}),Object(r.jsx)("br",{}),Object(r.jsx)(p,{}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),e.map((function(e){return Object(r.jsx)(_,{project:e},e.id)}))]})})})})}}]),a}(c.Component),I=Object(h.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/project/all");case 2:a=e.sent,t({type:g,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(T),E=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},R=a(27),B=function(){return function(e){localStorage.removeItem("jwtToken"),E(!1),e({type:S,payload:{}})}},A=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e=this.props.security,t=e.validToken,a=e.user,c=Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:Object(r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{className:"nav-link",to:"/register",children:"Sign Up"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{className:"nav-link",to:"/login",children:"Login"})})]})}),n=Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:[Object(r.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{className:"nav-link",to:"/dashboard",children:"Dashboard"})})}),Object(r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsxs)(u.b,{className:"nav-link",to:"/dashboard",children:[Object(r.jsx)("i",{className:"fas fa-user-circle mr-1"}),a.fullName]})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this),children:"Logout"})})]})]});return Object(r.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u.b,{className:"navbar-brand",to:"/",children:"Personal Project Management Tool"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),t&&a?n:c]})})}}]),a}(c.Component),U=Object(h.b)((function(e){return{security:e.security}}),{logout:B})(A),F=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(r.jsx)("div",{class:"landing",children:Object(r.jsx)("div",{class:"light-overlay landing-inner text-dark",children:Object(r.jsx)("div",{class:"container",children:Object(r.jsx)("div",{class:"row",children:Object(r.jsxs)("div",{class:"col-md-12 text-center",children:[Object(r.jsx)("h1",{class:"display-3 mb-4",children:"Personal Project Management Tool"}),Object(r.jsx)("p",{class:"lead",children:"Create your account to join active projects or start you own"}),Object(r.jsx)("hr",{}),Object(r.jsx)(u.b,{className:"btn btn-lg btn-primary mr-2",to:"/register",children:"Sign Up"}),Object(r.jsx)(u.b,{to:"/login",class:"btn btn-lg btn-secondary mr-2",children:"Login"})]})})})})})}}]),a}(c.Component),L=Object(h.b)((function(e){return{security:e.security}}))(F),M=a(15),q=a(12),G=a(13),J=a.n(G),H=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{className:"register",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h1",{className:"display-4 text-center",children:"Sign Up"}),Object(r.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:J()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.fullName})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"email",className:J()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address(This is your username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",Object(M.a)({type:"password",className:"form-control form-control-lg",placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange},"className",J()("form-control form-control-lg",{"is-invalid":e.password}))),e.password&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",Object(M.a)({type:"password",className:"form-control form-control-lg",placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange},"className",J()("form-control form-control-lg",{"is-invalid":e.confirmPassword}))),e.confirmPassword&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.confirmPassword})]}),Object(r.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}],[{key:"getDerivedStateFromProps",value:function(e){return e.errors?{errors:e.errors}:null}}]),a}(c.Component),X=Object(h.b)((function(e){return{security:e.security,errors:e.errors}}),{createNewUser:function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("/api/users/register",e);case 3:t.push("/login"),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(H),K=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={username:"",password:"",errors:{}},e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e.onChange=e.onChange.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentDidUpdate",value:function(e){this.props.security.validToken!==e.security.validToken&&this.props.history.push("/dashboard")}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{className:"login",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"email",placeholder:"Email Address - Username",name:"username",value:this.state.username,onChange:this.onChange,className:J()("form-control form-control-lg",{"is-invalid":e.username})}),e.username&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange,className:J()("form-control form-control-lg",{"is-invalid":e.password})}),e.password&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(r.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}],[{key:"getDerivedStateFromProps",value:function(e){return e.errors?{errors:e.errors}:null}}]),a}(c.Component),V=Object(h.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){var r,c,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("/api/users/login",e);case 3:r=t.sent,c=r.data.token,localStorage.setItem("jwtToken",c),E(c),n=Object(R.a)(c),a({type:S,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(K),z=(a(75),a(11)),W=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"project",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h5",{className:"display-4 text-center",children:"Create Project form"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:J()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:J()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectIdentifier})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{className:J()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.projectName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(r.jsx)("h6",{children:"Start Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})}),Object(r.jsx)("h6",{children:"Estimated End Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})})}}],[{key:"getDerivedStateFromProps",value:function(e){return e.errors?{errors:e.errors}:null}}]),a}(c.Component),Q=Object(h.b)((function(e){return{errors:e.errors}}),{createProject:P})(W),Y=a(22),Z=a(43),$=a(10),ee={project_tasks:[],project_task:{}},te={},ae={projects:[],project:{}},re={user:{},validToken:!1},ce=Object(Y.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object($.a)(Object($.a)({},e),{},{projects:t.payload});case y:return Object($.a)(Object($.a)({},e),{},{project:t.payload});case N:return Object($.a)(Object($.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object($.a)(Object($.a)({},e),{},{project_tasks:t.payload});case C:return Object($.a)(Object($.a)({},e),{},{project_task:t.payload});case w:return Object($.a)(Object($.a)({},e),{},{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object($.a)(Object($.a)({},e),{},{validToken:!!t.payload,user:t.payload});default:return e}}}),ne={},se=[Z.a],oe=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),ie=window.navigator.userAgent.includes("Chrome")&&oe?Object(Y.e)(ce,ne,Object(Y.d)(Y.a.apply(void 0,se),oe)):Object(Y.e)(ce,ne,Object(Y.d)(Y.a.apply(void 0,se))),le=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"componentDidUpdate",value:function(e){this.props.project!==e.project&&this.setState(this.props.project)}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=Object($.a)({},this.state);this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"project",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h5",{className:"display-4 text-center",children:"Update Project form"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:J()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:J()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,disabled:!0})}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{className:J()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.projectName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(r.jsx)("h6",{children:"Start Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",value:this.state.start_date,onChange:this.onChange,name:"start_date"})}),Object(r.jsx)("h6",{children:"Estimated End Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",value:this.state.end_date,onChange:this.onChange,name:"end_date"})}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})})}}],[{key:"getDerivedStateFromProps",value:function(e){return e.errors?{errors:e.errors}:null}}]),a}(c.Component),je=Object(h.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){var c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.get("/api/project/".concat(e));case 3:c=a.sent,r({type:y,payload:c.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:P})(le),de=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(t="bg-danger text-light",e="HIGH"),2===a.priority&&(t="bg-warning text-light",e="MEDIUM"),3===a.priority&&(t="bg-info text-light",e="LOW"),Object(r.jsxs)("div",{className:"card mb-1 bg-light",children:[Object(r.jsxs)("div",{className:"card-header text-primary ".concat(t),children:["ID: ",a.projectSequence," -- Priority: ",e]}),Object(r.jsxs)("div",{className:"card-body bg-light",children:[Object(r.jsx)("h5",{className:"card-title",children:a.summary}),Object(r.jsx)("p",{className:"card-text text-truncate ",children:a.acceptanceCriteria}),Object(r.jsx)(u.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary",children:"View / Update"}),Object(r.jsx)("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence),children:"Delete"})]})]})}}]),a}(c.Component),ue=Object(h.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure you want to delete this project task ?")){a.next=4;break}return a.next=3,f.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:w,payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(de),pe=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){for(var e=[],t=[],a=[],c=this.props.project_tasks_prop.map((function(e){return Object(r.jsx)(ue,{project_task:e},e.id)})),n=0;n<c.length;n++)"TO_DO"===c[n].props.project_task.status&&e.push(c[n]),"IN_PROGRESS"===c[n].props.project_task.status&&t.push(c[n]),"DONE"===c[n].props.project_task.status&&a.push(c[n]);return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{className:"card text-center mb-2",children:Object(r.jsx)("div",{className:"card-header bg-secondary text-white",children:Object(r.jsx)("h3",{children:"TO DO"})})}),e]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{className:"card text-center mb-2",children:Object(r.jsx)("div",{className:"card-header bg-primary text-white",children:Object(r.jsx)("h3",{children:"In Progress"})})}),t]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{className:"card text-center mb-2",children:Object(r.jsx)("div",{className:"card-header bg-success text-white",children:Object(r.jsx)("h3",{children:"Done"})})}),a]})]})})}}]),a}(c.Component),he=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).displayBoard=function(e,t){return t.length<1?e.projectNotFound?Object(r.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:e.projectNotFound}):Object(r.jsx)("div",{className:"alert alert-info text-center",role:"alert",children:"No Project Tasks On This Board"}):Object(r.jsx)(pe,{project_tasks_prop:t})},e.state={errors:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.props.backlog.project_tasks,a=this.state.errors;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u.b,{to:"/addProjectTask/".concat(e),className:"btn btn-primary mb-3",children:Object(r.jsx)("i",{className:"fas fa-plus-circle",children:" Create Project Task"})}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),this.displayBoard(a,t)]})}}],[{key:"getDerivedStateFromProps",value:function(e){return e.errors?{errors:e.errors}:null}}]),a}(c.Component),me=Object(h.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:k,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:x,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(he),be=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(i.a)(this,a);var c=(r=t.call(this,e)).props.match.params.id;return r.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:null,projectIdentifier:c,errors:{}},r.onChange=r.onChange.bind(Object(q.a)(r)),r.onSubmit=r.onSubmit.bind(Object(q.a)(r)),r}return Object(l.a)(a,[{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return Object(r.jsx)("div",{className:"add-PBI",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)(u.b,{to:"/projectBoard/".concat(e),className:"btn btn-light",children:"Back to Project Board"}),Object(r.jsx)("h4",{className:"display-4 text-center",children:"Add Project Task"}),Object(r.jsx)("p",{className:"lead text-center",children:"Project Name + Project Code"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:J()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&Object(r.jsx)("div",{className:"invalid-feedback",children:t.summary})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(r.jsx)("h6",{children:"Due Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(r.jsx)("option",{value:0,children:"Select Priority"}),Object(r.jsx)("option",{value:1,children:"High"}),Object(r.jsx)("option",{value:2,children:"Medium"}),Object(r.jsx)("option",{value:3,children:"Low"})]})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(r.jsx)("option",{value:"",children:"Select Status"}),Object(r.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(r.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(r.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(r.jsx)("input",{type:"submit",class:"btn btn-primary btn-block mt-4"})]})]})})})})}}],[{key:"getDerivedStateFromProps",value:function(e){return e.errors?{errors:e.errors}:null}}]),a}(c.Component),Oe=Object(h.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(O.a)(b.a.mark((function r(c){return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),c({type:x,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),c({type:x,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(be),ve=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",created_At:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentDidUpdate",value:function(e){if(this.props.project_task!==e.project_task){var t=this.props.project_task,a=t.id,r=t.projectSequence,c=t.summary,n=t.acceptanceCriteria,s=t.status,o=t.priority,i=t.dueDate,l=t.projectIdentifier,j=t.created_At;this.setState({id:a,projectSequence:r,summary:c,acceptanceCriteria:n,status:s,priority:o,dueDate:i,projectIdentifier:l,created_At:j})}}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,created_At:this.state.created_At};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.backlog_id,t=this.state.errors;return Object(r.jsx)("div",{className:"add-PBI",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)(u.b,{to:"/projectBoard/".concat(e),className:"btn btn-light",children:"Back to Project Board"}),Object(r.jsx)("h4",{className:"display-4 text-center",children:"Update Project Task"}),Object(r.jsxs)("p",{className:"lead text-center",children:["Project Name: ",this.state.projectIdentifier," | Project Task ID:"," ",this.state.projectSequence," "]}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:J()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&Object(r.jsx)("div",{className:"invalid-feedback",children:t.summary})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(r.jsx)("h6",{children:"Due Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(r.jsx)("option",{value:0,children:"Select Priority"}),Object(r.jsx)("option",{value:1,children:"High"}),Object(r.jsx)("option",{value:2,children:"Medium"}),Object(r.jsx)("option",{value:3,children:"Low"})]})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(r.jsx)("option",{value:"",children:"Select Status"}),Object(r.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(r.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(r.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}],[{key:"getDerivedStateFromProps",value:function(e){return e.errors?{errors:e.errors}:null}}]),a}(c.Component),fe=Object(h.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(O.a)(b.a.mark((function r(c){var n;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:n=r.sent,c({type:C,payload:n.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var c=Object(O.a)(b.a.mark((function c(n){return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,f.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),n({type:x,payload:{}}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),n({type:x,payload:c.t0.response.data});case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(e){return c.apply(this,arguments)}}()}})(ve),xe=a(44),ge=Object(h.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,c=Object(xe.a)(e,["component","security"]);return Object(r.jsx)(z.b,Object($.a)(Object($.a)({},c),{},{render:function(e){return!0===a.validToken?Object(r.jsx)(t,Object($.a)({},e)):Object(r.jsx)(z.a,{to:"/login"})}}))})),ye=localStorage.jwtToken;if(ye){E(ye);var Ne=Object(R.a)(ye);ie.dispatch({type:S,payload:Ne});var ke=Date.now()/1e3;Ne.exp<ke&&(ie.dispatch(B()),window.location.href="/")}var Ce=function(){return Object(r.jsx)(h.a,{store:ie,children:Object(r.jsx)(u.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(U,{}),Object(r.jsx)(z.b,{exact:!0,path:"/",component:L}),Object(r.jsx)(z.b,{exact:!0,path:"/register",component:X}),Object(r.jsx)(z.b,{exact:!0,path:"/login",component:V}),Object(r.jsx)(ge,{exact:!0,path:"/dashboard",component:I}),Object(r.jsx)(ge,{exact:!0,path:"/addProject",component:Q}),Object(r.jsx)(ge,{exact:!0,path:"/updateProject/:id",component:je}),Object(r.jsx)(ge,{exact:!0,path:"/projectBoard/:id",component:me}),Object(r.jsx)(ge,{exact:!0,path:"/addProjectTask/:id",component:Oe}),Object(r.jsx)(ge,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:fe})]})})})},we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(Ce,{})}),document.getElementById("root")),we()}},[[76,1,2]]]);
//# sourceMappingURL=main.6f60f16a.chunk.js.map