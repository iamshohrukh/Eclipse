import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
  import ChevronRightIcon from "@mui/icons-material/ChevronRight";
  import SchoolIcon from "@mui/icons-material/School";
  import BookmarksIcon from "@mui/icons-material/Bookmarks";
  
  const About = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  
    return (
      <div>
        <Box py={20} textAlign="center">
          <Typography variant="h2">About Page</Typography>
        </Box>
        {isMobile ? (
          <Grid container justify="space-between">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/College"
              >
                <ChevronLeftIcon />
                <Typography variant="button">College</Typography>
                <SchoolIcon style={{ marginLeft: 15 }} />
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Personal"
              >
                <BookmarksIcon style={{ marginRight: 15 }} />
                <Typography variant="button">Personal</Typography>
                <ChevronRightIcon />
              </Button>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </div>
    );
  };
  export default About;
  