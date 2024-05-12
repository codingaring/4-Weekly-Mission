import React from "react";
import { Layout } from "@components/common/Layout";
import LandingHeader from "@components/home/LandingHeader/LandingHeader";
import LandingSection from "@components/home/LandingSection/LandingSection";
import { removeToken } from "@util/handleToken";

export default function Home() {
  removeToken();
  return (
    <>
      <Layout>
        <LandingHeader />
        <LandingSection />
      </Layout>
    </>
  );
}
