import React from 'react';
import Seo from '../components/Seo';
import MainNav from '../components/navs/headerElements/MainNav';
import MainFooter from '../components/navs/footerElements/MainFooter';
import { useLayout } from '../hooks/useLayout';
import { mapSeoToProps } from '../lib/mapToProps';

export default function MyLayout({ children, location, type, data, heroImage }) {
  const { mainNav, footer } = useLayout();
  return (
    <>
      <Seo {...mapSeoToProps(data, type)} heroImage={heroImage} />
      {mainNav && <MainNav location={location} />}
      {children}
      {footer && <MainFooter />}
    </>
  );
}
