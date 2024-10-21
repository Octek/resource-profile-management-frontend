
import { Skill } from "~/modules/user/interfaces/user.interface";
export const experienceKeyPoints: string[] = [
  "Requirement specifications gathering and analysis;",
  "Business Processes automation",
  "Building complex workflows for data integration in heterogeneous systems using tools such as Talend Open Studio for Data Integration",
  "ETL Processes",
  "Implementation of different Enterprise Integration Patterns, such as guaranteed delivery and publish-subscribe on top of WSO2 middleware",
  "SOAP and REST web service consumption",
  "Developing web applications using JSP Technologies.",
];

export const userTechnologies: any[] = [
  "React.js",
  "TypeScript",
  "Redux.js",
  "NgRx",
  "Next.js",
];

export const mainSkills: string[] = ["React.js", "TypeScript", "Redux.js"];
export const otherSkills: string[] = [
  "JavaScript",
  "NgRx",
  "Next.js",
  "RxJs",
  "API",
];

export const allTechnologies: string[] = [
  "React.js",
  "TypeScript",
  "Redux.js",
  "Angular",
  "JavaScript",
  "NgRx",
  "Next.js",
  "RxJs",
  "API",
];




export const userJsonResponse = {
  status_code: 200,
  message: "Success",
  data: {
    id: 25,
    first_name: "Hannah",
    last_name: "Bridge",
    email: "hannah.Bridge@example.com",
    mobile_number: "+19876543210",
    bio: "Front-end developer with expertise in React and modern JavaScript frameworks.",
    job_title: "Project Manager",
    location: "",
    video_url: "",
    certifications: "",
    user_category_id: 5,
    user_category: {
      id: 5,
      name: "Data Science",
      created_at: "2024-10-16T13:25:26.230298+05:00",
      updated_at: "2024-10-16T13:25:26.230298+05:00"
    },
    educations: [
      {
        id: 2,
        user_id: 25,
        institution_name: "Harvard University",
        degree: "Bachelor of Science",
        field_of_study: "Computer Science",
        achievements: "Dean's List, Honors Graduate",
        start_date: "2018-09-01T05:00:00+05:00",
        end_date: "2022-06-15T05:00:00+05:00",
        created_at: "2024-10-17T19:18:12.175243+05:00",
        updated_at: "2024-10-17T19:18:12.175243+05:00"
      }
    ],
    bookings: [
      {
        id: 1,
        user_id: 25,
        booking_date_time: "2024-10-17T15:30:00+05:00",
        meeting_link: "https://example.com/meeting-link",
        question_options: null,
        deleted_at: null,
        created_at: "2024-10-17T19:26:22.196032+05:00",
        updated_at: "2024-10-17T19:26:22.196032+05:00"
      }
    ],
    roles: [
      {
        id: 2,
        name: "User",
        created_at: "2024-10-16T12:50:18.072334+05:00",
        updated_at: "2024-10-16T12:50:18.072334+05:00"
      }
    ],
    skills: [
      {
        id: 7,
        name: "Programming",
        icon: "icon_programming.png",
        skill_category_id: 3,
        skill_category: {
          id: 3,
          name: "Soft Skills",
          created_at: "2024-10-17T19:38:14.791563+05:00",
          updated_at: "2024-10-17T19:38:14.791563+05:00"
        },
        bookings: null,
        deleted_at: null,
        created_at: "2024-10-17T19:39:52.346233+05:00",
        updated_at: "2024-10-17T19:39:52.346233+05:00"
      }
    ],
    experiences: [
      {
        id: 13,
        position: "QA Engineer",
        company: "Tech Innovations Inc.",
        description: "Developed and maintained web applications.",
        start_date: "2023-01-15T05:00:00+05:00",
        end_date: "2023-06-30T05:00:00+05:00",
        is_currently_working: false,
        responsibilities: [
          "Coding",
          "Testing",
          "Debugging",
          "Documentation"
        ],
        skills: [
          {
            id: 7,
            name: "Programming",
            icon: "icon_programming.png",
            bookings: null,
            deleted_at: null,
            created_at: "2024-10-17T19:39:52.346233+05:00",
            updated_at: "2024-10-17T19:39:52.346233+05:00"
          }
        ],
        deleted_at: null,
        created_at: "2024-10-21T13:11:49.678828+05:00",
        updated_at: "2024-10-21T13:11:49.678828+05:00"
      },
    ],
    projects: [
      {
        id: 1,
        name: "Project Alpha",
        description: "A project focused on building a web application.",
        link: "https://project-alpha.com",
        technologies: "HTML, CSS, JavaScript",
        deleted_at: null,
        created_at: "2024-10-17T19:44:27.188172+05:00",
        updated_at: "2024-10-17T19:44:27.188172+05:00"
      },
      {
        id: 2,
        name: "Project Beta",
        description: "An innovative mobile application for task management.",
        link: "https://project-beta.com",
        technologies: "React Native, Node.js",
        deleted_at: null,
        created_at: "2024-10-17T19:44:27.188172+05:00",
        updated_at: "2024-10-17T19:44:27.188172+05:00"
      },
      {
        id: 3,
        name: "Project Gamma",
        description: "A data analytics tool for businesses.",
        link: "https://project-gamma.com",
        technologies: "Python, Pandas, SQL",
        deleted_at: null,
        created_at: "2024-10-17T19:44:27.188172+05:00",
        updated_at: "2024-10-17T19:44:27.188172+05:00"
      }
    ],
    deleted_at: null,
    created_at: "2024-10-21T13:48:12.422337+05:00",
    updated_at: "2024-10-21T13:48:12.422337+05:00"
  }
};
export const calculateDuration = (startDate: string, isCurrentlyWorking: boolean, endDate?: string) => {
  // If the user is currently working, return "Present"
  if (isCurrentlyWorking) {
    return "Present";
  }
  const start = new Date(startDate);
  const end = isCurrentlyWorking ? new Date() : new Date(endDate || '');

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }
  // Construct the duration string
  const duration = `${years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''} ${months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''}`.trim();
  
  return duration.length > 0 ? duration : "Less than a month"; // Handle cases where duration is zero
  // return `${years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''} ${months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''}`.trim();
};
// dateHelpers.ts
export const getYearRange = (startDate: string, endDate: string | null): string => {
  const startYear = new Date(startDate).getFullYear();
  const endYear = endDate ? new Date(endDate).getFullYear() : "Present"; // Use "Present" if endDate is null
  return `${startYear} - ${endYear}`;
};


// Function to group skills by their category
export const groupSkillsByCategory = (skills: Skill[]) => {
  return skills.reduce((acc: Record<string, Skill[]>, skill) => {
    const categoryName = skill.skill_category.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(skill);
    return acc;
  }, {});
};

