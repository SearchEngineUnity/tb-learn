import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)(({ theme }) => ({
  outlineColor: theme.palette.primary.main,
}));

function NavPhone({ text, number }) {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
          fontWeight: 'bold',
          fontSize: 'h3.fontSize',
        }}
        role="none"
      >
        <StyledLink
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
        >
          {text}
        </StyledLink>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' },
          fontWeight: 'bold',
          fontSize: 'h4.fontSize',
        }}
        role="none"
      >
        <StyledLink
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
        >
          {number}
        </StyledLink>
      </Box>
    </>
  );
}

export default NavPhone;
