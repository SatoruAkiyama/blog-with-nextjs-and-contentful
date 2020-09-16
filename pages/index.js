import Post from "components/Post";
import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";

import { Container, Grid } from "@material-ui/core";

import { getAllBlogs } from "lib/index";

export async function getStaticProps() {
  const posts = await getAllBlogs();
  return { revalidate: 1, props: { posts } };
}

export default function Index({ posts }) {
  return (
    <>
      <Layout
        // type your page title and page description.
        title="Blog with Next.js and Contentful"
        description="This is a Blog Demo with Next.js and Contentful. You can see the code in github. And you can use the code to make your own blog. "
      >
        <Container maxWidth="lg">
          {/* you can delete this component or you can use this for your page header. */}
          <PageHeader />
          {/* blog post */}
          <Grid container spacing={4}>
            {posts?.map(({ fields }) => (
              <Grid item key={fields.slug} xs={12} sm={6} md={4}>
                <Grid container>
                  <Post
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
    </>
  );
}
