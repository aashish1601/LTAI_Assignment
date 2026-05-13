import type { ComponentType } from "react";
import { ScaleSlide } from "./slides/ScaleSlide";
import { LocationSlide } from "./slides/LocationSlide";
import { PropertySlide } from "./slides/PropertySlide";
import { RetailSlide } from "./slides/RetailSlide";
import { LuxurySlide } from "./slides/LuxurySlide";
import { DiningSlide } from "./slides/DiningSlide";
import { AttractionsSlide } from "./slides/AttractionsSlide";
import { EventsSlide } from "./slides/EventsSlide";
import { SponsorshipSlide } from "./slides/SponsorshipSlide";
import { CtaSlide } from "./slides/CtaSlide";
import { OverviewSlide } from "./slides/OverviewSlide";

export type Slide = { id: string; label: string; component: ComponentType };

export const SLIDES: Slide[] = [
  { id: "overview", label: "Overview", component: OverviewSlide },
  { id: "scale", label: "Scale", component: ScaleSlide },
  { id: "location", label: "Location", component: LocationSlide },
  { id: "property", label: "Property", component: PropertySlide },
  { id: "retail", label: "Retail", component: RetailSlide },
  { id: "luxury", label: "Luxury", component: LuxurySlide },
  { id: "dining", label: "Dining", component: DiningSlide },
  { id: "attractions", label: "Entertainment", component: AttractionsSlide },
  { id: "events", label: "Events", component: EventsSlide },
  { id: "sponsorship", label: "Sponsorship", component: SponsorshipSlide },
  { id: "contact", label: "Contact", component: CtaSlide },
];
