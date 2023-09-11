export function url(filename: string): string {
  if (filename.startsWith('/')) {
    return (process.env.NEXT_PUBLIC_BASE_PATH ?? '') + filename;
  }

  return filename;
}
