(this["webpackJsonpecommerce-client"]=this["webpackJsonpecommerce-client"]||[]).push([[0],{16:function(e,a,t){},37:function(e,a,t){e.exports=t(64)},64:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(34),c=t.n(r),s=t(2),i=t(3),o=t(5),m=t(4),u=t(6),d=t(1),h=t(9),E=t(18),p=t(11),b=t(8),v=t(10),f=t.n(v),g=(t(16),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).signup=function(){f.a.post("".concat("https://minacre8s.herokuapp.com/api","/signup"),t.state,{withCredentials:!0}).then((function(e){t.setState({firstName:"",lastName:"",email:"",password:"",error:null,success:!0})})).catch((function(e){t.setState({error:e.response.data.message})}))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.signupForm=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Sign Up"),t.showError(),l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s10",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s5"},l.a.createElement(b.a,{className:"prefix material-icons black-text"}),l.a.createElement("input",{name:"firstName",value:t.state.firstName,onChange:t.handleChange,id:"firstName",type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"firstName"},"First Name"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s5"},l.a.createElement(b.a,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"lastName",value:t.state.lastName,onChange:t.handleChange,id:"lastName",type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"lastName"},"Last Name"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s5"},l.a.createElement(b.d,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"email",value:t.state.email,onChange:t.handleChange,id:"email",type:"email",className:"validate"}),l.a.createElement("label",{htmlFor:"email"},"Email"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s5"},l.a.createElement(b.c,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"password",value:t.state.password,onChange:t.handleChange,id:"password",type:"password",className:"validate"}),l.a.createElement("label",{htmlFor:"password"},"Password"))),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor",type:"submit",name:"action"},l.a.createElement("span",null,"Submit")))))},t.state={firstName:"",lastName:"",email:"",password:"",error:null,success:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value)),this.setState({error:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.signup()}},{key:"render",value:function(){return this.state.success?l.a.createElement(h.a,{to:"/signin"}):l.a.createElement("div",null,this.signupForm())}}]),a}(l.a.Component)),N=function(){return"undefined"!==typeof window&&(!!localStorage.getItem("User")&&JSON.parse(localStorage.getItem("User")))},y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).signinForm=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Sign In"),t.showError(),l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s10",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s5"},l.a.createElement(b.d,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"email",value:t.state.email,onChange:t.handleChange,id:"email",type:"email",className:"validate"}),l.a.createElement("label",{htmlFor:"email"},"Email"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s5"},l.a.createElement(b.c,{className:" prefix material-icons black-text"}),l.a.createElement("input",{name:"password",value:t.state.password,onChange:t.handleChange,id:"password",type:"password",className:"validate"}),l.a.createElement("label",{htmlFor:"password"},"Password"))),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor",type:"submit",name:"action"},l.a.createElement("span",null,"Submit")))))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.state={email:"",password:"",error:null,success:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value)),this.setState({error:!1})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),f.a.post("".concat("https://minacre8s.herokuapp.com/api","/login"),this.state,{withCredentials:!0}).then((function(e){var t,n;t=e,n=function(){a.setState({email:"",password:"",error:null,success:!0})},"undefined"!==typeof window&&(localStorage.setItem("User",JSON.stringify(t)),n())})).catch((function(e){a.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return this.state.success?1===N().data.userDoc.role?l.a.createElement(h.a,{to:"/admin/dashboard"}):l.a.createElement(h.a,{to:"/user/dashboard"}):N()?l.a.createElement(h.a,{to:"/"}):l.a.createElement("div",null,this.signinForm())}}]),a}(l.a.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},"Landing Page"))}}]),a}(l.a.Component),w=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).userprofile=function(){return 1===N().data.userDoc.role?l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard"},l.a.createElement(b.a,{className:"material-icons"}))):l.a.createElement("li",null,l.a.createElement(d.b,{to:"/user/dashboard"},l.a.createElement(b.a,{className:"material-icons"})))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("ul",{className:"left hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about"},"About"))),l.a.createElement("ul",{className:"right hide-on-med-and-down"},!N()&&l.a.createElement(n.Fragment,null,l.a.createElement("li",null,l.a.createElement(d.b,{to:"/signin"},"Signin")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/signup"},"Signup"))),N()&&l.a.createElement(n.Fragment,null,this.userprofile(),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/",onClick:function(){return"undefined"!==typeof window&&localStorage.removeItem("User"),f.a.delete("".concat("https://minacre8s.herokuapp.com/api","/logout"),{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){console.log("Logout ERROR",e)}))}},"Signout")))),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/"},l.a.createElement(b.e,{className:"material-icons"})))))))}}]),a}(l.a.Component),O=Object(h.g)(w),j=function(){return l.a.createElement("ul",{id:"slide-out",style:{marginTop:"65px"},className:"sidenav sidenav-fixed leftnav"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/user/dashboard"},"Dashboard")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/user/dashboard/orders"},"Order History")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/user/dashboard/profile"},"User Profile")))},S=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).userContent=function(){var e=N().data.userDoc,a=e.firstName,t=e.lastName,n=e.email,r=e.role,c=e._id;return l.a.createElement("div",{className:"card blue-grey darken-1"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title white-text"},"User Information"),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},a," ",t),l.a.createElement("li",{className:"collection-item"},n),l.a.createElement("li",{className:"collection-item"},"Role: ",1===r?"Admin":"User"),l.a.createElement("li",{className:"collection-item"},"id: ",c))))},t.orderHistory=function(){return l.a.createElement("div",{className:"card blue-grey darken-1"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title white-text"},"Order History"),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},"Date"),l.a.createElement("li",{className:"collection-item"},"Time"),l.a.createElement("li",{className:"collection-item"},"Items Purchased"),l.a.createElement("li",{className:"collection-item"},"Total"))))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(j,null)),l.a.createElement("div",{className:"col s9"},this.userContent(),this.orderHistory()))}}]),a}(l.a.Component),k=function(){return l.a.createElement("ul",{id:"slide-out",style:{marginTop:"65px"},className:"sidenav sidenav-fixed invesible-top"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard"},"Dashboard")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/products"},"Products")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/products/create"},"Add Product")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/products/edit"},"Edit Product")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/categories"},"Categories")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/categories/create"},"Add Category")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/categories/edit"},"Edit Category")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/orders"},"Orders")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/admin/dashboard/users"},"Users")))},x=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).userContent=function(){var e=N().data.userDoc,a=e.firstName,t=e.lastName,n=e.email,r=e.role,c=e._id;return l.a.createElement("div",{className:"card blue-grey darken-1"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title white-text"},"User Information"),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},a," ",t),l.a.createElement("li",{className:"collection-item"},n),l.a.createElement("li",{className:"collection-item"},"Role: ",1===r?"Admin":"User"),l.a.createElement("li",{className:"collection-item"},"id: ",c))))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(k,null)),l.a.createElement("div",{className:"col s9"},this.userContent()))}}]),a}(l.a.Component),F=t(20),P=function(e){var a=e.component,t=Object(F.a)(e,["component"]);return l.a.createElement(h.b,Object.assign({},t,{render:function(e){return N()?l.a.createElement(a,e):l.a.createElement(h.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},U=function(e){var a=e.component,t=Object(F.a)(e,["component"]);return l.a.createElement(h.b,Object.assign({},t,{render:function(e){return N()&&1===N().data.userDoc.role?l.a.createElement(a,e):l.a.createElement(h.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},D=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).categoryForm=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s12",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Add Category"),t.showError(),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement(b.b,{className:" prefix material-icons black-text"}),l.a.createElement("input",{id:"name",type:"text",name:"name",className:"validate",value:t.state.name,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"name"},"Category Name")),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor",type:"submit",name:"action"},l.a.createElement("span",null,"Submit")))))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.state={name:"",error:null,success:!1},t.user=N().data.userDoc,t.token=N().data.Auth,t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){console.log(this.state),this.setState(Object(E.a)({},e.target.name,e.target.value)),this.setState({error:!1})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),f.a.post("".concat("https://minacre8s.herokuapp.com/api","/categories/create"),this.state,{withCredentials:!0}).then((function(e){a.setState({name:"",error:null,success:!0})})).catch((function(e){a.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return this.state.success?l.a.createElement(h.a,{to:"/admin/dashboard/categories"}):(console.log(this.user,this.token),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(k,null)),l.a.createElement("div",{className:"col s9"},this.categoryForm())))}}]),a}(l.a.Component),A=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={categories:[]},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("https://minacre8s.herokuapp.com/api","/categories")).then((function(a){e.setState({categories:a.data.categories})}))}},{key:"showCategories",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Categories"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Category Name"))),l.a.createElement("tbody",null,this.state.categories.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name.charAt(0).toUpperCase()+e.name.slice(1)))})))),l.a.createElement("div",null))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(k,null)),l.a.createElement("div",{className:"col s9"},this.showCategories()))}}]),a}(n.Component),I=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={products:[]},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("https://minacre8s.herokuapp.com/api","/products")).then((function(a){e.setState({products:a.data.products}),console.log(e.state.products)}))}},{key:"showProducts",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"products"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Quantity"))),l.a.createElement("tbody",null,this.state.products.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name.charAt(0).toUpperCase()+e.name.slice(1)),l.a.createElement("td",null,"$",e.offers.regularPrice),l.a.createElement("td",null,e.availability.quantity))})))),l.a.createElement("div",null))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(k,null)),l.a.createElement("div",{className:"col s9"},this.showProducts()))}}]),a}(n.Component),R=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).productForm=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s12",onSubmit:t.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Add Product"),t.showError(),l.a.createElement("div",{className:"file-field input-field "},l.a.createElement("div",{className:"btn-small waves-effect waves-light btnColor"},l.a.createElement("span",null,"Upload Image"),l.a.createElement("input",{type:"file",name:"productImage",value:t.state.productImage,onChange:t.handleChange})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"name",type:"text",name:"name",className:"validate",value:t.state.name,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"name"},"Product Name")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("select",{className:"browser-default",value:t.state.category,onChange:t.handleChange},l.a.createElement("option",{value:"",defaultValue:!0},"Choose a Category"),t.state.categories.map((function(e){return l.a.createElement("option",{key:e._id,name:"category",value:e._id},e.name)})))),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{type:"text",name:"description",className:"validate",value:t.state.description,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"description"},"Description")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"regularPrice",className:"validate",value:t.state.regularPrice,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"regularPrice"},"Regular Price")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"salePrice",className:"validate",value:t.state.salePrice,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"salePrice"},"Sale Price")),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("input",{type:"text",name:"priceValidUntil",className:"validate",value:t.state.priceValidUntil,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"priceValidUntil"},"Sale Price Valid Until")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",onClick:function(){t.setState({instock:!t.state.instock})}}),l.a.createElement("span",null,"Instock"))),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("input",{type:"number",name:"quantity",className:"validate",value:t.state.quantity,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"quantity"},"Quantity")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{type:"text",name:"color",className:"validate",value:t.state.color,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"color"},"Color")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{type:"text",name:"size",className:"validate",value:t.state.size,onChange:t.handleChange}),l.a.createElement("label",{className:"active",htmlFor:"color"},"Size"))),l.a.createElement("button",{className:"btn waves-effect waves-light btnColor",type:"submit",name:"action"},l.a.createElement("span",null,"Submit"))))},t.showError=function(){return l.a.createElement("div",{style:{display:t.state.error?"":"none"}}," ",t.state.error)},t.state={name:"",productImage:"",priceCurrency:"",regularPrice:"",salePrice:"",description:"",instock:!1,quantity:"",color:"",size:"",priceValidUntil:"",categories:[],category:"",error:null,success:!1},t.user=N().data.userDoc,t.token=N().data.Auth,t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("https://minacre8s.herokuapp.com/api","/categories")).then((function(a){e.setState({categories:a.data.categories})}))}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value)),this.setState({error:!1}),console.log(this.state)}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),f.a.post("".concat("https://minacre8s.herokuapp.com/api","/products/create"),this.state,{withCredentials:!0}).then((function(e){a.setState({name:"",error:null,success:!0})})).catch((function(e){a.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return this.state.success?l.a.createElement(h.a,{to:"/admin/dashboard/categories"}):l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3"},l.a.createElement(k,null)),l.a.createElement("div",{className:"col s9"},this.productForm()))}}]),a}(l.a.Component),V=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={currentUser:null},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(O,null),l.a.createElement("div",{className:"container"},l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:C}),l.a.createElement(h.b,{exact:!0,path:"/signin",component:y}),l.a.createElement(h.b,{exact:!0,path:"/signup",component:g}),l.a.createElement(P,{exact:!0,path:"/user/dashboard",component:S}),l.a.createElement(U,{exact:!0,path:"/admin/dashboard",component:x}),l.a.createElement(U,{exact:!0,path:"/admin/dashboard",component:x}),l.a.createElement(U,{exact:!0,path:"/admin/dashboard/categories/create",component:D}),l.a.createElement(U,{exact:!0,path:"/admin/dashboard/categories",component:A}),l.a.createElement(U,{exact:!0,path:"/admin/dashboard/products",component:I}),l.a.createElement(U,{exact:!0,path:"/admin/dashboard/products/create",component:R}))))}}]),a}(l.a.Component);c.a.render(l.a.createElement(V,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a40e8aab.chunk.js.map