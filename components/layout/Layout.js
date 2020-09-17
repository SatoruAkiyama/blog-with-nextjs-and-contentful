import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";

const Layout = ({ children, title, description, ogImage, url }) => {
  // website Url
  const pageUrl = "https://blog-with-nextjs-and-contentful.vercel.app/";
  // when you share this page on facebook you'll see this image
  const ogImg = "/blog-demo-min.png";
  // google site vertification
  const GOOGLE_SITE_VERTIFICATION = process.env.GOOGLE_SITE_VERTIFICATION;
  return (
    <>
      <Head>
        <title>{title ? title : "Blog"}</title>
        <meta
          name="description"
          key="description"
          content={
            description
              ? description
              : "This is a statically generated blog example using Next.js and Contentful. | Blog with React/Next.js and Contentful"
          }
        />
        <meta
          property="og:title"
          content={title ? title : "Blog"}
          key="og:title"
        />
        <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "This is a statically generated blog example using Next.js and Contentful."
          }
          key="og:description"
        />
        <meta
          name="google-site-verification"
          content={GOOGLE_SITE_VERTIFICATION}
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            background: #f9f9f9;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
