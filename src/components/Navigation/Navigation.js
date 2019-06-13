// import React from "react";
// import { Component } from "react";
// import "./Navigation.css";
// import Menu from "../Menu/Menu";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";

// class Navigation extends Component {
//   componentDidMount() {}

//   showMenu(event) {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <header className="navBar">
//         <nav className="navbar navBar_navigation">
//           <div className="navBar_logo">
//             <NavLink to="/" className="navbar-brand">
//               Grozeries
//             </NavLink>
//           </div>
//           <div className="spacer" />
//           <div className="navBar_navigation-items">
//           </div>
//         </nav>
//         <Menu className="menu">
//         </Menu>
//       </header>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     currentUser: state.currentUser
//   };
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(Navigation);
