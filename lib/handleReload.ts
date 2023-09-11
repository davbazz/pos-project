import { useRouter } from "next/router";

export default function handleReload() {
  useRouter().reload;
}
