(this["webpackJsonpecommerce-client"]=this["webpackJsonpecommerce-client"]||[]).push([[0],{16:function(e,a,t){},38:function(e,a,t){e.exports=t(66)},66:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(35),c=t.n(r),s=t(2),i=t(3),o=t(5),m=t(4),u=t(6),d=t(1),h=t(10),p=t(14),E=t(9),v=t(7),b=t(8),g=t.n(b),f=(t(16),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).signup=function(){g.a.post("".concat("https://minacre8s.herokuapp.com/api","/signup"),t.state,{withCredentials:!0}).then((function(e){t.setState({firstName:"",lastName:"",email:"",password:"",error:null,success:!0})})).catch((function(e){t.setState({error:e.response.data.message})}))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.signupForm=function(){return l.a.createElement("div",null,t.showError(),l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s10",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement(v.a,{className:"prefix material-icons black-text"}),l.a.createElement("input",{name:"firstName",value:t.state.firstName,onChange:t.handleChange,id:"firstName",type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"firstName"},"First Name"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement(v.a,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"lastName",value:t.state.lastName,onChange:t.handleChange,id:"lastName",type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"lastName"},"Last Name"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement(v.e,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"email",value:t.state.email,onChange:t.handleChange,id:"email",type:"email",className:"validate"}),l.a.createElement("label",{htmlFor:"email"},"Email"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement(v.d,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"password",value:t.state.password,onChange:t.handleChange,id:"password",type:"password",className:"validate"}),l.a.createElement("label",{htmlFor:"password"},"Password"))),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor fullwidth",type:"submit",name:"action"},l.a.createElement("span",null,"Submit")))))},t.state={firstName:"",lastName:"",email:"",password:"",error:null,success:!1},t.handleChange=t.handleChange.bind(Object(E.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(E.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value)),this.setState({error:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.signup()}},{key:"render",value:function(){if(this.state.success)return l.a.createElement(h.a,{to:"/signin"});return l.a.createElement("div",{className:"formOffset"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s6 offset-s3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:"images/signup.jpg",alt:"abstract",style:{height:"150px"}}),l.a.createElement("span",{className:"card-title black-text"},l.a.createElement("h2",null,"Create an Account"))),l.a.createElement("div",{className:"card-content"},this.signupForm())))))}}]),a}(l.a.Component)),N=function(){return"undefined"!==typeof window&&(!!localStorage.getItem("User")&&JSON.parse(localStorage.getItem("User")))},y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).signinForm=function(){return l.a.createElement("div",null,t.showError(),l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s10",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement(v.e,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"email",value:t.state.email,onChange:t.handleChange,id:"email",type:"email",className:"validate"}),l.a.createElement("label",{htmlFor:"email"},"Email"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement(v.d,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"password",value:t.state.password,onChange:t.handleChange,id:"password",type:"password",className:"validate"}),l.a.createElement("label",{htmlFor:"password"},"Password"))),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor fullwidth",type:"submit",name:"action"},l.a.createElement("span",null,"Submit")))))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.state={email:"",password:"",error:null,success:!1},t.handleChange=t.handleChange.bind(Object(E.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(E.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value)),this.setState({error:!1})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),g.a.post("".concat("https://minacre8s.herokuapp.com/api","/login"),this.state,{withCredentials:!0}).then((function(e){var t,n;t=e,n=function(){a.setState({email:"",password:"",error:null,success:!0})},"undefined"!==typeof window&&(localStorage.setItem("User",JSON.stringify(t)),n())})).catch((function(e){a.setState({error:e.response.data.message})}))}},{key:"render",value:function(){if(this.state.success)return 1===N().data.userDoc.role?l.a.createElement(h.a,{to:"/admin/dashboard"}):l.a.createElement(h.a,{to:"/user/dashboard"});if(N())return l.a.createElement(h.a,{to:"/"});return l.a.createElement("div",{className:"formOffset"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s6 offset-s3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:"images/signup.jpg",alt:"abstract",style:{height:"150px"}}),l.a.createElement("span",{className:"card-title black-text"},l.a.createElement("h2",null,"Sign In"))),l.a.createElement("div",{className:"card-content"},this.signinForm())))))}}]),a}(l.a.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{background:"url(/images/home.png) no-repeat center center fixed",backgroundSize:"cover",height:"1000px",minWidth:"1524px"}})}}]),a}(l.a.Component),w=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).userprofile=function(){return 1===N().data.userDoc.role?l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard"},l.a.createElement(v.a,{className:"material-icons"}))):l.a.createElement("li",null,l.a.createElement(d.b,{to:"/user/dashboard"},l.a.createElement(v.a,{className:"material-icons"})))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"navBackground"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(d.b,{to:"/",className:" brand-logo navLogo"},"Mina Cre8s "),l.a.createElement("ul",{className:"brand-logo center"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about"},"Bows")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about"},"Custom Orders")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about"},"Onesies")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about"},"T-shirts")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about"},"Tutus"))),l.a.createElement("ul",{className:"right hide-on-med-and-down"},!N()&&l.a.createElement(n.Fragment,null,l.a.createElement("li",null,l.a.createElement(d.b,{to:"/signin"},"Signin")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/signup"},"Signup"))),N()&&l.a.createElement(n.Fragment,null,this.userprofile(),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/",onClick:function(){return"undefined"!==typeof window&&localStorage.removeItem("User"),g.a.delete("".concat("https://minacre8s.herokuapp.com/api","/logout"),{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){console.log("Logout ERROR",e)}))}},"Signout")))),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/"},l.a.createElement(v.g,{className:"material-icons"})))))))}}]),a}(l.a.Component),O=Object(h.g)(w),k=N().data.userDoc,j=k.firstName,S=k.lastName,x=k.email,P=function(){return l.a.createElement("ul",{id:"slide-out",style:{marginTop:"65px"},className:"sidenav sidenav-fixed invesible-top"},l.a.createElement("li",null,l.a.createElement("div",{className:"user-view"},l.a.createElement("div",{className:"background"},l.a.createElement("img",{src:"/images/signup.jpg",alt:"abstractPink"})),l.a.createElement("div",{className:"circle"}),l.a.createElement("a",{href:"#name"},l.a.createElement("span",{className:"black-text name"},l.a.createElement("h5",null,j," ",S))),l.a.createElement("a",{href:"#email"},l.a.createElement("span",{className:"black-text email"},x)))),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/user/dashboard"},"Dashboard")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/user/dashboard/orders"},"Order History")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/user/dashboard/profile"},"User Profile")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})))},F=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(P,null)),l.a.createElement("div",{className:"col s9"}))}}]),a}(l.a.Component),D=N().data.userDoc,U=D.firstName,I=D.lastName,A=D.email,_=function(){return l.a.createElement("ul",{id:"slide-out",style:{marginTop:"65px"},className:"sidenav sidenav-fixed invesible-top"},l.a.createElement("li",null,l.a.createElement("div",{className:"user-view"},l.a.createElement("div",{className:"background"},l.a.createElement("img",{src:"/images/signup.jpg",alt:"abstractPink"})),l.a.createElement("div",{className:"circle"}),l.a.createElement("a",{href:"#name"},l.a.createElement("span",{className:"black-text name"},l.a.createElement("h5",null,U," ",I))),l.a.createElement("a",{href:"#email"},l.a.createElement("span",{className:"black-text email"},A)))),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard"},"Dashboard")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/products"},"Products")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/products/create"},"Add Product")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/categories"},"Categories")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/categories/create"},"Add Category")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/orders"},"Orders")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/users"},"Users")),l.a.createElement("li",null,l.a.createElement("div",{class:"divider"})))},q=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(_,null)),l.a.createElement("div",{className:"col s9"}))}}]),a}(l.a.Component),z=t(20),V=function(e){var a=e.component,t=Object(z.a)(e,["component"]);return l.a.createElement(h.b,Object.assign({},t,{render:function(e){return N()?l.a.createElement(a,e):l.a.createElement(h.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},M=function(e){var a=e.component,t=Object(z.a)(e,["component"]);return l.a.createElement(h.b,Object.assign({},t,{render:function(e){return N()&&1===N().data.userDoc.role?l.a.createElement(a,e):l.a.createElement(h.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},R=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).categoryForm=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s12",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Add Category"),t.showError(),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement(v.b,{className:" prefix material-icons black-text"}),l.a.createElement("input",{id:"name",type:"text",name:"name",className:"validate",value:t.state.name,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"name"},"Category Name")),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor",type:"submit",name:"action"},l.a.createElement("span",null,"Submit")))))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.state={name:"",error:null,success:!1},t.user=N().data.userDoc,t.token=N().data.Auth,t.handleChange=t.handleChange.bind(Object(E.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(E.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value)),this.setState({error:!1})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),g.a.post("".concat("https://minacre8s.herokuapp.com/api","/categories/create"),this.state,{withCredentials:!0}).then((function(e){a.setState({name:"",error:null,success:!0})})).catch((function(e){a.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return this.state.success?l.a.createElement(h.a,{to:"/admin/dashboard/categories"}):(console.log(this.user,this.token),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(_,null)),l.a.createElement("div",{className:"col s9"},this.categoryForm())))}}]),a}(l.a.Component),J=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).categoryForm=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s12",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Edit Category"),t.showError(),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement(v.b,{className:" prefix material-icons black-text"}),l.a.createElement("input",{id:"name",type:"text",name:"name",className:"validate",value:t.state.name,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"name"},"Category Name")),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor",type:"submit",name:"action"},l.a.createElement("span",null,"Submit")))))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.state={name:"",error:null,success:!1,category:{}},t.user=N().data.userDoc,t.token=N().data.Auth,t.handleChange=t.handleChange.bind(Object(E.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(E.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params;g.a.get("".concat("https://minacre8s.herokuapp.com/api","/categories/").concat(a.id)).then((function(a){var t=a.data;e.setState({name:t.foundCategory.name,category:t.foundCategory}),console.log(e.state)}))}},{key:"handleChange",value:function(e){console.log(this.state),this.setState(Object(p.a)({},e.target.name,e.target.value)),this.setState({error:!1})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),g.a.put("".concat("https://minacre8s.herokuapp.com/api","/categories/update/").concat(this.state.category._id),this.state,{withCredentials:!0}).then((function(e){console.log(e),a.setState({error:null,success:!0})})).catch((function(e){a.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return this.state.success?l.a.createElement(h.a,{to:"/admin/dashboard/categories"}):l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(_,null)),l.a.createElement("div",{className:"col s9"},this.categoryForm()))}}]),a}(l.a.Component),L=t(21),T=t.n(L),B=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={categories:[]},e.removeItem=e.removeItem.bind(Object(E.a)(e)),e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://minacre8s.herokuapp.com/api","/categories")).then((function(a){e.setState({categories:a.data.categories})}))}},{key:"removeItem",value:function(e,a){var t=this;g.a.delete("".concat("https://minacre8s.herokuapp.com/api","/categories/delete/").concat(a),{withCredentials:!0}).then((function(a){t.setState((function(a){return{categories:T()(a.categories,{$splice:[[e,1]]})}}))})).catch((function(e){console.log("delete error",e)}))}},{key:"showCategories",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",null,"Categories"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Category Name"),l.a.createElement("th",null,"Edit Category"),l.a.createElement("th",null,"Delete Category"),l.a.createElement("th",null,"Number of Products"))),l.a.createElement("tbody",null,this.state.categories.map((function(a,t){return l.a.createElement("tr",{key:a._id},l.a.createElement("td",null,a.name.charAt(0).toUpperCase()+a.name.slice(1)),l.a.createElement("td",null,l.a.createElement(d.b,{to:"/admin/dashboard/categories/edit/".concat(a._id)},l.a.createElement(v.f,{className:"material-icons"}))),l.a.createElement("td",null,l.a.createElement(d.b,{to:"/admin/dashboard/categories",onClick:function(){return e.removeItem(t,a._id)}},l.a.createElement(v.c,{className:"material-icons"}))),l.a.createElement("td",null,"0"))})))),l.a.createElement("div",null))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(_,null)),l.a.createElement("div",{className:"col s9"},this.showCategories()))}}]),a}(n.Component),Q=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={products:[]},e.removeItem=e.removeItem.bind(Object(E.a)(e)),e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://minacre8s.herokuapp.com/api","/products")).then((function(a){e.setState({products:a.data.products}),console.log(e.state.products)}))}},{key:"removeItem",value:function(e,a){var t=this;g.a.delete("".concat("https://minacre8s.herokuapp.com/api","/products/delete/").concat(a),{withCredentials:!0}).then((function(a){t.setState((function(a){return{products:T()(a.products,{$splice:[[e,1]]})}}))})).catch((function(e){console.log("delete error",e)}))}},{key:"showProducts",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",null,"Products"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Edit Category"),l.a.createElement("th",null,"Delete Category"))),l.a.createElement("tbody",null,this.state.products.map((function(a,t){return l.a.createElement("tr",{key:a._id},l.a.createElement("td",null,a.name.charAt(0).toUpperCase()+a.name.slice(1)),l.a.createElement("td",null,"$",a.regularPrice),l.a.createElement("td",null,a.quantity),l.a.createElement("td",null,l.a.createElement(d.b,{to:"/admin/dashboard/products/edit/".concat(a._id)},l.a.createElement(v.f,{className:"material-icons"}))),l.a.createElement("td",null,l.a.createElement(d.b,{to:"/admin/dashboard/products",onClick:function(){return e.removeItem(t,a._id)}},l.a.createElement(v.c,{className:"material-icons"}))))})))),l.a.createElement("div",null))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(_,null)),l.a.createElement("div",{className:"col s9"},this.showProducts()))}}]),a}(n.Component),$=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).productForm=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s12",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Add Product"),t.showError(),l.a.createElement("div",{className:"file-field input-field "},l.a.createElement("div",{className:"btn-small waves-effect waves-light btnColor"},l.a.createElement("span",null,"Upload Image"),l.a.createElement("input",{type:"file",name:"productImage",value:t.state.productImage,onChange:t.handleChange})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"name",type:"text",name:"name",className:"validate",value:t.state.name,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"name"},"Product Name")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("select",{className:"browser-default",name:"category",value:t.state.category,onChange:t.handleChange},l.a.createElement("option",null,"Choose a Category"),t.state.categories.map((function(e){return l.a.createElement("option",{key:e._id,name:"category",value:e._id},e.name)})))),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{type:"text",name:"description",className:"validate",value:t.state.description,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"description"},"Description")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"regularPrice",className:"validate",value:t.state.regularPrice,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"regularPrice"},"Regular Price")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"salePrice",className:"validate",value:t.state.salePrice,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"salePrice"},"Sale Price")),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("input",{type:"text",name:"salePriceValidUntil",className:"validate",value:t.state.priceValidUntil,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"salePriceValidUntil"},"Sale Price Valid Until")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",onClick:function(){t.setState({instock:!t.state.instock})}}),l.a.createElement("span",null,"Instock"))),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("input",{type:"number",name:"quantity",className:"validate",value:t.state.quantity,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"quantity"},"Quantity")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{type:"text",name:"color",className:"validate",value:t.state.color,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"color"},"Color")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{type:"text",name:"size",className:"validate",value:t.state.size,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"color"},"Size"))),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor",type:"submit",name:"action"},l.a.createElement("span",null,"Submit"))))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.state={name:"",productImage:"",priceCurrency:"",regularPrice:void 0,salePrice:void 0,description:"",instock:!1,quantity:"",color:"",size:"",salePriceValidUntil:"",categories:[],category:void 0,error:null,success:!1},t.user=N().data.userDoc,t.token=N().data.Auth,t.handleChange=t.handleChange.bind(Object(E.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(E.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://minacre8s.herokuapp.com/api","/categories")).then((function(a){e.setState({categories:a.data.categories})}))}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value)),this.setState({error:!1}),console.log(this.state)}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),g.a.post("".concat("https://minacre8s.herokuapp.com/api","/products/create"),this.state,{withCredentials:!0}).then((function(e){a.setState({name:"",error:null,success:!0})})).catch((function(e){a.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return this.state.success?l.a.createElement(h.a,{to:"/admin/dashboard/products"}):l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(_,null)),l.a.createElement("div",{className:"col s9"},this.productForm()))}}]),a}(l.a.Component),H=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).productForm=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s12",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Edit Product"),t.showError(),l.a.createElement("div",{className:"file-field input-field "},l.a.createElement("div",{className:"btn-small waves-effect waves-light btnColor"},l.a.createElement("span",null,"Upload Image"),l.a.createElement("input",{type:"file",name:"productImage",value:t.state.productImage,onChange:t.handleChange})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"name",type:"text",name:"name",className:"validate",value:t.state.name,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"name"},"Product Name")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("select",{className:"browser-default",name:"category",value:t.state.product,onChange:t.handleChange},l.a.createElement("option",null,"Choose a category"),t.state.categories.map((function(e){return l.a.createElement("option",{key:e._id,name:"category",value:e._id},e.name)})))),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{type:"text",name:"description",className:"validate",value:t.state.description,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"description"},"Description")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"regularPrice",className:"validate",value:t.state.regularPrice,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"regularPrice"},"Regular Price")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"salePrice",className:"validate",value:t.state.salePrice,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"salePrice"},"Sale Price")),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("input",{type:"text",name:"priceValidUntil",className:"validate",value:t.state.priceValidUntil,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"priceValidUntil"},"Sale Price Valid Until")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",onClick:function(){t.setState({instock:!t.state.instock})}}),l.a.createElement("span",null,"Instock"))),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("input",{type:"number",name:"quantity",className:"validate",value:t.state.quantity,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"quantity"},"Quantity")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{type:"text",name:"color",className:"validate",value:t.state.color,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"color"},"Color")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{type:"text",name:"size",className:"validate",value:t.state.size,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"color"},"Size"))),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor",type:"submit",name:"action"},l.a.createElement("span",null,"Submit"))))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.state={name:"",productImage:void 0,priceCurrency:"",regularPrice:void 0,salePrice:void 0,description:"",instock:!1,quantity:"",color:"",size:"",salePriceValidUntil:"",categories:[],category:void 0,product:{},error:null,success:!1},t.user=N().data.userDoc,t.token=N().data.Auth,t.handleChange=t.handleChange.bind(Object(E.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(E.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params;g.a.get("".concat("https://minacre8s.herokuapp.com/api","/products/").concat(a.id)).then((function(a){var t=a.data;e.setState({name:t.foundProduct.name,priceCurrency:t.foundProduct.priceCurrency,regularPrice:t.foundProduct.regularPrice,salePrice:t.foundProduct.salePrice,description:t.foundProduct.description,instock:t.foundProduct.instock,quantity:t.foundProduct.quantity,color:t.foundProduct.color,size:t.foundProduct.size,salePriceValidUntil:t.salePriceDate,category:t.foundProduct.category,product:t.foundProduct}),console.log(e.state)})),g.a.get("".concat("https://minacre8s.herokuapp.com/api","/categories")).then((function(a){e.setState({categories:a.data.categories})}))}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value)),this.setState({error:!1}),console.log(this.state)}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),g.a.put("".concat("https://minacre8s.herokuapp.com/api","/products/update/").concat(this.state.product._id),this.state,{withCredentials:!0}).then((function(e){a.setState({error:null,success:!0})})).catch((function(e){a.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return this.state.success?l.a.createElement(h.a,{to:"/admin/dashboard/products"}):l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(_,null)),l.a.createElement("div",{className:"col s9"},this.productForm()))}}]),a}(l.a.Component),W=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={users:[]},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://minacre8s.herokuapp.com/api","/users")).then((function(a){e.setState({users:a.data.foundUsers})}))}},{key:"showUsers",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Users"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Email"))),l.a.createElement("tbody",null,this.state.users.map((function(e,a){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.firstName.charAt(0).toUpperCase()+e.firstName.slice(1)),l.a.createElement("td",null,e.lastName.charAt(0).toUpperCase()+e.lastName.slice(1)),l.a.createElement("td",null,e.email))})))),l.a.createElement("div",null))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(_,null)),l.a.createElement("div",{className:"col s9"},this.showUsers()))}}]),a}(n.Component),G=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={currentUser:null},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(O,null),l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:C}),l.a.createElement("div",{className:"container"},l.a.createElement(h.b,{exact:!0,path:"/signin",component:y}),l.a.createElement(h.b,{exact:!0,path:"/signup",component:f}),l.a.createElement(V,{exact:!0,path:"/user/dashboard",component:F}),l.a.createElement(M,{exact:!0,path:"/admin/dashboard",component:q}),l.a.createElement(M,{exact:!0,path:"/admin/dashboard",component:q}),l.a.createElement(M,{exact:!0,path:"/admin/dashboard/categories/create",component:R}),l.a.createElement(M,{exact:!0,path:"/admin/dashboard/categories/edit/:id",component:J}),l.a.createElement(M,{exact:!0,path:"/admin/dashboard/categories",component:B}),l.a.createElement(M,{exact:!0,path:"/admin/dashboard/products",component:Q}),l.a.createElement(M,{exact:!0,path:"/admin/dashboard/products/create",component:$}),l.a.createElement(M,{exact:!0,path:"/admin/dashboard/products/edit/:id",component:H}),l.a.createElement(M,{exact:!0,path:"/admin/dashboard/users",component:W}))))}}]),a}(l.a.Component);c.a.render(l.a.createElement(G,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.45594202.chunk.js.map