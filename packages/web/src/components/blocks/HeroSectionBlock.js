import React from 'react';
import Box from '@mui/material/Box';
import SectionTextBlock from '../portableText/serializer/FullIndentSerializer';
import HeroSectionHeader from '../sections/HeroSectionHeader';
import HeroSectionFooter from '../sections/HeroSectionFooter';

function SectionBlock({
  hasSectionHeading,
  hasSectionSubheading,
  hasSectionSubtitle,
  hasSectionFooter,
  heading,
  subheading,
  subtitle,
  sectionText,
  footer,
  headerAlignment,
  textAlignment,
  footerAlignment,
  headingColor,
  subheadingColor,
  subtitleColor,
  footerColor,
}) {
  return (
    <>
      <HeroSectionHeader
        heading={heading}
        subheading={subheading}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionHeading={hasSectionHeading}
        hasSectionSubheading={hasSectionSubheading}
        hasSectionSubtitle={hasSectionSubtitle}
        headingColor={headingColor}
        subheadingColor={subheadingColor}
        subtitleColor={subtitleColor}
      />
      <Box sx={{ textAlign: textAlignment }}>
        <SectionTextBlock blocks={sectionText} />
      </Box>
      <HeroSectionFooter
        footer={footer}
        footerColor={footerColor}
        align={footerAlignment}
        hasSectionFooter={hasSectionFooter}
      />
    </>
  );
}
export default SectionBlock;
