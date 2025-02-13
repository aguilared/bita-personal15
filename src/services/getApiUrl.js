const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export default async function getApiUrl() {
  if (!baseUrl) {
    // Handle the missing URL, either by throwing an error or providing a default.
    // Choose the best approach for your application.

    // Option 1: Throw an error (recommended for critical variables)
    throw new Error("NEXT_PUBLIC_API_URL environment variable is not defined.");

    // Option 2: Provide a default URL (use with caution, only if appropriate)
    // return "https://default-api-url.com/";  // Replace with your default

    // Option 3: Log a warning and return undefined (might lead to errors later)
    // console.warn("NEXT_PUBLIC_API_URL environment variable is not defined.");
    // return undefined;
  }

  return baseUrl;
}
