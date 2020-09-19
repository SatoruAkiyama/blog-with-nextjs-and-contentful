import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "4em",
    maxWidth: "660px",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.info.main,
  },
}));

const PageHeader = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Typography variant="h1" gutterBottom align="center">
          Blog with Next.js and Contentful
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          align="center"
        >
          This is a statically generated blog example using Next.js and
          Contentful.
          <br /> You can see the code&#8594;{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/SatoruAkiyama/blog-with-nextjs-and-contentful"
            className={classes.link}
          >
            here
          </a>
          .<br /> How you make a blog&#8594;{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://satoruakiyama.com/blog/building-blog-with-nextjs-and-contentful-en"
            className={classes.link}
          >
            English
          </a>{" "}
          ,{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://satoruakiyama.com/blog/building-blog-with-nextjs-and-contentful-ja"
            className={classes.link}
          >
            Japanese
          </a>
          .<br />
          Or I can make your blog. Contact me from{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://satoruakiyama.com/contact"
            className={classes.link}
          >
            here
          </a>
          .
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
