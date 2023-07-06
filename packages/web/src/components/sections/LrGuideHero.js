import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImgBlock from '../blocks/FluidImgBlock';
import Video from '../portableText/insertable/Video';
import Subtitle from '../portableText/serializer/H1SubtitleSerializer';
import Disclaimer from '../portableText/serializer/DisclaimerSerializer';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';
import { useSpGuideHero } from '../../hooks/useSpGuideHero';
import { useDisclaimerText } from '../../hooks/useDisclaimerText';

const featureComponentMapping = {
  image: ImgBlock,
  video: Video,
};

const propsMapping = (type, props) => {
  switch (type) {
    case 'image':
      return {
        ...mapFluidImgBlockToProps(props.image),
        loading: 'eager',
      };
    case 'video':
      return { url: props?.video };
    default:
      return props;
  }
};
const LrGuideHeroWithRef = forwardRef(function LrGuideHero(
  { featureType, h1, subtitle, date, feature, includeDisclaimer },
  ref,
) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const heroAlignment = useSpGuideHero();
  const disclaimerText = useDisclaimerText();
  const Feature = featureComponentMapping[featureType];
  const values = propsMapping(featureType, feature);
  const errorMessage = 'No matching Feature component';

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: { xs: '16px', md: '40px' },
        '& .pt-link': {
          color: 'primary.contrastText',
          textDecorationColor: 'currentcolor',
        },
        '& .caption-text': {
          color: 'primary.contrastText',
        },
        '& .caption-link': {
          color: 'primary.contrastText',
          textDecorationColor: 'currentcolor',
        },
      }}
      id="hero"
      component="header"
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems={heroAlignment.heroLrAlignment}
          spacing={6}
          component="header"
        >
          <Grid item md={6} xs={12}>
            <Typography variant="h1">{h1}</Typography>
            {subtitle && <Subtitle blocks={subtitle} />}
            {lastUpdatedDate && (
              <Typography variant="body1" component="p" mt={1}>
                Last updated: {lastUpdatedDate.toLocaleDateString('en-US', options)}
              </Typography>
            )}
            {includeDisclaimer && disclaimerText && (
              <Box mt={6}>
                <Disclaimer blocks={disclaimerText} />
              </Box>
            )}
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{ display: 'flex', justifyContent: heroAlignment.heroImgAlignment }}>
              {Feature ? <Feature {...values} /> : errorMessage}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default LrGuideHeroWithRef;
