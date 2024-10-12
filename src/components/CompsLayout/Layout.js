import React from "react";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
            <Head/>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
export default Layout;  