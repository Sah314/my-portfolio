import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionProps = {
  children: React.ReactNode;
};
export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};