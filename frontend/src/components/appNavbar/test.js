// <div className="navbar">
//   {this.renderAddProductLi()}
//   <ul>
//     <li className="navbarLi"><Link to="/">Home</Link></li>
//     <li className="navbarLi"><Link to={(localStorage.token) ? "/shoppingcart" : "/login"}>
//       {(localStorage.token) ? "Shopping Cart" : "Login"}
//     </Link></li>
//     <li className="navbarLi"><Link to={(localStorage.token) ? "/signout" : "/signup"}>
//     {(localStorage.token) ? "Sign Out" : "Sign Up"}
//   </Link></li>
//   </ul>
// </div>


// <Navbar bg="dark" variant="dark" fixed="top">
//   <Nav className="mr-auto">
//    <Nav.Link href="/">Home</Nav.Link>
//    <Nav.Link href={(localStorage.token) ? "/shoppingcart" : "/login"}>{(localStorage.token) ? "Shopping Cart" : "Login"}</Nav.Link>
//    <Nav.Link href={(localStorage.token) ? "/signout" : "/signup"}>{(localStorage.token) ? "Sign Out" : "Sign Up"}</Nav.Link>
//   </Nav>
//   {this.renderAddProductLi()}
//   {this.renderLoggedInStatus()}
// </Navbar>
