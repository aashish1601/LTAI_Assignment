import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/Deck";

export const Route = createFileRoute("/")({
  component: () => <Deck />,
});
