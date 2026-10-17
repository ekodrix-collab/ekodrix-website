import { redirect } from "next/navigation";

export default function AdminPortfolioRoute() {
  redirect("/ekodrix-panel?tab=portfolio");
}
