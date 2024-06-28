"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Nav from "../component/nav";
// import Builder from "../component/builder";
import dynamic from 'next/dynamic'

// don't display until its hydrated.
const Builder = dynamic(() => import('../component/builder'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Builder />
    </main>
  );
}
