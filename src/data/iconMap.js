import { skills } from './skills'

export const iconMap = skills.reduce((acc, skill) => {
    acc[skill.id] = skill.img;
    return acc;
}, {});