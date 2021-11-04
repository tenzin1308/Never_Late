import Home from "../components/Home";
import {render,cleanup, fireEvent, screen} from '@testing-library/react'
import ReactDom from "react-dom";
import { Dashboard, Login } from "@mui/icons-material";
import {Feature} from "../components/Feature";
import { Footer } from "react-bootstrap/lib/Modal";
import { Navbar } from "react-bootstrap";
import { Signup } from "../components/Signup";
import '@testing-library/jest-dom'
import Profile from "../components/Profile"
import Calendar from "../components/Calendar";


afterEach(cleanup);




it("Footer renders without crashing", ()=>{
  const div= document.createElement("div");
  ReactDom.render(<Footer></Footer>, div)
})

it("Footer renders without crashing", ()=>{
  const div= document.createElement("div");
  ReactDom.render(<Signup></Signup>, div)
})


it("Profile renders without crashing", ()=>{
  const div= document.createElement("div");
  ReactDom.render(<Profile></Profile>, div)
})

it("Calendar renders without crashing", ()=>{
  const div= document.createElement("div");
  ReactDom.render(<Calendar></Calendar>, div)
})

it("Feature renders without crashing", ()=>{
  const div= document.createElement("div");
  ReactDom.render(<Feature></Feature>, div)
})

it("Feature renders without crashing", ()=>{
  const div= document.createElement("div");
  ReactDom.render(<Navbar></Navbar>, div)
})


