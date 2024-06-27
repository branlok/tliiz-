"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Nav from "../component/nav";
import Builder from "../component/builder";

export default function Home() {
  let [x, setX] = useState(false);



  return (
    <main className={styles.main}>
      <Nav />
      <Builder />
    </main>
  );
}
