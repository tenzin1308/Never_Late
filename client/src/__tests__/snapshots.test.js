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
import renderer from "react-test-renderer";


afterEach(cleanup);

test("Profile matches snapshot", ()=>{
    const tree = renderer.create(<Profile></Profile>).toJSON();
    expect(tree).toMatchSnapshot();
})

