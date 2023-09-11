export function url(filename: string): string {
  return (process.env.BASE_PATH ?? '') + filename
}
