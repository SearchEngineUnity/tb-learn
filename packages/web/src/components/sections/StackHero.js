import React from 'react';
import Grid from '@mui/material/Grid';
import ImgBlock from '../blocks/FluidImgBlock';
import Video from '../portableText/insertable/Video';
import SectionBlock from '../blocks/HeroSectionBlock';
import ConditionalButton from '../buttons/ConditionalButton';
import GridFlex from '../blocks/BlockGridFlex';
import BlockFormNetlify from '../blocks/BlockFormNetlify';
import TestimonialGrid from '../blocks/TestimonialGrid';
import ClickableImage from '../portableText/insertable/ClickableImage';
import SmartGridBlock from '../blocks/SmartGridBlock';
import {
  mapFluidImgBlockToProps,
  mapSectionBlockToProps,
  mapMuiBtnToProps,
  mapGridFlexToProps,
  mapBlockFormNetlifyToProps,
  mapTestimonialGridToProps,
  mapClickableImageToProps,
  mapSmartGridBlockToProps,
  mapVideoToProps,
} from '../../lib/mapToProps';
import HeroSectionFooter from './HeroSectionFooter';
import HeroSectionHeader from './HeroSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor, stackColCalculator } from '../../lib/helperFunctions';

function StructuredLrFlex({
  idTag,
  heading,
  subheading,
  subtitle,
  blocks,
  footer,
  blockWidth,
  headerAlignment,
  footerAlignment,
  designSettings,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings} isHero>
      <SectionInnerWrapper designSettings={designSettings}>
        <HeroSectionHeader
          heading={heading}
          subheading={subheading}
          subtitle={subtitle}
          headingColor={headingColor}
          subheadingColor={subheadingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        {blocks.map((block) => {
          const { _type, _key } = block;
          const col = stackColCalculator(parseInt(blockWidth, 10));
          const blockSelector = (key) => {
            switch (true) {
              case key === 'smartGridBlock':
                return (
                  <SmartGridBlock
                    key={block._key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapSmartGridBlockToProps(block)}
                  />
                );
              case key === 'video':
                return <Video {...mapVideoToProps(block)} key={_key} />;
              case key === 'imageBlock':
                return <ImgBlock {...mapFluidImgBlockToProps(block)} key={_key} loading="eager" />;
              case key === 'heroBlock':
                return (
                  <SectionBlock
                    key={_key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapSectionBlockToProps(block)}
                  />
                );
              case key === 'gridFlex':
                return (
                  <GridFlex
                    key={_key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapGridFlexToProps(block)}
                  />
                );
              case key === 'clickableImage':
                return <ClickableImage {...mapClickableImageToProps(block)} />;
              case key === 'blockFormNetlify':
                return <BlockFormNetlify key={block._key} {...mapBlockFormNetlifyToProps(block)} />;
              case key === 'btnBlockMui':
                return <ConditionalButton {...mapMuiBtnToProps(block)} />;
              case key === 'testimonialGrid':
                return (
                  <TestimonialGrid
                    key={_key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapTestimonialGridToProps(block)}
                  />
                );
              default:
                return <div key="default-inner-block"> Block still under development</div>;
            }
          };
          return (
            <Grid container justifyContent="center" spacing={6} key={_key}>
              <Grid item {...col}>
                {blockSelector(_type)}
              </Grid>
            </Grid>
          );
        })}
        <HeroSectionFooter footer={footer} footerColor={footerColor} align={footerAlignment} />
      </SectionInnerWrapper>
    </SectionOuterWrapper>
  );
}

export default StructuredLrFlex;
