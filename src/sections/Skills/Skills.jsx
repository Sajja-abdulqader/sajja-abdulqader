import React from "react";
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="Skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Next.js" />
        </div>
        <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Visual Studio" />
        <SkillList src={checkMarkIcon} skill="NetBeans" />
      </div>
    </section>
  );
}

export default Skills;
