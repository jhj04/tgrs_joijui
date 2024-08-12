import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
// import Skill from "../components/Skill";
// import Site from "../components/Site";
import Function from "../components/Function";
import Site from "../components/Site";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Function />
            <Site />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;