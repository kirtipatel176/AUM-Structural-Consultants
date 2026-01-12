export interface Project {
  id: string;
  name: string;
  location: string;
  area: string;
  structure: string;
  architect?: string;
  category: ProjectCategory;
  imageUrl: string;
  // Extended details
  description?: string;
  challenges?: string;
  solutions?: string;
  gallery?: string[];
  modelUrl?: string;
}

export enum ProjectCategory {
  ALL = 'All',
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  INDUSTRIAL = 'Industrial',
  HOSPITAL = 'Hospital',
  HOTEL = 'Hotel',
  INSTITUTIONAL = 'Institutional',
  PARTY_PLOT = 'Party Plot',
  PUBLIC_PARK = 'Public Park',
  CHIMNEY = 'Chimney'
}

export interface TeamMember {
  name: string;
  role: string; // Inferred as they are all leaders/associates
  education: string;
  description: string;
  imageUrl: string;
}

export interface Service {
  title: string;
  description: string;
  points: string[];
}