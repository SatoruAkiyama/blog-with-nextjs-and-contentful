import Link from "components/Link";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    color: "transparent",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  root: {
    transition: "all 0.3s",
    "&:hover": {
      boxShadow:
        "1px 0px 20px -1px rgba(0,0,0,0.2), 0px 0px 20px 5px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      transform: "translateY(-3px)",
    },
  },
}));

export default function Post({
  title,
  subtitle,
  authorName,
  authorImage,
  slug,
  date,
  coverImage,
}) {
  const classes = useStyles();
  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <Card className={classes.root}>
        {/* if you don't need author section, delete this block */}
        {/* author */}
        <CardHeader
          avatar={
            <Avatar
              aria-label="avator image"
              className={classes.avatar}
              style={{
                backgroundImage: `url(${authorImage})`,
              }}
            />
          }
          title={authorName}
          subheader={moment(date).format("MMMM Do YYYY")}
        />
        {/* author */}
        <CardMedia className={classes.media} image={coverImage} title={title} />
        <CardContent>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {subtitle.length > 170 ? subtitle.substr(0, 170) + "..." : subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
