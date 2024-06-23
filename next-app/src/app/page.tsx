"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Nav from "../component/nav";
import Builder from "../component/builder";

export default function Home() {
  let [x, setX] = useState(false);



  return (
    <main className={styles.main}>
      {/* <nav className={styles.nav}>tiico</nav> */}
      <Nav />
      <Builder />
      {/*       
      <div className={styles.list}>
        <h1 className={styles.title}>A tierlist Title</h1>
        <div className={styles.container}>
          <div className={styles.row}>
            <header className={styles.header}>
              <div className={styles.titleWrapper}>
                <div className={styles.highlight}></div>
                <h1 className={styles.rowTitle}>SSS Tier</h1>
              </div>
              <div className={styles.tools}><button>...</button></div>
            </header>
            <div className={styles.cardContainer}>

            </div>
          </div>
          <div className={styles.row} data-collapse="true">
            <header className={styles.header}>
              <div className={styles.titleWrapper}>
                <div className={styles.highlight}></div>
                <h1 className={styles.rowTitle}>SS Tier</h1>
              </div>
              <div className={styles.tools}><button>...</button></div>
            </header>
            <div className={styles.cardContainer}>

            </div>
          </div>
          <div className={styles.row} data-collapse="true">
            <header className={styles.header}>
              <div className={styles.titleWrapper}>
                <div className={styles.highlight}></div>
                <h1 className={styles.rowTitle}>S Tier</h1>
              </div>
              <div className={styles.tools}><button>...</button></div>
            </header>
            <div className={styles.cardContainer}>

            </div>
          </div>
          <div className={styles.row} data-collapse="true">
            <header className={styles.header}>
              <div className={styles.titleWrapper}>
                <div className={styles.highlight}></div>
                <h1 className={styles.rowTitle}>A Tier</h1>
              </div>
              <div className={styles.tools}><button>...</button></div>
            </header>
            <div className={styles.cardContainer}>

            </div>
          </div>
          <div className={styles.row} data-collapse={x.toString()}>
            <header className={styles.header} onClick={() => setX(prev => !prev)}>
              <div className={styles.titleWrapper}>
                <div className={styles.highlight}></div>
                <h1 className={styles.rowTitle}>B Tier</h1>
              </div>
              <div className={styles.tools}><button>...</button></div>
            </header>
            <div className={styles.cardContainer} data-collapse={x.toString()}>
              <div className={styles.cardWrapper}>
                <div className={styles.card}>
                  <img className={styles.cardImg} src="https://cdn.donmai.us/original/b0/0a/b00ab18779ba90cc151232dd18f89ae7.jpg" alt="" />
                </div>
                <div className={styles.cardInfo}>
                  <span>Vinland Saga</span>
                  <h1>Askaland</h1>
                </div>
              </div>
              <div className={styles.cardWrapper}>
                <div className={styles.card}>
                  <img className={styles.cardImg} src="https://cdn.donmai.us/original/7c/bf/7cbf92cf9c6dc961ed5a5fb07ddf273d.jpg" alt="" />
                </div>
                <div className={styles.cardInfo}>
                  <span>Laufey</span>
                  <h1>Promise</h1>
                </div>
              </div>
              <div className={styles.cardWrapper}>
                <div className={styles.card}></div>
                <div className={styles.cardInfo}>
                  <span>New Jeans</span>
                  <h1>New Jeans</h1>
                </div>
              </div>
              <div className={styles.cardWrapper}>
                <div className={styles.card}></div>
                <div className={styles.cardInfo}>
                  <span>New Jeans</span>
                  <h1>How Sweet</h1>
                </div>
              </div>
              <div className={styles.cardWrapper}>
                <div className={styles.card}></div>
                <div className={styles.cardInfo}>
                  <span>New Jeans</span>
                  <h1>ETA</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}
    </main>
  );
}
