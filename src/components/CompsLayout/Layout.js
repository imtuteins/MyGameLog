import React from "react";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import LoginModal from "../Login_Register/AuthModal";

const Layout=()=>{
    return(
        <>
            <Head/>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
            <LoginModal/>
        </>
    )
}
export default Layout;  