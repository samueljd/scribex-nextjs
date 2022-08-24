import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from "react";

import Scribex from "../src/components/Scribex";
import { ScribexContextProvider } from "../src/hooks/ScribexContext";

export default function Home() {
  return (
    <div className="App">
    < ScribexContextProvider>
      <Scribex />
    </ ScribexContextProvider>
  </div>
  )
}
