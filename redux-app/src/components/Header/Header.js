import { AppBar, Button, IconButton, Toolbar,Box, MenuItem, Menu} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
            <Box  sx={{display:{xs:'none',sm:'none',md:'none',lg:'flex',flexGrow:1 }}}>
            <Link to="/" style={{ textDecoration: 'none',color:'white' }}> <Button color="inherit"> Home </Button></Link>
            <Link to='/products' style={{ textDecoration: 'none',color:'white' }}><Button color="inherit"> Products </Button> </Link>
{/*         <Link to='/product' style={{ textDecoration: 'none',color:'white' }}><Button color="inherit">  </Button> </Link>  */}
            </Box>
            <Box sx={ {display:{xs:'none',sm:'none',md:'none',lg:'flex'}}}>
            <Link to='/cart' style={{textDecoration: 'none',color:'white' }}><p color="inherit" > <ShoppingCartIcon/> </p> </Link>
            </Box>

            <Box  sx={{display:{xs:'flex',sm:'flex',md:'flex',lg:'none'},flexGrow:1 ,justifyContent: 'start', alignItems: 'center' }}>
            <IconButton 
             color="inherit" 
              id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
             >
            <MenuIcon/>
            </IconButton>
            </Box>
           
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              sx={{display:{xs:'flex',sm:'flex',md:'flex',lg:'none' }}}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}><Link to='/' style={{ textDecoration: 'none',color:'black'  }}>Home</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/products' style={{ textDecoration: 'none',color:'black'  }}>product</Link></MenuItem>
            </Menu>
            <Box sx={{display:{xs:'flex',sm:'flex',md:'flex',lg:'none' }}}>
            <Link to='/cart' style={{textDecoration: 'none',color:'white' }}><p color="inherit" > <ShoppingCartIcon/> </p> </Link>
            </Box>

         </Toolbar>
    </AppBar>
                  


        </>
    )
}
export default Header;