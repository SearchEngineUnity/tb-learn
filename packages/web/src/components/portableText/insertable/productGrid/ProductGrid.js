/* eslint-disable import/no-cycle */
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import SiteProductGridTile from './SiteProductGridTile';

function ProductGrid({ id, pageJumpText, tiles, design }) {
  const tileDesignMapping = {
    sites: SiteProductGridTile,
  };

  function Error() {
    return 'Tile design unavailable';
  }
  const Tile = tileDesignMapping[design] || Error;

  return (
    <Grid
      id={id}
      container
      sx={{ color: 'text.primary' }}
      spacing={2}
      justifyContent="center"
      alignItems="stretch"
    >
      {tiles &&
        tiles.map((tile) => {
          const { _key } = tile;
          return (
            <Grid key={_key} xs={12} lg={3}>
              <Tile key={_key} pageJumpText={pageJumpText} tile={tile} />
            </Grid>
          );
        })}
    </Grid>
  );
}

export default ProductGrid;
