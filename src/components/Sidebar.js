import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandLessTwo from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandMoreTwo from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { btnData } from '../data';
import Img1 from '../assets/security-safe.png';
import Img2 from '../assets/Group 163927.png';
import Img10 from '../assets/shape5.png';
import Img11 from '../assets/shape6.png';
import Img12 from '../assets/box-fill.png';
import Img13 from '../assets/box-fill2.png';
import Img14 from '../assets/box-fill3.png';
import Img15 from '../assets/box-fill4.png';

function Sidebar() {

  const [open, setOpen] = React.useState(true);
  const [openTwo, setOpenTwo] = React.useState(true);
  const [openThree, setOpenThree] = React.useState(true);
  const [openFour, setOpenFour] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickTwo = () => {
    setOpenTwo(!openTwo);
  };

  const handleClickThree = () => {
    setOpenThree(!openThree);
  };

  const handleClickFour = () => {
    setOpenFour(!openFour);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }} style={{padding: '5px'}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={Img1} alt='image'/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={Img2} alt='image'/>
              </ListItemIcon>
              <ListItemText primary="Inventory Stock" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

      <ListItemButton onClick={handleClick} style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>Warehouse management</p>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {btnData.map((item) => (
            <ListItemButton key={item.id} sx={{ pl: 4 }}>
              <ListItemIcon>
                <img src={item.img} alt='image'/>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      <Divider />
      <ListItemButton onClick={handleClickTwo} style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>inbound items</p>
        {openTwo ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openTwo} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <img src={Img10} alt='image'/>
            </ListItemIcon>
            <ListItemText primary="inbound invoices" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <img src={Img11} alt='image'/>
            </ListItemIcon>
            <ListItemText primary="distribution section" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton onClick={handleClickThree} style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>inventory management</p>
        {openThree ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openThree} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <img src={Img12} alt='image'/>
            </ListItemIcon>
            <ListItemText primary="inbound Pricing" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <img src={Img13} alt='image'/>
            </ListItemIcon>
            <ListItemText primary="inventory pricing" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <img src={Img14} alt='image'/>
            </ListItemIcon>
            <ListItemText primary="ecommerce store management" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton onClick={handleClickFour} style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>transaction</p>
        {openFour ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openFour} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <img src={Img15} alt='image'/>
            </ListItemIcon>
            <ListItemText primary="quotation" />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
}

export default Sidebar;