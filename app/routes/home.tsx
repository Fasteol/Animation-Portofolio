import type { Route } from "./+types/home";
import Portofolio from "../pages/portofolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portofolio - Razan" },
    {
      name: "description",
      content: "Web Developer Portfolio",
    },
  ];
}

export function links() {
  return [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>",
    },
  ];
}

export default function Home() {
  return <Portofolio />;
}
