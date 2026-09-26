import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, meta } from "@/components/content-page";
export const Route = createFileRoute("/faq")({ head: () => meta("Frequently Asked Questions | Lowyalty Brandingline", "Answers to common questions about ordering print and branding."), component: () => <ContentPage eyebrow="Help" title="Frequently Asked Questions" intro="Answers to common questions about ordering print and branding."><p className="max-w-2xl leading-7 text-muted-foreground">Full details coming soon. Contact us with any questions.</p></ContentPage> });
