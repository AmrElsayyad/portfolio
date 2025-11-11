import {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import {skillsSection} from "../../portfolio";
import "./SoftwareSkill.scss";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className={
                  "software-skill-inline" + (isDark ? " dark-mode" : "")
                }
                name={skills.skillName}
              >
                {skills.imageSrc ? (
                  <img
                    className="skill-svg"
                    src={skills.imageSrc}
                    alt={skills.skillName}
                  />
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
