import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";
import BoardForm from "../../components/BoardForm";



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sudoku Solver</title>
        <meta name="sudoku solver" content="game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <h1 className={styles.title}>
            Sudoku Solver
          </h1>
          <BoardForm/>
        </div>
      </div>
        {/* <button className={'bg-red-400 border border-black '}>Get new Puzzle</button> */}
    </>
  );
};

export default Home;

