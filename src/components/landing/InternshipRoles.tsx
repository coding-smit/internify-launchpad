import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Code, Database, BarChart3, Palette, Clock, Users } from "lucide-react";

const internships = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    description: "Build modern web applications using React, Node.js, and cutting-edge technologies.",
    skills: ["React", "JavaScript", "CSS", "Node.js"],
    spots: 25,
  },
  {
    id: "python",
    title: "Python Development",
    icon: Database,
    description: "Master Python programming with real-world projects in automation and backend development.",
    skills: ["Python", "Django", "APIs", "Databases"],
    spots: 20,
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    icon: BarChart3,
    description: "Learn data analysis, visualization, and derive insights from complex datasets.",
    skills: ["Excel", "SQL", "Python", "Tableau"],
    spots: 15,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: Palette,
    description: "Design beautiful, user-centric interfaces and create seamless user experiences.",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    spots: 18,
  },
];

const InternshipRoles = () => {
  return (
    <section id="internships" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg text-muted-foreground">
            Select from our curated internship programs designed to kickstart your career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {internships.map((internship, index) => (
            <Card 
              key={internship.id} 
              className="hover-lift border-border/50 bg-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <internship.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {internship.title}
                </h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground text-sm mb-4">
                  {internship.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {internship.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>30 / 45 days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{internship.spots} spots</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full" asChild>
                  <Link to="https://docs.google.com/forms/d/e/1FAIpQLScwwoGO2uGfPbMj3QhdTkTq8Zrh5Tvf3aIj8DpIj5p1hyM7tw/viewform?usp=header">Apply Now</Link>
                  {/* <Link to={`/apply?role=${internship.id}`}>Apply Now</Link> */}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipRoles;
