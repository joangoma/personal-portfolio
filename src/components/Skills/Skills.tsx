import { AboutMeSkillsElement } from "../Skills/TechnicalElement";
import { codingPopUp, workingExperiencePopUp, awardsAndAchievements } from "../webContent";
import "boxicons";

export const Skills = () => {

    return (
        <div className="bg-gray-200 justify-center py-16" id="skills">
            <div className="mx-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl  text-center mb-12 font-bold tracking-tight text-gray-900">
                    Technical skills & Work experience
                </h2>
                <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center mb-4 space-y-4 lg:space-y-0">
                    <AboutMeSkillsElement data={codingPopUp} icon='bx-code-block'></AboutMeSkillsElement>
                    <AboutMeSkillsElement data={awardsAndAchievements} icon='bx-award'></AboutMeSkillsElement>
                    <AboutMeSkillsElement data={workingExperiencePopUp} icon='bxs-briefcase'></AboutMeSkillsElement>
                </div>

            </div>
        </div>
    );
};
