import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Illustration from '../Illustration';
import Content from '../../serializer/NoIndentSerializer';
import ConditionalButton from '../../../buttons/ConditionalButton';

export default function SiteProductGridTile({ pageJumpText, tile, tilePosition }) {
  const {
    specialTagText,
    tileImage,
    name,
    content,
    btnText,
    btnLink,
    jumpLink: { hashId },
  } = tile;
  const { alt } = tileImage;

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: '16px',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', lg: 'column' },
        flexWrap: 'wrap',
        height: '100%',
        '& .pt-link': {
          color: 'primary.main',
          textDecorationColor: 'currentcolor',
        },
        '& .caption-text': {
          color: 'text.primary',
        },
        '& .caption-link': {
          color: 'text.primary',
          textDecorationColor: 'currentcolor',
        },
      }}
    >
      <CardHeader
        sx={{
          color: 'common.white',
          bgcolor: 'common.black',
          textAlign: { xs: 'center', sm: 'left', lg: 'center' },
          width: '100%',
          order: 1,
        }}
        title={
          <Typography variant="h5" component="p">
            {specialTagText}
          </Typography>
        }
      />
      <Box
        sx={{
          padding: '16px 16px 16px',
          flex: 1,
          order: 2,
          mx: 'auto',
        }}
      >
        {/* <Illustration loading="eager" alt={alt} illustration={{ ...tileImage, maxHeight: 150 }} /> */}
        <Illustration loading="eager" alt={alt} illustration={tileImage} />
      </Box>
      <Box
        sx={{
          flex: { xs: '1 0 auto', sm: 3, lg: '1 0 auto' },
          order: { xs: 3, sm: 4, lg: 3 },
        }}
      >
        {name && (
          <Typography
            variant="h5"
            color="textPrimary"
            component="p"
            sx={{
              padding: { xs: '0px 16px 16px', sm: '16px 16px 0px', lg: '0px 16px 16px' },
              textAlign: { xs: 'center', sm: 'left', lg: 'center' },
            }}
          >
            {name}
          </Typography>
        )}
        <Box
          sx={{ padding: { xs: '0px 16px 16px', sm: '16px', lg: '0px 16px 16px' } }}
          className="product-grid-tile__content"
        >
          <Content blocks={content} />
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: '0px 16px 16px', md: '16px', lg: '0px 16px 16px' },
          flex: { xs: 0, sm: '1 0 100%', md: 1, lg: 0 },
          order: { xs: 4, sm: 5, lg: 4 },
        }}
      >
        <ConditionalButton
          link={btnLink}
          variant="contained"
          padding="6px 16px"
          fullWidth
          text={btnText}
          disableElevation
          borderRadius="0px"
          className={`product-grid-tile__btn tile_position-${tilePosition}`}
        />
        {pageJumpText && hashId && (
          <Box
            sx={{
              padding: '16px 16px 0px',
            }}
          >
            <Link
              href={`#${hashId}`}
              underline="none"
              color="textSecondary"
              sx={{
                fontStyle: 'italic',
                textAlign: 'center',
                display: 'block',
              }}
            >
              {pageJumpText}
            </Link>
          </Box>
        )}
      </Box>
    </Card>
  );
}
