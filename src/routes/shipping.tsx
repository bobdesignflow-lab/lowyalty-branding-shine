import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, meta } from "@/components/content-page";
export const Route = createFileRoute("/shipping")({ head: () => meta("Delivery Information | Lowyalty Brandingline", "How and where we deliver your print and branding orders."), component: () => <ContentPage eyebrow="Help" title="Delivery Information" intro="How and where we deliver your print and branding orders."><p className="max-w-2xl leading-7 text-muted-foreground">Full details coming soon. Contact us with any questions.</p></ContentPage> });
