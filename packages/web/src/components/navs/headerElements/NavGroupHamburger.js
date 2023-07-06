import React from 'react';
import { navigate } from 'gatsby';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function NavGroupHamburger({ navGroup, index }) {
  const [collapse, setCollapse] = React.useState(true);
  const handleClickCollapse = () => {
    setCollapse(!collapse);
  };
  const handleClickSubNavMenu = (menuLink) => {
    navigate(`/${menuLink}`);
  };
  return (
    <>
      {index === 0 ? null : <Divider />}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <ListItemButton onClick={handleClickCollapse}>
          <ListItemText primary={navGroup.title} />
          {collapse ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
      </Box>
      <Collapse in={!collapse} timeout="auto" unmountOnExit>
        {navGroup.group.map(({ icon, title: itemTitle, nav: itemNav, _key: itemKey }) => (
          <List component="div" disablePadding key={itemKey}>
            <ListItem
              sx={{ paddingLeft: 4 }}
              onClick={() => handleClickSubNavMenu(itemNav.slug.current)}
            >
              <ListItemIcon sx={{ color: 'common.white' }}>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={itemTitle} />
            </ListItem>
          </List>
        ))}
      </Collapse>
    </>
  );
}

export default NavGroupHamburger;
