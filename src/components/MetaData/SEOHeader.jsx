import Head from "next/head";

function SEOHeader({ metadata }) {
  return (
    <Head>
      <meta charSet={metadata?.charset} />
      <meta name="viewport" content={metadata?.viewport} />
      <meta httpEquiv="X-UA-Compatible" content={metadata["X-UA-Compatible"]} />
      <meta name="description" content={metadata?.description} />
      <title>{metadata.title}</title>

      {/* Open Graph tags */}
      <meta property="og:title" content={metadata?.og?.title} />
      <meta property="og:description" content={metadata?.og?.description} />
      <meta property="og:type" content={metadata?.og?.type} />
      <meta property="og:url" content={metadata?.og?.url} />
      <meta property="og:image" content={metadata?.og?.image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={metadata?.twitter?.card} />
      <meta name="twitter:site" content={metadata?.twitter?.site} />
      <meta name="twitter:title" content={metadata?.twitter?.title} />
      <meta
        name="twitter:description"
        content={metadata?.twitter?.description}
      />
      <meta name="twitter:image" content={metadata?.twitter?.image} />

      {/* Other meta tags */}
      <meta name="author" content={metadata?.author} />
      <meta name="keywords" content={metadata?.keywords.join(", ")} />
      <link rel="canonical" href={metadata?.canonical} />
      <link rel="icon" type="image/png" href={metadata?.favicon} />
    </Head>
  );
}

export default SEOHeader;