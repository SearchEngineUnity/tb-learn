import React from 'react';
import { Helmet } from 'react-helmet';
import Seo from '../components/Seo';
import MainNav from '../components/navs/headerElements/TbMainNav';
import MainFooter from '../components/navs/footerElements/TbFooter';
import { useLayout } from '../hooks/useLayout';
import { mapSeoToProps } from '../lib/mapToProps';

export default function MyLayout({ children, location, type, data, heroImage }) {
  const { mainNav, footer } = useLayout();
  return (
    <>
      <Seo {...mapSeoToProps(data, type)} heroImage={heroImage} />
      <Helmet>
        <script src="https://kit.fontawesome.com/cab226a9e9.js" crossOrigin="anonymous" async />
        <script>
          {`(function(d) {
      var config = {
        kitId: 'vjz1tay',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);`}
        </script>
        <link rel="dns-prefetch" href="//use.fontawesome.com" />
      </Helmet>
      <MainNav />
      {children}
      <MainFooter />
    </>
  );
}
