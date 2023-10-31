export default function capitaliseFirstLetter(input: string): string {
  if (input && input.length === 0) {
    return input
  }

  const firstChar = input?.charAt(0).toUpperCase()
  const restOfChars = input?.slice(1).toLowerCase()

  return firstChar + restOfChars
}
