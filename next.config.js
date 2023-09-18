/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  unoptimized: true,
  images: {
    // domains: ["seal-app-fizgj.ondigitalocean.app"], // Add your domain here
    // domains: ["localhost"],
    domains: ["https://odus-themediagale.s3.us-west-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
module.exports = {
  images: {
    unoptimized: true,
    domains: ["https://odus-themediagale.s3.us-west-2.amazonaws.com"],
    loader: "imgix",
    path: "",
  },
};
// module.exports = {
//   images: {
//     // domains: ["seal-app-fizgj.ondigitalocean.app"],
//     // domains: ["localhost"],
//     domains: ["localhost"],
//   },
// };
// module.exports = {
//   images: {
//     unoptimized: true,
//   },
// };
