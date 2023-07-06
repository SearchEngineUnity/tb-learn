import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Link = styled('a')(({ theme }) => ({
  outlineColor: theme.palette.primary.main,
}));

function NavBrand({ url, brandGroup, alt }) {
  return (
    <>
      {brandGroup.map((group) => {
        const { type, brand, _key } = group;
        const height = group.height || 48;
        const { aspectRatio } = group.brand.logo.asset.metadata.dimensions;

        switch (type) {
          case 'desktop':
            return (
              <Box
                sx={{ display: { xs: 'none', lg: 'block', xl: 'block' } }}
                key={_key}
                role="none"
              >
                <Link href={url} role="menuitem">
                  <img
                    src={brand.logo.asset.url}
                    alt={alt}
                    height={height}
                    width={height * aspectRatio}
                    loading="eager"
                  />
                </Link>
              </Box>
            );
          case 'tablet':
            return (
              <Box
                sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' } }}
                key={_key}
                role="none"
              >
                <Link href={url} role="menuitem">
                  <img
                    src={brand.logo.asset.url}
                    alt={alt}
                    height={height}
                    width={height * aspectRatio}
                    loading="eager"
                  />
                </Link>
              </Box>
            );
          case 'mobile':
            return (
              <Box
                sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }}
                key={_key}
                role="none"
              >
                <Link href={url} role="menuitem">
                  <img
                    src={brand.logo.asset.url}
                    alt={alt}
                    height={height}
                    width={height * aspectRatio}
                    loading="eager"
                  />
                </Link>
              </Box>
            );

          default:
            return <div>under construction</div>;
        }
      })}
    </>
  );
}

export default NavBrand;
