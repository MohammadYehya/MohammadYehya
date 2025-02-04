import { Box, BrainCircuit, BriefcaseBusiness, FileText, GraduationCap } from "lucide-react";

export const data = {
    UserData : {
        "name" : "Mohammad",
        "lastname" : "Yehya",
        "about" : "I'm a passionate Computer Vision and Machine Learning Engineer with a strong focus on creating intelligent systems that solve real-world problems. Currently, I'm in my final year, working on innovative projects involving context-aware anomaly detection, computer vision, and sequence verification.",
        "github" : "https://github.com/MohammadYehya",
        "linkedin" : "https://www.linkedin.com/in/mohammad-yehya/"
    },
    "NavItems" : [
        {
            "name": "Skills",
            "icon": <BrainCircuit className="scale-[60%]"/>,
            "href": "/Skills",
            "content":["C++", "Python"]
        },
        {
            "name": "Projects",
            "icon": <Box className="scale-[60%]"/>,
            "href": "/Projects",
            "content": {}
        },
        {
            "name": "Experience",
            "icon": <BriefcaseBusiness className="scale-[60%]"/>,
            "href": "/Experience",
            "content": {}
        },
        {
            "name": "Education",
            "icon": <GraduationCap className="scale-[60%]"/>,
            "href": "/Education",
            "content": {}
        },
        {
            "name": "Resumé",
            "icon": <FileText className="scale-[60%]"/>,
            "href": "/Resume",
            "content": {}
        }
    ]
}