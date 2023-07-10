/* eslint-disable import/no-cycle */
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
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
              <Typography variant="body1" gutterBottom>
                {item.label}:
              </Typography>
            </Grid>
            <Grid item xs={8} sm={7} md={8} lg={8} sx={{ mb: 1.5 }}>
              <ItemText blocks={item.text} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            key={item._key}
            sx={{
              display: {
                xs: 'block',
                sm: 'none',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
            }}
          >
            <Grid item xs={12} sm={5} md={4} lg={4} sx={{ mb: 0.5 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
                {item.label}:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={8} sx={{ mb: 0.5 }}>
              <ItemText blocks={item.text} />
            </Grid>
          </Grid>
        </>
      ))}
    </>
  );
}

export default ProductInfoList;
