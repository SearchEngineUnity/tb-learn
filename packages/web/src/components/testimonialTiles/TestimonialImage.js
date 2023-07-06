import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';

function TestimonialImage({ image, alt, name, text, role, company }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const printedRole = role && `, ${role}`;
  const printedCompany = company && `, ${company}`;

  return (
    <Card
      elevation={0}
      square
      sx={(theme) => ({ height: '100%', borderLeft: `4px solid ${theme.palette.primary.main}` })}
    >
      <CardContent sx={{ p: '8px 16px', '&:last-child': { pb: '8px' } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '16px' }}>
              {text}
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
              {'- '}
              {name}
              {printedRole}
              {printedCompany}
            </Typography>
          </Grid>
          <Grid item>
            {image ? (
              <GatsbyImage
                image={imageData}
                alt={alt || ''}
                style={{ width: '100px', height: '100px', borderRadius: '50px' }}
              />
            ) : (
              <Avatar sx={{ width: '100px', height: '100px', fontSize: 'h2.fontSize' }}>
                {name[0].toUpperCase()}
              </Avatar>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TestimonialImage;
