import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

import Portfolio from "../components/Portfolio";
import WhatDo from "../components/WhatDo";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhatDo></WhatDo>
      <About></About>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <Contact></Contact>
    </Layout>
  );
}
