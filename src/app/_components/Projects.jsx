const Projects = () => {
    const projectData = [
        {
            title: "Personal Website",
            description: "A responsive web application designed to showcase personality, knowledge, and experiences. Features a full-stack architecture with real-time capabilities.",
            tags: ["Next.js", "Flask", "PostgreSQL", "Socket.IO", "Express.js"],
            imageUrl: "/profile/me_2.png", // Using a fallback or available asset
            url: "https://github.com/mand0ng/personal-website",
            clickable: true
        },
        {
            title: "Fitness Web App",
            description: "AI-powered fitness application that generates personalized 30-day workout plans. Analyzes user metrics such as weight and height to produce progressive training regimens.",
            tags: ["AI", "Fitness", "Progressive Load", "React Native"],
            imageUrl: "/projects/fitness-app.png",
            url: "https://fitness-app.emmanuelpedroza.com/",
            clickable: true
        },
        {
            title: "Automated Liquor Sign Maker",
            description: "An innovative AI-powered tool that automates professional liquor signage creation. Generates dynamic designs and outputs live React code for final layouts.",
            tags: ["AI Generation", "Automation", "React", "UI/UX"],
            imageUrl: "https://plus.unsplash.com/premium_photo-1761260674879-ccd95f2316ab?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "https://liqour-sign-maker.emmanuelpedroza.com/",
            clickable: true
        }
    ];

    return (
        <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <i className="fa-solid fa-code-branch text-primary text-xl"></i>
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <div key={index} className="group relative bg-surface/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                        {project.clickable && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label={`View ${project.title}`}
                            />
                        )}
                        <div className="aspect-video bg-muted overflow-hidden relative">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 hidden items-center justify-center">
                                <i className={`fa-solid ${index === 0 ? 'fa-globe' : index === 1 ? 'fa-dumbbell' : 'fa-wine-bottle'} text-4xl opacity-30`} />
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-bold primary-text leading-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                {project.clickable && (
                                    <i className="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity" />
                                )}
                            </div>
                            <p className="text-xs md:text-sm secondary-text leading-relaxed mb-6 opacity-90 flex-1">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-muted rounded-md opacity-70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
