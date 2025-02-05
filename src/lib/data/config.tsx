import { Box, BrainCircuit, BriefcaseBusiness, FileText, GraduationCap } from "lucide-react";

export const data = {
    UserData : {
        "name" : "Mohammad",
        "lastname" : "Yehya",
        "about" : "I'm a passionate Computer Vision and Machine Learning Engineer with a strong focus on creating intelligent systems that solve real-world problems. Currently, I'm in my final year, working on innovative projects involving context-aware anomaly detection, computer vision, and sequence verification.",
        "github" : "https://github.com/MohammadYehya",
        "linkedin" : "https://www.linkedin.com/in/mohammad-yehya/"
    },
    "NavItems" : {
        "Skills": {
            "name": "Skills",
            "icon": <BrainCircuit className="scale-[60%]"/>,
            "href": "/Skills",
            "content":[{"title": 'test'}]
        },
        "Projects": {
            "name": "Projects",
            "icon": <Box className="scale-[60%]"/>,
            "href": "/Projects",
            "content": [{"title": 'Test', "type": 'Test', 'description' : 'Test'}]
        },
        "Experience": {
            "name": "Experience",
            "icon": <BriefcaseBusiness className="scale-[60%]"/>,
            "href": "/Experience",
            "content": [{"title": 'test'}]
        },
        "Education": {
            "name": "Education",
            "icon": <GraduationCap className="scale-[60%]"/>,
            "href": "/Education",
            "content": [{"title": 'test'}]
        },
        "Resume": {
            "name": "Resumé",
            "icon": <FileText className="scale-[60%]"/>,
            "href": "/Resume",
            "content": [{"title": 'test'}]
        }
    }
}