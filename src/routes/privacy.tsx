import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, meta } from "@/components/content-page";
export const Route = createFileRoute("/privacy")({ head: () => meta("Privacy Policy | Lowyalty Brandingline", "How we handle the details you share with us."), component: () => <ContentPage eyebrow="Policies" title="Privacy Policy" intro="How we handle the details you share with us."><p className="max-w-2xl leading-7 text-muted-foreground">Full details coming soon. Contact us with any questions.</p></ContentPage> });
