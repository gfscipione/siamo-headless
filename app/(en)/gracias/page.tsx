import { permanentRedirect } from "next/navigation";

export default function GraciasRedirect() {
  permanentRedirect("/thank-you/");
}
