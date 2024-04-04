import React from "react";
import { Layout } from "@components/common/Layout";
import LandingHeader from "@components/home/LandingHeader/LandingHeader";
import LandingSection from "@components/home/LandingSection/LandingSection";

export default function Home() {
  return (
    <>
      <Layout>
        <LandingHeader />
        <LandingSection />
      </Layout>
    </>
  );
}
