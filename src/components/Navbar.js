import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar'>
            <Link to='/'>
            <div className='leftSide'> 
            <FavoriteIcon className='icon' style={{color: '#aebbd1'}} />
            MySKN
           </div>
        </Link>

        
        <div className='hiddenLinks'>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        
        <ReorderIcon className='re-icon' style={{color: '#aebbd1'}} />

      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/'>
          <MenuItem className='menu' style={{color: '#aebbd1'}} onClick={handleClose}>
          Home
          </MenuItem>
          </Link>

        <Link to='/about'>
          <MenuItem className='menu' style={{color: '#aebbd1'}} onClick={handleClose}>
          About
          </MenuItem>
          </Link>

        <Link to='/skintypes'>
          <MenuItem className='menu' style={{color: '#aebbd1'}} onClick={handleClose}>
            Skin Types
            </MenuItem>
            </Link>

        <Link to='/contact'>
          <MenuItem className='menu' style={{color: '#aebbd1'}} onClick={handleClose}>
            Contact
            </MenuItem>
            </Link>
      </Menu>
        </div>
        
        <div className='rightSide'>    
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/skintypes'>Skin Types</Link>
        <Link to='/contact'>Contact</Link>
        </div>
    </div>
  );
}

export default Navbar;