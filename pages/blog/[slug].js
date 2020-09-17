import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Layout from "components/layout/Layout";
import BlogHeader from "components/BlogHeader";
import BlogBody from "components/BlogBody";
import MorePost from "components/MorePost";
import ShareButton from "components/ShareButton";

import { getBlogBySlug, getMoreBlogs, getAllBlogsWithSlug } from "lib/index";

import { Container, Grid, Typography } from "@material-ui/core";

export async function getStaticPaths() {
  const allBlogs = await getAllBlogsWithSlug();
  return {
    paths: allBlogs?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  const moreBlogs = await getMoreBlogs(params.slug);
  return {
    props: {
      blog: blog ? blog : null,
      moreBlogs: moreBlogs ? moreBlogs : null,
    },
    revalidate: 1,
  };
}

const Blog = ({ blog, moreBlogs }) => {
  const router = useRouter();

  if (!router.isFallback && !blog) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={blog?.fields.title}
      description={blog?.fields.subTitle}
      ogImage={blog?.fields.coverImage.fields.file.url}
      url={`https://blog-with-nextjs-and-contentful.vercel.app/blog/${blog?.fields.slug}`}
    >
      <BlogHeader
        title={blog?.fields.title}
        subtitle={blog?.fields.subTitle}
        authorName={blog?.fields.author.fields.name}
        authorImage={blog?.fields.author.fields.image.fields.file.url}
        slug={blog?.fields.slug}
        date={blog?.fields.date}
        coverImage={blog?.fields.coverImage.fields.file.url}
      />
      <BlogBody content={blog?.fields.content} />
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
              url={`https://blog-with-nextjs-and-contentful.vercel.app/blog/${blog?.fields.slug}`}
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
          {moreBlogs?.map(({ fields }) => (
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
