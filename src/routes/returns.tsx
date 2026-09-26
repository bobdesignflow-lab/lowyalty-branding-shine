import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, meta } from "@/components/content-page";
export const Route = createFileRoute("/returns")({ head: () => meta("Returns Policy | Lowyalty Brandingline", "How we handle reprints and returns on custom print orders."), component: () => <ContentPage eyebrow="Policies" title="Returns Policy" intro="How we handle reprints and returns on custom print orders."><p className="max-w-2xl leading-7 text-muted-foreground">Full details coming soon. Contact us with any questions.</p></ContentPage> });
