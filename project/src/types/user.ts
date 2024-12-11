export interface User {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatarUrl?: string;
  yearsExperience: number;
  skills: string[];
  certifications: string[];
  isActive: boolean;
}