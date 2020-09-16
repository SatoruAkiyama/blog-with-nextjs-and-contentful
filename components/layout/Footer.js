import Link from "components/Link";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Typography } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

import { routes } from "data/routes";
import { socialMedia } from "data/socialMedia";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 ",
  },
  snsIcon: {
    width: "30px",
    height: "30px",
    color: "white",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const path = routes;
  const router = useRouter();
  // if you want to add more social medias, add it to here and /data/socialMedia.js.
  // and import the Material Icon, then add the code.
  {
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
  const { instagram, facebook, github, homepage } = socialMedia;
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justify="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  className={classes.link}
                  style={{
                    fontWeight: router.pathname === link && "bold",
                    borderBottom:
                      router.pathname === link && "1px solid #757ce8",
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>
          <Grid container justify="center" spacing={2}>
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href={homepage}
            >
              <HomeIcon className={classes.snsIcon} />
            </Grid>
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href={facebook}
            >
              <FacebookIcon className={classes.snsIcon} />
            </Grid>
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href={instagram}
            >
              <InstagramIcon className={classes.snsIcon} />
            </Grid>
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href={github}
            >
              <GitHubIcon className={classes.snsIcon} />
            </Grid>
            {/* add social media*/}
          </Grid>
        </Grid>
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="https://satoruakiyama.com"
          justify="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            &copy;Satoru Akiyama
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
