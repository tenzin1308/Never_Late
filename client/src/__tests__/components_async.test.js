import Home from "../components/Home";
import {render, fireEvent, cleanup} from '@testing-library/react'
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


//dummy testing- checking Jest library import
// function sum(){
//     return (1+2);
// } 

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);

// });





// //Unit-testing: checking if component is loaded and rendered succsesfully
// test('Home loads items eventually', async () => {
//   render(<Home />)
// })

// test('Dashboard loads items eventually', async () => {
//   render(<Dashboard />)
// })

// test('Feature loads items eventually', async () => {
//   render(<Feature />)
// })

// test('Footer loads items eventually', async () => {
//   render(<Footer />)
// })

// test('Login loads items eventually', async () => {
//   render(<Login />)
// })

// test('Navbar loads items eventually', async () => {
//   render(<Navbar />)
// })

// test('Profile loads items eventually', async () => {
//   render(<Profile />)
// })

// test('Signup loads items eventually', async () => {
//   render(<Signup />)
// })

// test('Calendar loads items eventually', async () => {
//   render(<Calendar />)
// })
