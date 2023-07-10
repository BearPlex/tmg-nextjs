/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  unoptimized: true,
  images: {
    // domains: ["seal-app-fizgj.ondigitalocean.app"], // Add your domain here
    // domains: ["localhost"],
    domains: ["https://beta.themediagale.com/public_images"],
  },
};

module.exports = nextConfig;
module.exports = {
  images: {
    unoptimized: true,
    domains: ["https://beta.themediagale.com/public_images"],
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
