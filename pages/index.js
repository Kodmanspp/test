import Head from "next/head";
import React from "react";
import SimpleSlider from "../components/Slider/slider";
import History from "../components/history/history.jsx";
import Navbar from "../components/Header/NavBar";
import Header from "../components/Header/NavBar";
import AboutUs from "../components/aboutus/aboutus";
import Project from "../components/Project/project";
import Footer from "../components/Footer/Footer";
import Plan from "../components/plan/plan";
import Hero from "../components/Header/NavBar";


export default function Home() {
  return (
    <>
        <Head/>
        <Navbar/>
        <History/>
        <AboutUs/>
        <Project/>
        <SimpleSlider/>
        <Plan/>
        <Footer/>
    </>
  );
}
