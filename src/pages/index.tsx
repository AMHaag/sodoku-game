import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sodoku Game</title>
        <meta name="sodoku game" content="game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <h1 className={styles.title}>
            Create <span className={styles.titlePink}>T3</span> App
          </h1>

          <h3 className={styles.subtitle}>This stack uses:</h3>
          <div className={styles.cardGrid}>
            <TechnologyCard
              name="NextJS"
              description="The React framework for production"
              documentation="https://nextjs.org/"
            />
            <TechnologyCard
              name="TypeScript"
              description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
              documentation="https://www.typescriptlang.org/"
            />
            <TechnologyCard
              name="TailwindCSS"
              description="Rapidly build modern websites without ever leaving your HTML"
              documentation="https://tailwindcss.com/"
            />
            <TechnologyCard
              name="tRPC"
              description="End-to-end typesafe APIs made easy"
              documentation="https://trpc.io/"
            />
            <TechnologyCard
              name="Next-Auth"
              description="Authentication for Next.js"
              documentation="https://next-auth.js.org/"
            />
            <TechnologyCard
              name="Prisma"
              description="Build data-driven JavaScript & TypeScript apps in less time"
              documentation="https://www.prisma.io/docs/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <a
        className={styles.cardDocumentation}
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};
