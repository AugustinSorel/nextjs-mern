import Head from "next/head";
import React from "react";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>contact</title>
        <meta name="description" content="see a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ContactPage
    </>
  );
};

export default ContactPage;
