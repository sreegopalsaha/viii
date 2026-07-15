export const logger = {
  info: (msg: string) => console.log(msg),
  error: (msg: string) => console.error(`Error: ${msg}`),
  usage: () => {
    console.log(`
viii - minimalist HTTP client

Usage:
  viii base [url]              Get or set the global base URL
  viii <method> [path] [body]  Perform an HTTP request

Examples:
  viii base https://api.example.com
  viii get /users
  viii post /users '{"name": "John"}'
    `);
  }
};
