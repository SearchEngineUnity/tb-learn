/* eslint-disable import/no-cycle */
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Box } from '@mui/material';
import ItemText from '../../serializer/NoIndentSerializer';

function ProductInfoList({ infoList }) {
  return (
    <>
      {infoList.map((item) => (
        <>
          <Grid
            container
            spacing={0}
            key={item._key}
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
              },
            }}
          >
            <Grid item xs={4} sm={5} md={4} lg={4} sx={{ mb: 1.5 }}>
              <Typography variant="body1">{item.label}:</Typography>
            </Grid>
            <Grid item xs={8} sm={7} md={8} lg={8} sx={{ mb: 1.5 }}>
              <ItemText blocks={item.text} />
            </Grid>
          </Grid>
          <Box
            container
            spacing={0}
            key={item._key}
            sx={{
              mb: 1.5,
              display: {
                xs: 'block',
                sm: 'none',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold', lineHeight: '1rem' }}>
              {item.label}:
            </Typography>
            <ItemText blocks={item.text} />
          </Box>
        </>
      ))}
    </>
  );
}

export default ProductInfoList;
