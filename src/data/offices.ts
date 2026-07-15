export type Office = {
  city: string;
  status: "active" | "opening-soon";
};

export const OFFICES: Office[] = [
  { city: "Lagos", status: "active" },
  { city: "Ibadan", status: "active" },
  { city: "Nairobi", status: "opening-soon" },
  { city: "London Satellite", status: "opening-soon" },
];
