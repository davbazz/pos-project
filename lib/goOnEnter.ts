export default function GoOnEnter(
  event: React.KeyboardEvent<HTMLInputElement>,
  func: () => void
) {
  if (event.key === "Enter") {
    return func();
  }
}
