import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "3em",
    height: "3em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
  root: {
    maxWidth: "800px",
  },
  blogBody: {
    marginTop: "2rem",
    "& p": {
      ...theme.typography.body1,
    },
    "& h1, h2, h3, h4, h5": {
      fontSize: "1.5rem",
      marginBottom: "0",
      marginTop: "2rem",
    },
    "& a": {
      color: theme.palette.info.main,
    },
  },
}));

const BlogBody = ({ content }) => {
  const classes = useStyles();
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, fileName } = node.data.target.fields.file;
        return (
          <img
            src={url}
            alt={fileName}
            style={{ height: "auto", width: "100%", margin: "1em 0" }}
          />
        );
      },
      [INLINES.HYPERLINK]: (node) => {
        const { uri } = node.data;
        const { value } = node.content[0];
        return (
          <a target="_blank" rel="noreferrer noopener" href={uri}>
            {value}
          </a>
        );
      },
    },
  };
  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item className={classes.blogBody}>
          {documentToReactComponents(content, options)}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogBody;
