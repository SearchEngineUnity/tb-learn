/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { navigate, Link as GLink } from 'gatsby';

function NavGroup({ title, subGroup, location, position }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleNavigate = (nav) => {
    navigate(`/${nav.slug.current}`);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div role="none">
      <Link
        ref={anchorRef}
        component="button"
        color="primary"
        onClick={handleToggle}
        type="button"
        sx={{ lineHeight: '56px' }}
        role="menuitem"
        aria-controls={open ? title.replace(' ', '-') : undefined}
        aria-expanded={open}
        aria-haspopup="true"
        underline="hover"
      >
        <Box sx={{ fontSize: 'h4.fontSize' }}>
          {title}
          {open ? (
            <ExpandLess sx={{ verticalAlign: 'middle' }} />
          ) : (
            <ExpandMore sx={{ verticalAlign: 'middle' }} />
          )}
        </Box>
      </Link>
      <Popper
        sx={{ zIndex: 1900 }}
        open={open}
        anchorEl={anchorRef.current}
        placement={position}
        role={undefined}
        disablePortal
      >
        <Paper role="none">
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              role="menu"
              autoFocusItem={open}
              id={title.replace(' ', '-')}
              // eslint-disable-next-line react/jsx-no-bind
              onKeyDown={handleListKeyDown}
            >
              {subGroup.map(({ icon, title: itemTitle, nav, _key }) => (
                <MenuItem
                  role="menuitem"
                  onClick={() => handleNavigate(nav)}
                  key={_key}
                  selected={`/${nav.slug.current}` === location.pathname}
                  component={GLink}
                  to={`/${nav.slug.current}`}
                >
                  {icon && (
                    <ListItemIcon>
                      <Icon>{icon}</Icon>
                    </ListItemIcon>
                  )}
                  <ListItemText primary={itemTitle} />
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
}

export default NavGroup;
