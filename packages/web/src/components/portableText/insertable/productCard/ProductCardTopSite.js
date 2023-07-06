/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../lib/sanityConfig';
import ProductInfoList from './ProductInfoList';
import ProductCardRating from './ProductCardRating';
import ConditionalButton from '../../../buttons/ConditionalButton';
import Caption from '../../serializer/CaptionSerializer';
import { mapMuiBtnToProps } from '../../../../lib/mapToProps';

function ProductCardTopSite({ rating, image, infoList, btnSet }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'constrained',
    },
    sanityConfig,
  );

  return (
    <Box sx={{ m: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box component={Box} as="figure" sx={{ m: 0 }}>
            <GatsbyImage
              image={imageData}
              alt={image?.alt}
              style={{ display: 'block', maxWidth: '100%', maxHeight: '240px' }}
              objectFit="contain"
            />
            {image.caption && (
              <Box
                component={Caption}
                as="figcaption"
                sx={{
                  textAlign: 'center',
                  '& .pt-link': {
                    color: 'text.primary',
                    textDecorationColor: 'currentcolor',
                  },
                }}
              >
                <Caption blocks={image.caption} />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
                md: 'block',
                lg: 'block',
                xl: 'block',
              },
            }}
          >
            {btnSet &&
              btnSet.map((btn) => (
                <Box key={btn._key}>
                  <ConditionalButton {...mapMuiBtnToProps(btn)} />
                </Box>
              ))}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 0.5, py: 1, display: { xs: 'flex', sm: 'block', justifyContent: 'center' } }}>
        <ProductCardRating rating={rating} />
      </Box>
      <Box
        sx={{
          mt: 3,
          display: {
            xs: 'block',
            sm: 'none',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
        }}
      >
        {btnSet &&
          btnSet.map((btn) => (
            <Box sx={{ display: 'flex', mt: 3, justifyContent: 'center' }} key={btn._key}>
              <ConditionalButton {...mapMuiBtnToProps(btn)} />
            </Box>
          ))}
      </Box>
      <Box sx={{ mt: 3 }}>
        <ProductInfoList infoList={infoList} />
      </Box>
    </Box>
  );
}

export default ProductCardTopSite;
