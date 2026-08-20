import { create } from "zustand";
import { aboutHighlights, AboutHighlight, exploringText, bioParagraphs } from "../dummy-data/aboutData";
import { clientsData, Client } from "../dummy-data/clientsData";
import { servicesData, ServiceItem } from "../dummy-data/servicesData";
import { industriesData, IndustryItem } from "../dummy-data/industriesData";
import {
  coreLanguages,
  mobileCrossPlatform,
  dataStorage,
  backendIntegrations,
  toolsDelivery,
  aiIntelligence,
  TechItem
} from "../dummy-data/techStackData";
import { collaborationOptions, CollaborationOption } from "../dummy-data/workTogetherData";
import { experiencesData, ExperienceItem, educationData, EducationItem } from "../dummy-data/experienceData";

interface PortfolioState {
  aboutHighlights: AboutHighlight[];
  exploringText: string;
  bioParagraphs: string[];
  clients: Client[];
  services: ServiceItem[];
  industries: IndustryItem[];
  techStack: {
    coreLanguages: TechItem[];
    mobileCrossPlatform: TechItem[];
    dataStorage: TechItem[];
    backendIntegrations: TechItem[];
    toolsDelivery: TechItem[];
    aiIntelligence: TechItem[];
  };
  collaborationOptions: CollaborationOption[];
  experiences: ExperienceItem[];
  education: EducationItem;
}

export const usePortfolioStore = create<PortfolioState>(() => ({
  aboutHighlights,
  exploringText,
  bioParagraphs,
  clients: clientsData,
  services: servicesData,
  industries: industriesData,
  techStack: {
    coreLanguages,
    mobileCrossPlatform,
    dataStorage,
    backendIntegrations,
    toolsDelivery,
    aiIntelligence,
  },
  collaborationOptions,
  experiences: experiencesData,
  education: educationData,
}));
