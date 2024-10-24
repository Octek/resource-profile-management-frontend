/* eslint-disable @typescript-eslint/naming-convention */
export interface UserExperienceCardProps {
  position: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string;
  is_currently_working: boolean;
  isFirstElement: boolean;
  isLastElement: boolean;
  skills: Skill[];
  responsibilities: string[];
}

export interface UserEducationCardProps {
  institution_name: string;
  degree: string;
  field_of_study: string;
  achievements: string;
  start_date: string;
  end_date: string;
  isFirstElement: boolean;
  isLastElement: boolean;
}

export interface UserSkillDataProps {
  skill: Skill;
}

export interface UserCategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Education {
  id: number;
  user_id: number;
  institution_name: string;
  degree: string;
  field_of_study: string;
  achievements: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: number;
  user_id: number;
  booking_date_time: string;
  meeting_link: string;
  question_options: any | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
export interface SkillCategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  skill_category_id: number;
  skill_category: SkillCategory;
  bookings: any | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string;
  is_currently_working: boolean;
  skills: any | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  responsibilities: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  technologies: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  job_title: string;
  email: string;
  mobile_number: string;
  bio: string;
  location: string;
  video_url: string;
  certifications: string;
  user_category_id: number;
  user_category: UserCategory;
  educations: Education[];
  bookings: Booking[];
  roles: Role[];
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}
export interface UserInfoProps {
  name: string;
  job_title: string;
  bio: string;
}
export interface UserAvatarProps {
  name: string;
  avatar: string;
}
