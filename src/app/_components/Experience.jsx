const Experience = () => {
    const experienceData = [
        {
            company: "Forty Degrees Celsius Inc.",
            link: "https://fdc-inc.com/",
            role: "Android Application Developer",
            period: "June 2020 - November 2023",
            location: "Cebu, Philippines",
            responsibilities: [
                "Maintained and updated a streaming application for the Japanese market.",
                "Reduced app crashes by 30% using Firebase Crashlytics.",
                "Implemented innovative features like revamped UI designs and streamer missions.",
                "Upgraded Bluetooth functionalities to support Android 12."
            ]
        },
        {
            company: "Time River Design Inc.",
            link: "https://www.linkedin.com/company/timeriver-design-inc/?originalSubdomain=ph",
            role: "Website Developer",
            period: "July 2019 - March 2020",
            location: "Cebu, Philippines",
            responsibilities: [
                "Developed custom front-end components using HTML, CSS, and JavaScript.",
                "Optimized WordPress site performance, reducing load time by 25%."
            ]
        },
        // {
        //     company: "Deerpoint Liquor Store",
        //     role: "Cashier / Stock Associate",
        //     period: "December 2019 - Present",
        //     location: "Calgary, Canada",
        //     responsibilities: [
        //         "Assisted customers with product inquiries and recommendations.",
        //         "Ensured compliance with alcohol sales regulations.",
        //         "Stocked, rotated, and organized inventory while maintaining store cleanliness."
        //     ]
        // },
        // {
        //     company: "London Drugs",
        //     role: "Customer Service Staff",
        //     period: "July 2024 - December 2024",
        //     location: "Calgary, Canada",
        //     responsibilities: [
        //         "Delivered efficient customer service in a fast-paced retail environment.",
        //         "Supported inventory stocking and merchandising operations."
        //     ]
        // },
        // {
        //     company: "Seafood City Winnipeg",
        //     role: "Grill City Staff",
        //     period: "November 2023 - March 2024",
        //     location: "Winnipeg, MB, Canada",
        //     responsibilities: [
        //         "Prepared food according to safety standards during peak hours.",
        //         "Maintained cleanliness of kitchen and dining areas."
        //     ]
        // },
        // {
        //     company: "University of San Carlos",
        //     role: "Library & Technical Support Staff",
        //     period: "2017 - 2019",
        //     location: "Cebu, Philippines",
        //     responsibilities: [
        //         "Assisted patrons with library services and basic technical support.",
        //         "Organized materials and maintained a quiet learning environment."
        //     ]
        // }
    ];

    return (
        <div className="mt-8 space-y-8 animate-fade-in">
            {experienceData.map((exp, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border last:before:bottom-8">
                    <div className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                <h3 className="text-lg font-bold primary-text leading-tight">{exp.company}</h3>
                            </a>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground opacity-70">
                                {exp.period}
                            </p>
                        </div>
                        <p className="font-semibold text-sm sub-text italic">{exp.role}</p>
                        <p className="text-xs text-muted-foreground opacity-60 mb-2">{exp.location}</p>
                        <ul className="space-y-1 mt-1">
                            {exp.responsibilities.map((req, i) => (
                                <li key={i} className="text-sm leading-relaxed secondary-text flex items-start gap-2">
                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
