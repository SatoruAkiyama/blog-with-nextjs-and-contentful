import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

import { socialMedia } from "data/socialMedia";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",
    // color: theme.palette.primary.main,

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Social = ({ color }) => {
  const classes = useStyles();
  // if you want to add more social medias, add it to here and /data/socialMedia.js.
  // and import the Material Icon, then add the code.
  const { instagram, facebook, github, homepage } = socialMedia;

  {
    //  you can add Icon like this
    /* <Grid
          item
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href={social media which you add}
        >
          <Icon( which you add ) className={classes.snsIcon} />
      </Grid> */
  }
  return (
    <Grid item container spacing={2} justify="center">
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={homepage}
      >
        <HomeIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={facebook}
      >
        <FacebookIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={instagram}
      >
        <InstagramIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={github}
      >
        <GitHubIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      {/* add social media*/}
    </Grid>
  );
};

export default Social;
