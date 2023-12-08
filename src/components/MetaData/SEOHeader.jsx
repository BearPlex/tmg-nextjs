import Head from "next/head";

function SEOHeader({ metadata }) {
  return (
    <Head>
      <meta charSet={metadata?.charset} />
      <meta name="viewport" content={metadata?.viewport} />
      {metadata && metadata?.["X-UA-Compatible"] && (
        <meta
          httpEquiv="X-UA-Compatible"
          content={metadata["X-UA-Compatible"]}
        />
      )}

      <meta name="description" content={metadata?.description} />
      <title>{metadata?.title}</title>
      {/* Open Graph tags */}
      <meta property="og:title" content={metadata?.og?.title} />
      <meta property="og:description" content={metadata?.og?.description} />
      <meta property="og:type" content={metadata?.og?.type} />
      <meta property="og:url" content={metadata?.og?.url} />
      <meta
        property="og:image"
        content="https://cdn.themediagale.com/tmg_logoo_04c97ab77c.png"
      />
      {/* <meta property="og:image" content={metadata?.og?.image} /> */}
      {/* logo size */}
      {/* <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="215" />
      <style>{`
          @media (max-width: 768px) {
            meta[property="og:image:width"] {
              content: 200px;
            }
            meta[property="og:image:height"] {
              content: 127.5px;
            }
          }
        `}</style> */}
      {/* Twitter Card tags */}
      <meta name="twitter:card" content={metadata?.twitter?.card} />
      <meta name="twitter:site" content={metadata?.twitter?.site} />
      <meta name="twitter:title" content={metadata?.twitter?.title} />
      <meta
        name="twitter:description"
        content={metadata?.twitter?.description}
      />
      <meta
        name="twitter:image"
        content='"https://cdn.themediagale.com/tmg_logoo_04c97ab77c.png"'
      />
      {/* <meta name="twitter:image" content={metadata?.twitter?.image} /> */}
      {/* Other meta tags */}
      <meta name="author" content={metadata?.author} />
      <meta name="keywords" content={metadata?.keywords?.join(", ")} />
      <link rel="canonical" href={metadata?.canonical} />
      <link
        rel="icon"
        type="image/png"
        href='"https://cdn.themediagale.com/tmg_logoo_04c97ab77c.png"'
      />
      {/* <link rel="icon" type="image/png" href={metadata?.favicon} /> */}
    </Head>
  );
}

export default SEOHeader;
