import Layout from "components/layout/Layout";

import { socialMedia } from "data/socialMedia";

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",
    color: theme.palette.primary.main,

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  avator: {
    width: "8em",
    height: "8em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
}));

const About = () => {
  const classes = useStyles();
  // if you want to add more social medias, add it to here and /data/socialMedia.js
  // and import the Material Icon
  const { instagram, facebook, github, homepage } = socialMedia;
  return (
    <Layout
      // type your page title and page description.
      title=" About | Blog with Next.js and Contentful"
      description="This is a Blog Demo with Next.js and Contentful. You can see the code in github. And you can use the code to make your own blog. "
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
              About
            </Typography>
            <Typography variant="h2" align="center">
              Hello my name is "Your Name".
            </Typography>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                {/* use your picture */}
                <Avatar
                  alt="avatar"
                  src="https://images.ctfassets.net/atxm25972ze9/7y6t7fqxDPqJ21ZECdUV9D/0ace08faabfb401be8e89d689b04ae98/adult-1868750__340.jpg?h=250"
                  className={classes.avator}
                />
              </Grid>
              <Grid item>
                <Typography variant="h3">"Your Name"</Typography>
              </Grid>
              <Grid item container spacing={2} justify="center">
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
              </Grid>
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                {/* your introduction */}
                <strong>Type your introduction.</strong>
                <br />
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
