// Modules Next JS
import Head from 'next/head';
import { Landing } from './landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing</title>
      </Head>
      <Landing />
    </>
  );
}
