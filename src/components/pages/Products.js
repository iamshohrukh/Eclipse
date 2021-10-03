import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
  import ChevronRightIcon from "@mui/icons-material/ChevronRight";
  import HomeIcon from "@mui/icons-material/Home";
  import PersonIcon from "@mui/icons-material/Person";
  
  const College = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  
    return (
      <div>
        <Box py={20} textAlign="center">
          <Typography variant="h2">College Page</Typography>
        </Box>
        {isMobile ? (
          <Grid container justify="space-between">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/">
                <ChevronLeftIcon />
                <Typography variant="button">Home</Typography>
                <HomeIcon style={{ marginLeft: 15 }} />
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/About"
              >
                <PersonIcon style={{ marginRight: 15 }} />
                <Typography variant="button">About</Typography>
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
  export default College;