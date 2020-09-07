(this["webpackJsonpe-commerce-app"]=this["webpackJsonpe-commerce-app"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c);a(93),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(36),s=a(7),u=a(8),i=a(10),m=a(9),p=a(6),h=a(13),f=a(11);function d(e){var t=new Headers;return t.append("x-access-token",e),function(e,a){fetch("http://localhost:4000/auth/info",{method:"GET",redirect:"follow",headers:t}).then((function(e){return e.json()})).then((function(t){e(function(e){return{type:"GET_INFO",payload:{arg:e}}}(t))}))}}var g=a(61),E=a(46),b=a(38),v=a(32),j=a(27),y=a(82),O=a(63),k=a(110),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).captureText=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();fetch("http://localhost:4000/products/search?searchTerm=".concat(e.state.searchTerm),{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)}))},e.state={searchTerm:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,{className:localStorage.token?"navbarSearchbarInputGroupLoggedIn":"navbarSearchbarInputGroupLoggedOut"},r.a.createElement(y.a.Control,{type:"text",placeholder:"Search",name:"searchTerm",onChange:this.captureText}),r.a.createElement(O.a.Append,null,r.a.createElement(O.a.Text,null,r.a.createElement(k.a,{onClick:this.onSubmit}))))}}]),a}(r.a.Component),U=a(111),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).cartCounter=function(){return e.props.currentUser.shoppingCart.length>9?"9+":e.props.currentUser.shoppingCart.length},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,void 0===this.props.currentUser.shoppingCart||0===this.props.currentUser.shoppingCart.length?r.a.createElement(U.a,{size:40}):r.a.createElement("div",null,r.a.createElement("div",{className:"shoppingCartIconCounter"},this.cartCounter()),r.a.createElement(U.a,{className:"shoppingCartIcon",size:40})))}}]),a}(r.a.Component),P=Object(f.compose)(p.f,Object(h.b)((function(e){return{currentUser:e.currentUser}}),{}))(N),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){localStorage.token&&this.props.getUserInfo(localStorage.token)}},{key:"renderUploadProductLink",value:function(){return localStorage.token?r.a.createElement(E.a.Link,{className:"navbarUploadLink",href:"/upload-product"},"Upload Product to MarketPlace"):r.a.createElement("div",null)}},{key:"renderLoginLink",value:function(){if(!localStorage.token)return r.a.createElement(E.a.Link,{className:"navbarLink",href:"/login"},"Log In")}},{key:"renderAccountDropdownMenu",value:function(){if(localStorage.token)return r.a.createElement(v.a,{className:"navbarDropdown",title:"Account"},r.a.createElement(v.a.Item,{href:"/my-profile"},"View Profile"),r.a.createElement(v.a.Item,{href:"/edit-my-profile"},"Edit Profile"),r.a.createElement(v.a.Item,{href:"/settings"},"Settings"),r.a.createElement(v.a.Item,{href:"/my-products"},"My Products"),r.a.createElement(v.a.Divider,null),r.a.createElement(v.a.Item,{href:"/signout"},"Sign Out ",this.props.currentUser.username))}},{key:"render",value:function(){return r.a.createElement("div",{className:"navbarSpacer"},r.a.createElement(g.a,{className:"navbar",bg:"dark",variant:"dark",fixed:"top"},r.a.createElement(b.a,{fluid:!0},r.a.createElement("h1",{className:"navbarH1"},"Herb Bazaar"),r.a.createElement(C,null),this.renderUploadProductLink(),r.a.createElement(E.a.Link,{className:"navbarLink",href:"/"},"Home"),r.a.createElement(E.a.Link,{className:"navbarLink",href:localStorage.token?"/shoppingcart":"/signup"},localStorage.token?r.a.createElement(P,null):"Sign Up"),this.renderLoginLink(),this.renderAccountDropdownMenu())),console.log(this.props.currentUser.username))}}]),a}(r.a.Component),I={getUserInfo:d},w=Object(f.compose)(p.f,Object(h.b)((function(e){return{currentUser:e.currentUser}}),I))(S),T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addProductToCart=function(t){t.preventDefault();var a=new Headers;a.append("Content-Type","application/json");var n=JSON.stringify({userID:e.props.currentUser._id,productID:e.props.product._id});fetch("http://localhost:4000/users/add-to-cart",{method:"PUT",headers:a,body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)})),e.props.getUserInfo(localStorage.token)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"product"},r.a.createElement("img",{className:"productImage",src:this.props.product.image,alt:"herb"}),r.a.createElement("h1",null,this.props.product.name),r.a.createElement("h3",null,this.props.product.description),r.a.createElement("h3",null,this.props.product.price),r.a.createElement("button",{onClick:this.addProductToCart},"add to cart"))}}]),a}(r.a.Component),x={getUserInfo:d},D=Object(f.compose)(p.f,Object(h.b)((function(e){return{currentUser:e.currentUser}}),x))(T),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={products:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"getProducts",value:function(){var e=this;fetch("http://localhost:4000/products/",{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(t){e.setState({products:t})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"marketplace"},this.state.products.map((function(e){return r.a.createElement(D,{product:e,key:e._id})})))}}]),a}(r.a.Component),H=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(L,null))}}]),a}(r.a.Component),M=a(21),B=a(59),F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).captureText=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=new Headers;a.append("Content-Type","application/json");var n=JSON.stringify({username:e.state.username,password:e.state.password});fetch("http://localhost:4000/auth/login",{method:"POST",headers:a,body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(t){t.token&&(localStorage.token=t.token),e.props.getUserInfo(localStorage.token),e.props.history.push("/")})).catch((function(e){return console.log("error",e)}))},e.returnHome=function(){e.props.history.push("/")},e.state={password:"",username:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"login"},r.a.createElement(B.a,{className:"loginJumbotron"},r.a.createElement("h1",{className:"loginH1"},"Log In to Your Account!"),r.a.createElement("div",{className:"loginForm"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",placeholder:"username",onChange:this.captureText}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{className:"loginPasswordInput",type:"password",name:"password",placeholder:"password",onChange:this.captureText}),r.a.createElement("br",null),r.a.createElement(M.a,{className:"loginButton",variant:"primary",onClick:this.onSubmit},"Log in"),r.a.createElement(M.a,{className:"loginButton",variant:"primary",onClick:this.returnHome},"Cancel")))))}}]),a}(r.a.Component),A={getUserInfo:d},G=Object(f.compose)(p.f,Object(h.b)((function(e){return{currentUser:e.currentUser}}),A))(F),R=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).captureText=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=new Headers;a.append("Content-Type","application/json");var n=JSON.stringify({name:e.state.name,email:e.state.email,username:e.state.username,password:e.state.password});fetch("http://localhost:4000/auth/signup",{method:"POST",headers:a,body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(t){t.token&&(localStorage.token=t.token),e.props.history.push("/homepage")})).catch((function(e){return console.log("error",e)}))},e.state={name:"",email:"",password:"",username:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B.a,null,r.a.createElement("div",{className:"signup"},r.a.createElement("h1",{className:"signupH1"},"Create an account!"),r.a.createElement("div",{className:"signupForm"},r.a.createElement("h1",null,"Signup"),r.a.createElement("form",null,r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",placeholder:"name",onChange:this.captureText}),r.a.createElement("br",null),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",placeholder:"email",onChange:this.captureText}),r.a.createElement("br",null),r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",placeholder:"username",onChange:this.captureText}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:this.captureText}),r.a.createElement("br",null)),r.a.createElement(M.a,{variant:"primary",onClick:this.onSubmit},"Sign up"),r.a.createElement(l.b,{to:"/"},r.a.createElement(M.a,{variant:"primary"},"Cancel"))))))}}]),a}(r.a.Component),_=Object(f.compose)(p.f,Object(h.b)((function(e){return{}}),{}))(R),J=a(83),W=a(43),z=a(29),q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"profile",onClick:this.props.toggle},"profile")}}]),a}(r.a.Component),Y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).toggleProfile=function(){fetch("http://localhost:4000/users/find/?userID=".concat(e.props.item.sellerID),{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(t){e.setState({seller:t,showProfile:!0}),console.log(t)})).catch((function(e){return console.log("error",e)})),e.renderProfile()},e.renderProfile=function(){if(e.state.showProfile)return r.a.createElement(q,{toggle:e.toggleProfileState})},e.toggleProfileState=function(){e.setState({showProfile:!e.state.showProfile})},e.state={seller:{},showProfile:!1},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{className:"item"},r.a.createElement(W.a,null,r.a.createElement(z.a,{className:"itemCol1",lg:3},r.a.createElement("img",{className:"itemIMG",src:this.props.item.image,alt:"item"})),r.a.createElement(z.a,{className:"itemCol2",lg:9},this.props.item.name,r.a.createElement("br",null),this.props.item.description,r.a.createElement("br",null),this.props.item.price,r.a.createElement("br",null),r.a.createElement("p",null,"seller: ",r.a.createElement("div",{className:"itemSellerUsername",onClick:this.toggleProfile},this.props.item.sellerUsername)),this.renderProfile())),r.a.createElement(W.a,null,"hello"),console.log(this.props.item))}}]),a}(r.a.Component),Z=a(78);a(33),a(47),a(69),a(34);Object(Z.a)("pk_test_51HNIC9ACk8PZPqBLzfYDr8FNAKY4Bh8yEgFHI0ZmUmhLBdFau4BWxXH0cDGqbBQivMZ3YqzBWGwrlia9sv1HRXgo008PF6WE2I");var K=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={items:[],checkout:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.getItemsInfo()}),1e3)}},{key:"getItemsInfo",value:function(){var e=this;this.props.currentUser.shoppingCart.map((function(t){fetch("http://localhost:4000/products/find?productID=".concat(t),{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(t){e.setState({items:[].concat(Object(J.a)(e.state.items),[t])})})).catch((function(e){return console.log("error",e)}))}))}},{key:"renderCheckoutComponent",value:function(){}},{key:"render",value:function(){return r.a.createElement(b.a,{className:"shoppingCart"},r.a.createElement(W.a,null,r.a.createElement(z.a,{className:"shoppingCartCol1",lg:8},r.a.createElement(g.a,{className:"shoppingCartNavbar"},r.a.createElement("h1",{className:"shoppingCartH1"},"My Cart")),void 0!==this.props.currentUser.shoppingCart&&this.props.currentUser.shoppingCart.length===this.state.items.length?this.state.items.map((function(e){return r.a.createElement(Y,{key:e._id,item:e})})):null),r.a.createElement(z.a,{className:"shoppingCartCol2",lg:4})))}}]),a}(r.a.Component),V=Object(f.compose)(p.f,Object(h.b)((function(e){return{currentUser:e.currentUser}}),{}))(K),X=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){delete localStorage.token,this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(r.a.Component),Q=Object(p.f)(X),$=a(84),ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).captureText=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.captureFile=function(t){e.setState({image:t.target.files[0]})},e.onSubmit=function(t){t.preventDefault();var a=new FormData;a.append("name",e.state.name),a.append("price",e.state.price),a.append("description",e.state.description),a.append("image",e.state.image),a.append("sellerID",e.props.currentUser._id),a.append("sellerUsername",e.props.currentUser.username),fetch("http://localhost:4000/users/upload-product",{method:"POST",body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(t){e.setState({successfulUpload:!0,name:"",price:"",description:""}),e.myRef.current.value=null})).catch((function(e){return console.log("error",e)}))},e.returnHome=function(){e.props.history.push("/")},e.renderSuccessfulUpload=function(){if(e.state.successfulUpload)return r.a.createElement($.a,{className:"successfulUpload",variant:"success",onClose:function(){return e.setState({successfulUpload:!1})},dismissible:!0},r.a.createElement("p",{className:"uploadProductAlertMessage"},"Upload Complete!"))},e.state={name:"",image:null,price:"",description:"",successfulUpload:!1},e.myRef=r.a.createRef(),e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"uploadProduct"},r.a.createElement(B.a,{className:"uploadProductJumbotron"},r.a.createElement("h1",{className:"uploadProductH1"},"Upload a product!"),r.a.createElement("form",{className:"uploadProductForm"},r.a.createElement("label",null,"Name:"),r.a.createElement("br",null),r.a.createElement("input",{className:"uploadProductInput",type:"text",name:"name",placeholder:"name",value:this.state.name,onChange:this.captureText}),r.a.createElement("br",null),this.renderSuccessfulUpload(),r.a.createElement("label",null,"Price:"),r.a.createElement("br",null),r.a.createElement("input",{className:"uploadProductInput",type:"text",name:"price",placeholder:"price",value:this.state.price,onChange:this.captureText}),r.a.createElement("br",null),r.a.createElement("label",null,"Description:"),r.a.createElement("br",null),r.a.createElement("input",{className:"uploadProductInput",type:"text",name:"description",placeholder:"description",value:this.state.description,onChange:this.captureText}),r.a.createElement("br",null),r.a.createElement("label",null,"Image:"),r.a.createElement("br",null),r.a.createElement("input",{className:"uploadProductInput",type:"file",name:"image",ref:this.myRef,onChange:this.captureFile}),r.a.createElement("br",null),r.a.createElement(M.a,{className:"uploadProductButton",variant:"primary",onClick:this.onSubmit},"Upload"),r.a.createElement(M.a,{className:"uploadProductButton",variant:"primary",onClick:this.returnHome},"Cancel"))))}}]),a}(r.a.Component),te=Object(f.compose)(p.f,Object(h.b)((function(e){return{currentUser:e.currentUser}}),{}))(ee),ae=a(15),ne=a(25),re=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(ae.a,{className:"myProfile"},r.a.createElement(ae.a.Img,{className:"myProfileImg",variant:"top",src:this.props.currentUser.profileImg}),r.a.createElement(ae.a.Body,null,r.a.createElement(ae.a.Title,null,this.props.currentUser.username),r.a.createElement(ae.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")),r.a.createElement(ne.a,{className:"list-group-flush"},r.a.createElement(ne.a.Item,null,"Cras justo odio"),r.a.createElement(ne.a.Item,null,"Dapibus ac facilisis in"),r.a.createElement(ne.a.Item,null,"Vestibulum at eros")),r.a.createElement(ae.a.Body,null,r.a.createElement(ae.a.Link,{href:"#"},"Card Link"),r.a.createElement(ae.a.Link,{href:"#"},"Another Link")),console.log(this.props.currentUser))}}]),a}(r.a.Component),ce={getUserInfo:d},oe=Object(f.compose)(p.f,Object(h.b)((function(e){return{currentUser:e.currentUser}}),ce))(re),le=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).changeProfilePicture=function(){e.setState({changePicture:!e.state.changePicture})},e.onSubmit=function(t){t.preventDefault();var a=new FormData;a.append("profileImg",e.state.image);var n={method:"PUT",body:a,redirect:"follow"};fetch("http://localhost:4000/users/edit?userID=".concat(e.props.currentUser._id),n).then((function(e){return e.json()})).then((function(t){e.setState({successfulUpload:!0,name:"",price:"",description:"",sellerID:""}),e.props.getUserInfo(localStorage.token),e.myRef.current.value=null})).catch((function(e){return console.log("error",e)}))},e.renderSelectPicture=function(){if(e.state.changePicture)return r.a.createElement("div",null,r.a.createElement("input",{type:"file",name:"image",ref:e.myRef,onChange:e.captureFile}),r.a.createElement("br",null),r.a.createElement(M.a,{onClick:e.onSubmit},"Submit"))},e.captureFile=function(t){e.setState({image:t.target.files[0]})},e.state={name:"",profileImg:null,price:"",description:"",sellerID:"",successfulUpload:!1,inputKey:"",changePicture:!1},e.myRef=r.a.createRef(),e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(ae.a,{className:"editMyProfile"},r.a.createElement("div",{className:"editMyProfileDivContainer"},r.a.createElement(ae.a.Img,{className:"editMyProfileImg",variant:"top",src:this.props.currentUser.profileImg}),r.a.createElement("div",{className:"editMyProfileDivContainer1"},r.a.createElement(M.a,{className:"editMyProfileImgButton",onClick:this.changeProfilePicture},"Change Profile Picture"),this.renderSelectPicture())),r.a.createElement(ae.a.Body,null,r.a.createElement(ae.a.Title,null,this.props.currentUser.username),r.a.createElement(ae.a.Text,null,"blurb")),r.a.createElement(ne.a,{className:"list-group-flush"},r.a.createElement(ne.a.Item,null,"Location: ",null),r.a.createElement(ne.a.Item,null,"Member Since: ",null),r.a.createElement(ne.a.Item,null,"Name: ",null)),r.a.createElement(ae.a.Body,null,r.a.createElement(ae.a.Link,{href:"#"},"Reviews"),r.a.createElement(ae.a.Link,{href:"#"},"Another Link")),console.log(this.props.currentUser))}}]),a}(r.a.Component),se={getUserInfo:d},ue=Object(f.compose)(p.f,Object(h.b)((function(e){return{currentUser:e.currentUser}}),se))(le),ie=(a(102),a(103),function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:H}),r.a.createElement(p.a,{exact:!0,path:"/login",component:G}),r.a.createElement(p.a,{exact:!0,path:"/signup",component:_}),r.a.createElement(p.a,{exact:!0,path:"/shoppingcart",component:V}),r.a.createElement(p.a,{exact:!0,path:"/signout",component:Q}),r.a.createElement(p.a,{exact:!0,path:"/upload-product",component:te}),r.a.createElement(p.a,{exact:!0,path:"/my-profile",component:oe}),r.a.createElement(p.a,{exact:!0,path:"/edit-my-profile",component:ue})))}),me={currentUser:{}};var pe=a(79),he=a(80),fe=Object(f.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_INFO":return Object.assign({},e,{currentUser:t.payload.arg});default:return e}}),Object(pe.composeWithDevTools)(Object(f.applyMiddleware)(he.a)));o.a.render(r.a.createElement(h.a,{store:fe},r.a.createElement(l.a,null,r.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(104)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.224fc062.chunk.js.map