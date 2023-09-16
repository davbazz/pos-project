export default function goOnEnter(
  event: React.KeyboardEvent<HTMLInputElement>,
  func: () => void
) {
  if (event.key === "Enter") {
    return func();
  }
}
