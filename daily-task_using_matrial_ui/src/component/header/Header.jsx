import { AppBar, Button, IconButton, Toolbar,Box, MenuItem, Menu} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { Link } from "react-router-dom";

import image from '../vinay_logo.png'

function Header(){
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

    return(
        <>
        <AppBar position="relative">
            <Toolbar>
                <Box sx={{flexGrow:1}}>
                <Box component="img" src={image} alt="Image description" maxWidth="5%" />
                </Box> 
                <Box  sx={{display:{xs:'none',sm:'none',md:'none',lg:'flex'}}}>
                <Link to="/" style={{ textDecoration: 'none',color:'white' }}> <Button color="inherit">Home</Button></Link>
                <Link to='/login' style={{ textDecoration: 'none',color:'white' }}><Button color="inherit"> Login</Button> </Link>
        
                </Box>
                <IconButton 
                 color="inherit" 
                 sx={{display:{xs:'flex',sm:'flex',md:'flex',lg:'none'}}}
                 id="basic-button"
                 aria-controls={open ? 'basic-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick}
                 >
                <MenuIcon/>
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}><Link to='/' style={{ textDecoration: 'none',color:'black' }}>Home</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link to='/login' style={{ textDecoration: 'none',color:'black' }}>Login</Link></MenuItem>
                  
                </Menu>
             </Toolbar>
        </AppBar>
        </>
    )
}
export default Header;