import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import NavBrand from './NavBrand';
import NavPhone from './NavPhone';
import NavClickableImage from './NavClickableImage';
import MainNavHamburger from './MainNavHamburger';
import { mapNavBrandToProps, mapNavItemToProps, mapNavGroupToProps } from '../../../lib/mapToProps';
import { useMainNav } from '../../../hooks/useMainNav';

export default function MainNav({ location }) {
  const { menu, contactInfo } = useMainNav();

  if (menu) {
    return (
      <AppBar
        position="relative"
        elevation={0}
        sx={{ bgcolor: 'common.white', color: 'common.black' }}
      >
        <Container maxWidth="lg" component="nav" aria-label="main navigation header">
          {menu.menuArray.map((menuRow, menuIndex) => {
            // menu group is not a nav group. it is the top level menu item.
            const { menuGroup, _key } = menuRow;
            return (
              <Box
                sx={{
                  display: {
                    xs: menuIndex === 0 ? 'block' : 'none',
                    sm: menuIndex === 0 ? 'block' : 'none',
                    md: 'block',
                    lg: 'block',
                    xl: 'block',
                  },
                }}
                key={_key}
                role="none"
              >
                <Toolbar
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                  disableGutters
                  role="menubar"
                >
                  {menuGroup.map((group, index) => {
                    const { _type, _key: groupKey } = group;
                    const arrayLength = menuGroup.length;
                    let position = 'bottom-start';

                    if (index + 1 === arrayLength) {
                      position = 'bottom-end';
                    }

                    if (index > 0 && index + 1 < arrayLength) {
                      position = 'bottom';
                    }

                    switch (_type) {
                      case 'navClickableImage':
                        return (
                          <Box key={groupKey} sx={{ py: 1 }}>
                            <NavClickableImage image={group.image} link={group.link} />
                          </Box>
                        );
                      case 'navBrand':
                        return (
                          <NavBrand
                            {...mapNavBrandToProps(group)}
                            url={contactInfo.homePage}
                            key={groupKey}
                          />
                        );
                      case 'navPhone':
                        return (
                          <NavPhone text={group.text} key={groupKey} number={group.phoneNumber} />
                        );
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
                            role="none"
                          >
                            <NavItem {...mapNavItemToProps(group)} location={location} />
                          </Box>
                        );
                      case 'navGroup':
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
                            role="none"
                          >
                            <NavGroup
                              {...mapNavGroupToProps(group)}
                              location={location}
                              position={position}
                            />
                          </Box>
                        );

                      default:
                        return <div>under construction</div>;
                    }
                  })}
                  {menuIndex === 0 && (
                    <MainNavHamburger
                      bottomMenu={menu.menuArray[1].menuGroup}
                      topMenu={menu.menuArray[0].menuGroup}
                      brandUrl={contactInfo.homePage}
                      location={location}
                    />
                  )}
                </Toolbar>
              </Box>
            );
          })}
        </Container>
      </AppBar>
    );
  }
  return null;
}
