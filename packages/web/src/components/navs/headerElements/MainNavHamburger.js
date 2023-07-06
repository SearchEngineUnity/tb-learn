import React from 'react';
import { navigate } from 'gatsby';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from 'gatsby-theme-material-ui';
import NavItem from './NavItem';
import NavPhone from './NavPhone';
import NavGroup from './NavGroupHamburger';
import NavClickableImage from './NavClickableImage';
import { mapNavItemToProps } from '../../../lib/mapToProps';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function MainNavHamburger({ topMenu, bottomMenu, brandUrl, location }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSubNavMenu = (menuLink) => {
    navigate(`/${menuLink}`);
  };

  return (
    <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleClickOpen}
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{ sx: { bgcolor: 'primary.dark', color: 'common.white' } }}
      >
        <AppBar
          component="nav"
          sx={{ position: 'relative', bgcolor: 'common.white', color: 'common.black' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} role="menubar">
            {topMenu.map((group) => {
              const { _type, _key: groupKey } = group;
              const mobileBrand =
                _type === 'navBrand'
                  ? group.brandGroup.filter((x) => x.type === 'mobile')[0]
                  : null;

              switch (_type) {
                case 'navClickableImage':
                  return (
                    <Box
                      sx={{
                        display: {
                          xs: 'block',
                          sm: 'block',
                          md: 'none',
                          lg: 'none',
                          xl: 'none',
                        },
                        my: 1,
                      }}
                      key={groupKey}
                    >
                      <NavClickableImage image={group.image} link={group.link} />
                    </Box>
                  );
                case 'navBrand': {
                  const { aspectRatio } = mobileBrand.brand.logo.asset.metadata.dimensions;
                  return (
                    <Box
                      components="a"
                      href={brandUrl}
                      key={groupKey}
                      sx={{
                        display: {
                          xs: 'block',
                          sm: 'block',
                          md: 'none',
                          lg: 'none',
                          xl: 'none',
                        },
                        outlineColor: 'primary.main',
                      }}
                    >
                      <img
                        src={mobileBrand.brand.logo.asset.url}
                        alt={mobileBrand.brand.title}
                        height={mobileBrand.height}
                        width={mobileBrand.height * aspectRatio}
                      />
                    </Box>
                  );
                }
                case 'navPhone':
                  return <NavPhone text={group.text} key={groupKey} number={group.phoneNumber} />;
                case 'navItem':
                  return (
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
                      key={groupKey}
                    >
                      <NavItem {...mapNavItemToProps(group)} location={location} />
                    </Box>
                  );
                case 'navGroup':
                  return <div>Nav Group is not allowed in the top menu</div>;

                default:
                  return <div>under construction</div>;
              }
            })}
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size="large"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List role="menu" sx={{ bgcolor: 'primary.dark', color: 'common.white' }}>
          {bottomMenu.map((group, index) => {
            const { _type, title, nav: groupNav, _key } = group;
            switch (_type) {
              case 'navItem':
                return (
                  <React.Fragment key={_key}>
                    {index === 0 ? null : <Divider />}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <ListItemButton
                        onClick={() => handleClickSubNavMenu(groupNav.slug.current)}
                        selected={location.pathname === `/${groupNav.slug.current}`}
                      >
                        <ListItemText
                          primary={title}
                          primaryTypographyProps={
                            location.pathname === `/${groupNav.slug.current}`
                              ? { sx: { fontWeight: 'bold' } }
                              : {}
                          }
                        />
                      </ListItemButton>
                    </Box>
                  </React.Fragment>
                );
              case 'navGroup':
                return <NavGroup key={_key} navGroup={group} index={index} location={location} />;

              default:
                return <div key={_key}>under construction</div>;
            }
          })}
        </List>
      </Dialog>
    </Box>
  );
}

export default MainNavHamburger;
