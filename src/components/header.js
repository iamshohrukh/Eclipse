// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

// REACT APP IMPORTS
import Home from "./pages/About_us";
import College from "./pages/Products";
import About from "./pages/Next-to-future";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0
  },
  menuButton: {
  },
  title: {
    flexGrow: 1
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <BrowserRouter>
          <AppBar>
            <Toolbar>
              <Typography
                variant="h5"
                component="p"
                color="textSecondary"
                className={classes.title}
              >
                Murali
              </Typography> 
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/College"
                    >
                      <ListItemIcon>
                        <SchoolIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> College </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/About"
                    >
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> About</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Personal"
                    >
                      <ListItemIcon>
                        <BookmarksIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Personal </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button
                    variant="text"
                    component={Link}
                    to="/"
                    color="default"
                  >
                    <HomeIcon />
                    Home
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/College"
                    color="default"
                  >
                    <SchoolIcon />
                    College
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/About"
                    color="default"
                  >
                    <PersonIcon />
                    About
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/Personal"
                    color="default"
                  >
                    <BookmarksIcon />
                    Personal
                  </Button>
                </div>
              )
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/College" component={College} />
            <Route exact path="/About" component={About} />
          </Switch>
        </BrowserRouter>
      </HideOnScroll>
    </div>
  );
};

export default Header;
