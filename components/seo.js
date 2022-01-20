import Head from "next/head";

const Seo = ({ seo }) => {

  const fullSeo = {
    // Add title suffix
    metaTitle: `${seo.metaTitle}`,
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
