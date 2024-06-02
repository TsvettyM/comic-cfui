import HomepageView from "@/features/homepage/components/HomepageView";
import Head from "next/head";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>XKCD | Homepage</title>
      </Head>

      <HomepageView />
    </>
  );
};

export default Homepage;
