module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/pets",
        destination: "/about",
        permanent: false,
      },
      {
        source: '/old-posts/:id',
        destination: '/posts/:id',
        permanent: true,
      }
    ]
  }
}
