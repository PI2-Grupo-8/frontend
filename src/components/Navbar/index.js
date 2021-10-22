import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { purple } from '../../constants/colors';
import { isAuthenticated as isAuth, logout } from '../../services/auth';
import { useHistory } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import "./index.css";

const Navbar = () => {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(isAuth());
  const location = useLocation();

  useEffect(() => {
    console.log("useEffect");
    setIsAuthenticated(isAuth());
  }, [location]);

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
            <Link className="text-white" to="/"> StrongBerry</Link>
          </Typography>
          {isAuthenticated && <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => { history.push("/profile") }}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => logout(() => history.push("/"))}
              color="inherit"
            >
              <LogoutIcon />
            </IconButton>
          </div>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
