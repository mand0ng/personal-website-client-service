const Education = () => {
    const educationData = [
        {
            school: "Southern Alberta Institute of Technology (SAIT)",
            schoolLink: "https://www.sait.ca/",
            degree: "Software Development Diploma",
            link: "https://www.sait.ca/programs-and-courses/diplomas/software-development",
            period: "2025 - 2027",
            location: "Calgary, AB, Canada",
            description: "Currently pursuing a diploma in Software Development, focusing on web development, object-oriented programming, and databases.",
            logo: "/profile/sait.png"
        },
        {
            school: "University of San Carlos",
            schoolLink: "https://usc.edu.ph/",
            degree: "Bachelor of Science in Information and Communications Technology",
            link: "https://usc.edu.ph/catholic-educational-institution-academics/departments/department-of-computer-information-sciences-and-mathematics#:~:text=Information%20and%20Communications%20Technology",
            period: "2013 - 2019",
            location: "Cebu, Philippines",
            description: "Gained a solid foundation in ICT, focusing on web development, programming, and system analysis.",
            logo: "/profile/usc-logo.png"
        }
    ];

    return (
        <div className="mt-8 space-y-8 animate-fade-in">
            {educationData.map((edu, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border last:before:bottom-8">
                    <div className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                {edu.logo && <img src={edu.logo} alt={edu.school} className="w-6 h-6 object-contain" />}
                                <a href={edu.schoolLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <h3 className="text-lg font-bold primary-text leading-tight">{edu.school}</h3>
                                </a>
                            </div>
                            <p className="font-semibold text-sm sub-text mb-2 italic hover:underline">
                                <a href={edu.link} target="_blank" rel="noopener noreferrer">
                                    {edu.degree}
                                    <i className="fa-solid fa-arrow-up-right-from-square ml-1.5 text-[10px] opacity-70" />
                                </a>
                            </p>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3 opacity-70">
                                {edu.period} • {edu.location}
                            </p>
                            <p className="text-sm leading-relaxed secondary-text">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;