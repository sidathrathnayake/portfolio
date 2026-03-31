import {
    AboutMe,
    Education,
    Experience,
    ExtraActivities,
    PersonalSkills,
    Projects,
    TechnicalSkills,
} from "@/components/tabs";
import { TabMenu } from "@/enum/tab"

export const fetchActiveTabContent = (activeTab: string) => {
    switch (activeTab) {
        case TabMenu.ABOUT_ME:
            return <AboutMe />;
        case TabMenu.TECHNICAL_SKILLS:
            return <TechnicalSkills />;
        case TabMenu.PERSONAL_SKILLS:
            return <PersonalSkills />;
        case TabMenu.PROJECTS:
            return <Projects />;
        case TabMenu.EXPERIENCE:
            return <Experience />;
        case TabMenu.EDUCATION:
            return <Education />;
        case TabMenu.EXTRA_ACTIVITIES:
            return <ExtraActivities />;
        default:
            return null;
    }
}