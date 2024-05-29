export const fetcher = async <T>(
  ...args: Parameters<typeof fetch>
): Promise<T> => {
  const endpoint = process.env.REACT_APP_OMBD_API_ENDPOINT
  const apiKey = process.env.REACT_APP_OMDB_API_KEY

  if (!endpoint || !apiKey) {
    throw new Error(
      'REACT_APP_OMBD_API_ENDPOINT or REACT_APP_OMDB_API_KEY is not defined in environment variables'
    )
  }

  const [resource, config] = args

  if (typeof resource !== 'string') {
    throw new Error(
      'First argument to fetch must be a string representing the path'
    )
  }

  const url = `${endpoint}${resource}&apikey=${apiKey}`
  const response = await fetch(url, config)
  if (!response.ok) throw new Error('Network response was not ok')

  return (await response.json()) as T
}
