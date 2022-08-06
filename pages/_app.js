import "../styles/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = e => {
    e.preventDefault();
    router.push("/chat");
  };

  return (
    <>
      <Head>
        <title>Pusher - Presence Channels API Demo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component
        handleLoginChange={e => setUsername(e.target.value)}
        username={username}
        userLocation="Umaevo"
        handleLogin={handleLogin}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
