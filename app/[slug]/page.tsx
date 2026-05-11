import { notFound } from "next/navigation";
import { PublicPage } from "@/components/PublicPage";
const slugs = [
  "how-it-works",
  "for-clients",
  "for-professionals",
  "for-contractors",
  "for-freelancers",
  "ai-workflows",
  "knowledge",
  "pricing-placeholder",
  "login",
  "register",
];
export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}
export default function Page({ params }: { params: { slug: string } }) {
  if (!slugs.includes(params.slug)) notFound();
  return <PublicPage slug={params.slug} />;
}
