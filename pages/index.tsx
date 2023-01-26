import Head from "next/head";
import * as React from "react";

import Exercice1 from "containers/Exercice/Exercice1";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>

      <main>
        <Exercice1 />
      </main>
    </div>
  );
}
