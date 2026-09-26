import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, meta } from "@/components/content-page";
export const Route = createFileRoute("/terms")({ head: () => meta("Terms of Service | Lowyalty Brandingline", "The terms that apply to orders placed with Lowyalty Brandingline Ltd."), component: () => <ContentPage eyebrow="Policies" title="Terms of Service" intro="The terms that apply to orders placed with Lowyalty Brandingline Ltd."><p className="max-w-2xl leading-7 text-muted-foreground">Full details coming soon. Contact us with any questions.</p></ContentPage> });
