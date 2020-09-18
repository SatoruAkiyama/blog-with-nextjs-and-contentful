import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Layout from "components/layout/Layout";
import BlogHeader from "components/BlogHeader";
import BlogBody from "components/BlogBody";
import MorePost from "components/MorePost";
import ShareButton from "components/ShareButton";

import { getPostBySlug, getMorePosts, getAllPostsWithSlug } from "lib/index";

import { Container, Grid, Typography } from "@material-ui/core";

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const morePosts = await getMorePosts(params.slug);
  return {
    props: {
      post: post ? post : null,
      morePosts: morePosts ? morePosts : null,
    },
    revalidate: 1,
  };
}

const Blog = ({ post, morePosts }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={post?.fields.title}
      description={post?.fields.subTitle}
      ogImage={post?.fields.coverImage.fields.file.url}
      url={`https://blog-with-nextjs-and-contentful.vercel.app/blog/${post?.fields.slug}`}
    >
      <BlogHeader
        title={post?.fields.title}
        subtitle={post?.fields.subTitle}
        authorName={post?.fields.author.fields.name}
        authorImage={post?.fields.author.fields.image.fields.file.url}
        slug={post?.fields.slug}
        date={post?.fields.date}
        coverImage={post?.fields.coverImage.fields.file.url}
      />
      <BlogBody content={post?.fields.content} />
      <Container maxWidth="lg" style={{ marginTop: "8em" }}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography
              align="center"
              gutterBottom
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              - Share -
            </Typography>
            <ShareButton
              url={`https://blog-with-nextjs-and-contentful.vercel.app/blog/${post?.fields.slug}`}
            />
          </Grid>
        </Grid>
        <Typography
          align="center"
          gutterBottom
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "3em 0 1.5em",
            borderBottom: "2px solid rgb(208 208 208)",
          }}
        >
          - Recent Entries -
        </Typography>
        <Grid container spacing={4} justify="center">
          {morePosts?.map(({ fields }) => (
            <Grid item key={fields.slug} xs={12} md={4}>
              <Grid container>
                <MorePost
                  title={fields.title}
                  subtitle={fields.subTitle}
                  authorName={fields.author.fields.name}
                  authorImage={fields.author.fields.image.fields.file.url}
                  slug={fields.slug}
                  date={fields.date}
                  coverImage={fields.coverImage.fields.file.url}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Blog;
