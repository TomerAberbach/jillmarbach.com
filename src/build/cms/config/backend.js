const backend =
  process.env.NODE_ENV === `production`
    ? {
        name: `github`,
        repo: `TomerAberbach/jillmarbach.com`,
        branch: `main`
      }
    : {
        name: `proxy`,
        proxy_url: `http://localhost:8081/api/v1`,
      }

export default backend
