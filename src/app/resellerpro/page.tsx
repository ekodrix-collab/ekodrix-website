import { Metadata } from "next";
import { ResellerPro } from "@/components/sections/resellerpro";

export const metadata: Metadata = {
  title: "ResellerPro - Flagship SaaS Product | EKODRIX",
  description: "The CRM that Indian resellers swear by. 10,000+ resellers managing ₹100Cr+ transactions monthly.",
};

export default function ResellerProPage() {
  return (
    <main className="min-h-screen pt-20">
      <ResellerPro />
    </main>
  );
}
