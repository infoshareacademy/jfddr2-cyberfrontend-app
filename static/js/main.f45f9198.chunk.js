(this.webpackJsonpeffi=this.webpackJsonpeffi||[]).push([[0],{15:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),a=c.n(s),r=c(16),o=c.n(r),i=(c(34),c(13)),l=c(6),u=c(4),d=(c(26),c(17));c(35),c(46),c(47);d.a.initializeApp({apiKey:"AIzaSyBcs9OUlswKK3ACSAUVIy3qihGGQlPJkMI",authDomain:"effi-d406d.firebaseapp.com",projectId:"effi-d406d",storageBucket:"effi-d406d.appspot.com",messagingSenderId:"810856324098",appId:"1:810856324098:web:9dc06130ba685c78501b1b",measurementId:"G-CCEQRXHV1Z"});var j=d.a;c(15);var m=function(e){e.board;var t=e.userId,c=Object(s.useState)(""),a=Object(u.a)(c,2),r=a[0],o=a[1];return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:"project__form",onSubmit:function(e){e.preventDefault(),j.firestore().collection("users/".concat(t,"/projects")).add({projectName:r.trim(),archive:!1,favourite:!1,createdAt:Date.now()}).then((function(e){o(""),e.collection("columns").add({columnName:"Todo",createdAt:Date.now()}).then((function(e){e.collection("tasks").add({taskName:"Be awesome",createdAt:Date.now()})})),e.collection("columns").add({columnName:"In Progress",createdAt:Date.now()}),e.collection("columns").add({columnName:"Done",createdAt:Date.now()})}))},autoComplete:"off",children:[Object(n.jsx)("label",{className:"project__label",htmlFor:"project-name",children:"New project"}),Object(n.jsx)("input",{required:!0,pattern:"^[^\\s]+(\\s+[^\\s]+)*$",title:"Give a nice and.. normal title \ud83d\ude09",className:"project__input",id:"project-name",value:r,type:"text",onChange:function(e){return o(e.target.value)}})]})})},b=Object(s.createContext)(null),h=function(e){var t=e.children,c=Object(s.useState)(null),a=Object(u.a)(c,2),r=a[0],o=a[1],i=Object(s.useState)({}),l=Object(u.a)(i,2),j=l[0],m=l[1];Object(s.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){e&&d.a.firestore().collection("users").doc(e.uid).onSnapshot((function(e){m(e.data())})),o(e)}))}),[]);var h={user:r,userData:j};return Object(n.jsx)(b.Provider,{value:h,children:t})},f=function(){return Object(s.useContext)(b)},O=c(12),p=function(){var e=f().user,t=Object(s.useState)(null),c=Object(u.a)(t,2),a=c[0],r=c[1],l=Object(s.useState)(""),d=Object(u.a)(l,2),m=d[0],b=d[1],h=e.uid;Object(s.useEffect)((function(){var e=j.firestore().collection("users/".concat(h,"/projects")).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)({id:e.id},e.data()))})),r(t)}));return function(){e&&e()}}),[h]);return a&&a.map((function(e){return Object(n.jsxs)("div",{className:"single-project single-row",children:[Object(n.jsx)(i.b,{to:"/board/project/".concat(e.id),children:Object(n.jsx)("div",{children:e.projectName})}),Object(n.jsx)("button",{className:"single-project__option optionBtn",onClick:function(){return b((function(t){return t===e.id?null:e.id}))},children:"..."}),m===e.id&&o.a.createPortal(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"selectContainer",children:Object(n.jsx)("button",{className:"deleteBtn",onClick:function(){return function(e){var t=j.firestore().collection("users/".concat(h,"/projects")).doc(e.id).delete();return function(){t&&t()}}(e)},children:"\u274c"})})}),document.getElementById("overlay"))]},e.id)}))};var x=function(){var e=f(),t=e.user,c=e.userData;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"board-nav",children:[Object(n.jsxs)("h3",{children:["Hello ",Object(n.jsx)("span",{children:c.username||"Anonymous"})]}),Object(n.jsx)("button",{className:"deleteBtn",onClick:function(){j.auth().signOut()},children:"Logout"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Your projects:"}),Object(n.jsx)(m,{userId:t.uid}),Object(n.jsx)(p,{})]})]})};c(42);var v=function(){return Object(n.jsx)("nav",{className:"nav",children:Object(n.jsxs)("ul",{className:"class__list",children:[Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/",children:"Hello page"})}),Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/board",children:"To Board"})})]})})},N=function(e){var t=e.children,c=e.cover,n=f(),s=n.user;n.userData;return null===s?c:t},w=function(e){var t=e.column,c=e.project,a=e.allColumns,r=f().user,i=Object(s.useState)(null),l=Object(u.a)(i,2),d=l[0],m=l[1],b=Object(s.useState)(""),h=Object(u.a)(b,2),p=h[0],x=h[1],v=Object(s.useState)(""),N=Object(u.a)(v,2),w=N[0],g=N[1],y=r.uid,S=c.id,C=t.id;Object(s.useEffect)((function(){var e=j.firestore().collection("users/".concat(y,"/projects/").concat(S,"/columns/").concat(C,"/tasks")).orderBy("createdAt","desc").onSnapshot((function(e){m(function(e){var t=[];return e.forEach((function(e){t.push(Object(O.a)({id:e.id},e.data()))})),t}(e))}));return function(){e&&e()}}),[y,S,C]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"radio",name:"select",className:"list-select",checked:!0,readOnly:!0,required:!0}),Object(n.jsx)("div",{className:"list-title",children:Object(n.jsx)("span",{children:t.columnName})}),Object(n.jsxs)("div",{className:"list-content task",children:[Object(n.jsxs)("form",{className:"task__form",onSubmit:function(e){e.preventDefault(),j.firestore().collection("users/".concat(y,"/projects/").concat(S,"/columns/").concat(C,"/tasks")).add({taskName:p,createdAt:Date.now()}).then((function(){return x("")}))},autoComplete:"off",children:[Object(n.jsx)("label",{className:"task__label",htmlFor:"task-name",children:"New task"}),Object(n.jsx)("input",{className:"task__input",value:p,type:"text",onChange:function(e){return x(e.target.value)},required:!0,pattern:"^[^\\s]+(\\s+[^\\s]+)*$",title:"Give a nice and.. normal title \ud83d\ude09",placeholder:"New Task..."})]}),Object(n.jsx)("ul",{children:d&&d.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("div",{className:"list-row",children:[Object(n.jsx)("h4",{children:e.taskName}),Object(n.jsx)("button",{className:"optionBtn",onClick:function(){return g((function(t){return t===e.id?null:e.id}))},children:"..."})]}),w===e.id&&o.a.createPortal(Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"selectContainer",children:[Object(n.jsx)("span",{children:"Move to:"}),Object(n.jsx)("select",{className:"selectContainer__select",onChange:function(t){!function(e,t){var c=j.firestore().collection("users/".concat(y,"/projects/").concat(S,"/columns/").concat(t,"/tasks")).doc(e.id).set(e).then((function(){j.firestore().collection("users/".concat(y,"/projects/").concat(S,"/columns/").concat(C,"/tasks")).doc(e.id).delete()}))}(e,t.target.value)},value:C,children:a.map((function(e){return Object(n.jsx)("option",{disabled:e.id===C,value:e.id,children:e.columnName},e.id)}))}),Object(n.jsx)("button",{className:"deleteBtn",onClick:function(){return function(e){j.firestore().collection("users/".concat(y,"/projects/").concat(S,"/columns/").concat(C,"/tasks")).doc(e.id).delete()}(e)},children:"\u274c"})]})}),document.getElementById("overlay"))]},e.id)}))})]})]})},g=function(){var e=Object(l.f)().projectId,t=f().user,c=Object(s.useState)(null),a=Object(u.a)(c,2),r=a[0],o=a[1],i=Object(s.useState)(null),d=Object(u.a)(i,2),m=d[0],b=d[1],h=Object(s.useState)(""),p=Object(u.a)(h,2),x=p[0],v=p[1],N=t.uid;if(Object(s.useEffect)((function(){var t=j.firestore().collection("users/".concat(N,"/projects")).doc(e),c=t.onSnapshot((function(e){o(Object(O.a)({id:e.id},e.data()))})),n=t.collection("columns").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)({id:e.id},e.data()))})),b(t)}));return function(){c&&c(),n&&n()}}),[e,N]),null===r)return Object(n.jsx)("p",{children:"Loading..."});return Object(n.jsxs)("div",{className:"project",children:[Object(n.jsx)("div",{className:"project__title--wrapper",children:Object(n.jsx)("h1",{className:"project__title",children:r.projectName})}),Object(n.jsxs)("form",{className:"project__form",onSubmit:function(t){t.preventDefault(),j.firestore().collection("users/".concat(N,"/projects/").concat(e,"/columns")).add({columnName:x,createdAt:Date.now()}).then((function(){return v("")}))},autoComplete:"off",children:[Object(n.jsx)("label",{className:"project__label",htmlFor:"column-name",children:"Add New List"}),Object(n.jsx)("input",{required:!0,pattern:"^[^\\s]+(\\s+[^\\s]+)*$",title:"Give a nice and.. normal title \ud83d\ude09",placeholder:"New List...",className:"project__input",id:"column-name",value:x,type:"text",onChange:function(e){return v(e.target.value)}})]}),m&&m.map((function(t){return Object(n.jsxs)("div",{className:"list",children:[Object(n.jsx)(w,{project:r,column:t,allColumns:m}),Object(n.jsx)("button",{className:"deleteBtn",onClick:function(){return function(t){j.firestore().collection("users/".concat(N,"/projects/").concat(e,"/columns")).doc(t.id).delete()}(t)},children:"\u274c"})]},t.id)}))]})},y=c.p+"static/media/logo.0e55d699.png",S=function(){return Object(n.jsxs)("div",{className:"homeView",children:[Object(n.jsx)("div",{className:"homeView__background"}),Object(n.jsxs)("div",{className:"homeView__title",children:[Object(n.jsx)("img",{src:y,alt:""}),Object(n.jsx)("h2",{children:"From now your tasks gonna fly! Let`s try !"})]})]})},C=(c(43),c(20)),k=function(e,t){var c=Object(s.useState)({username:"",email:"",password:"",password2:""}),n=Object(u.a)(c,2),a=n[0],r=n[1],o=Object(s.useState)({}),i=Object(u.a)(o,2),l=i[0],d=i[1],m=Object(s.useState)(!1),b=Object(u.a)(m,2),h=b[0],f=b[1];return Object(s.useEffect)((function(){0===Object.keys(l).length&&h&&e()}),[e,l,h]),{handleChange:function(e){var t=e.target,c=t.name,n=t.value;r(Object(O.a)(Object(O.a)({},a),{},Object(C.a)({},c,n)))},handleSubmit:function(e){e.preventDefault(),d(t(a)),f(!0),j.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){return j.firestore().collection("users").doc(e.user.uid).set({username:a.username,email:a.email}),e})).then((function(e){j.firestore().collection("users/".concat(e.user.uid,"/projects")).add({projectName:"Starter project",archive:!1,favourite:!1,createdAt:Date.now()}).then((function(e){e.collection("columns").add({columnName:"Todo",createdAt:Date.now()}).then((function(e){e.collection("tasks").add({taskName:"Be awesome",createdAt:Date.now()})})),e.collection("columns").add({columnName:"In Progress",createdAt:Date.now()}),e.collection("columns").add({columnName:"Done",createdAt:Date.now()})}))}))},values:a,errors:l}};function _(e){var t={};return e.username.trim()||(t.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is not correct"):t.email="Email required",e.password?e.password.length<8&&(t.password="Password needs to be 8 characters or more"):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Passwords are not the same"):t.password2="Password is required",t}var D=function(e){var t=e.submitForm,c=k(t,_),s=c.handleSubmit,a=c.handleChange,r=c.values,o=c.errors;return Object(n.jsx)("div",{className:"form-content-right",children:Object(n.jsxs)("form",{className:"form",onSubmit:s,children:[Object(n.jsx)("h2",{children:"Nice to see you!"}),Object(n.jsx)("h3",{children:" Create your account by filling out the form below."}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(n.jsx)("input",{id:"username",type:"text",name:"username",className:"form-input",placeholder:"Please enter your username",value:r.username,onChange:a}),o.username&&Object(n.jsx)("p",{children:o.username})]}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(n.jsx)("input",{id:"email",type:"email",name:"email",className:"form-input",placeholder:"Please enter your email",value:r.email,onChange:a}),o.email&&Object(n.jsx)("p",{children:o.email})]}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(n.jsx)("input",{id:"password",type:"passord",name:"password",className:"form-input",placeholder:"Please enter your password",value:r.password,onChange:a}),o.password&&Object(n.jsx)("p",{children:o.password})]}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"password2",className:"form-label",children:"Confirm your password"}),Object(n.jsx)("input",{id:"password2",type:"passord",name:"password2",className:"form-input",placeholder:"Confirm your password",value:r.password2,onChange:a}),o.password2&&Object(n.jsx)("p",{children:o.password2})]}),Object(n.jsx)("button",{className:"form-input-btn",type:"submit",children:"SIGN UP"}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{className:"form-input-login",children:["If you have an account press ",Object(n.jsx)("a",{href:"gosia.com",children:"Here"})]})]})})},I=function(){return Object(n.jsx)("div",{className:"form-content-right",children:Object(n.jsx)("div",{className:"form-success",children:Object(n.jsx)("h2",{children:"Welcome to EFFI ! From now your tasks gonna fly! Let`s try !"})})})},A=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.jsx)("div",{children:c?Object(n.jsx)(I,{}):Object(n.jsx)(D,{submitForm:function(){a(!0)}})})},P=(c(44),function(){return Object(n.jsx)("div",{children:Object(n.jsx)(A,{})})}),E=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),o=Object(u.a)(r,2),i=o[0],l=o[1];return Object(n.jsx)("div",{className:"form-content-right",children:Object(n.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),j.auth().signInWithEmailAndPassword(c,i).catch((function(e){alert("Your email or password is incorrect, please check your data, ".concat(e))}))},children:[Object(n.jsx)("h2",{children:"Nice to see you!"}),Object(n.jsx)("h3",{children:" Login Here."}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(n.jsx)("input",{id:"email",type:"email",name:"email",className:"form-input",placeholder:"Enter your email",onChange:function(e){return a(e.target.value)},value:c}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(n.jsx)("input",{id:"password",type:"passord",name:"password",className:"form-input",placeholder:"Please enter your password",onChange:function(e){return l(e.target.value)},value:i})]})]}),Object(n.jsx)("button",{className:"form-input-btn",type:"submit",children:"SIGN IN"}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{className:"form-input-login",children:["Forget your password ? Press",Object(n.jsx)("a",{href:"gosia.com",children:"Here"})]})]})})},F=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(E,{})})},B=function(e){var t=e.data,c=e.setData,a=Object(s.useState)(!1),r=Object(u.a)(a,2),o=r[0],i=r[1],l=Object(s.useState)(!1),d=Object(u.a)(l,2),j=d[0],m=d[1];return Object(n.jsxs)("div",{className:"landingPage-container",children:[Object(n.jsx)("button",{onClick:function(){m(!1),i(!o)},className:"form__containerButtonIn btn-hover login",children:"SIGN UP"}),Object(n.jsx)("button",{onClick:function(){i(!1),m(!j)},className:"form__containerButtonIn btn-hover login",children:"SIGN IN"}),o?Object(n.jsx)(P,{data:t,setData:c}):null,j?Object(n.jsx)(F,{data:t,setData:c}):null,Object(n.jsx)("img",{className:"effiLogo",src:y,alt:"logo"})]})},q=function(){return Object(n.jsx)(i.a,{children:Object(n.jsx)(N,{cover:Object(n.jsx)(B,{}),children:Object(n.jsxs)(l.c,{children:[Object(n.jsxs)(l.a,{path:"/board/project/:projectId",children:[Object(n.jsx)(v,{}),Object(n.jsx)(g,{})]}),Object(n.jsxs)(l.a,{path:"/board/",children:[Object(n.jsx)(v,{}),Object(n.jsx)(x,{})]}),Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(i.b,{to:"/board",children:Object(n.jsx)(S,{})})})]})})})};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(h,{children:Object(n.jsx)(q,{})})}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f45f9198.chunk.js.map