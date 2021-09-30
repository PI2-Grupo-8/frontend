import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { purple } from '../../constants/colors';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: purple }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StrongBerry
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                <LogoutIcon />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
