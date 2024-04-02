import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Link href="/input">
        <h1>input component</h1>
      </Link>
      <Link href="/folder">
        <h1>folder</h1>
      </Link>
      <Link href="/shared">
        <h1>shared</h1>
      </Link>
      <Link href="/signin">
        <h1>signin</h1>
      </Link>
    </>
  );
}
