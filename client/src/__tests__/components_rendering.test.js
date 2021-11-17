import React from "react";
import ReactDOM from "react-dom";

// import '@testing-library/jest-dom'

// Component to test
import Calendar from "../components/Calendar";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile"
import { Signup } from "../components/Signup";
import Welcome from "../components/Welcome";

import ChangePassword from "../components/authentication/ChangePassword"
import ChangePasswordConfirmation from "../components/authentication/ChangePasswordConfirmation"
import ForgotPassword from "../components/authentication/ForgotPassword"
import ForgotPasswordVerification from "../components/authentication/ForgotPasswordVerification"

// afterEach(cleanup);
// import {render,cleanup, fireEvent, screen} from '@testing-library/react'




// it("Dashboard renders without crashing", ()=>{
//   const div = document.createElement("div");
//   ReactDOM.render(<Dashboard></Dashboard>, div)
// })

it("Login renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Login></Login>, div)
})

it("Home renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Home></Home>, div)
})

it("Welcome renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Welcome></Welcome>, div)
})

it("ChangePassword renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<ChangePassword></ChangePassword>, div)
})

it("ChangePasswordConfirmation renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<ChangePasswordConfirmation></ChangePasswordConfirmation>, div)
})

it("ForgotPassword renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<ForgotPassword></ForgotPassword>, div)
})

it("ForgotPasswordVerification renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<ForgotPasswordVerification></ForgotPasswordVerification>, div)
})

it("Footer renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Footer></Footer>, div)
})

// it("Signup renders without crashing", ()=>{
//   const div = document.createElement("div");
//   ReactDOM.render(<Signup></Signup>, div)
// })


// it("Profile renders without crashing", ()=>{
//   const div = document.createElement("div");
//   ReactDOM.render(<Profile></Profile>, div)
// })

// it("Calendar renders without crashing", ()=>{
//   const div = document.createElement("div");
//   ReactDOM.render(<Calendar></Calendar>, div)
// })

it("Feature renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Feature></Feature>, div)
})

// it("Navbar renders without crashing", ()=>{
//   const div = document.createElement("div");
//   ReactDOM.render(<Navbar></Navbar>, div)
// })


