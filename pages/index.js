import html2canvas from "html2canvas";
import { useState, useRef } from "react";
import { useScreenshot } from 'use-react-screenshot'
import Snipper from "../components/Sniper";

export default function Home() {
 
  return (
    <>
       {/* <Frame /> */}

       <Snipper />
    </>
  )
}
