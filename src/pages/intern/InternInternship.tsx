import InternLayout from "@/components/layouts/InternLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Calendar, Clock, CheckCircle, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const InternInternship = () => {
  const internshipData = {
    role: "Web Development",
    startDate: "January 15, 2024",
    endDate: "February 14, 2024",
    duration: 30,
    daysRemaining: 18,
    daysCompleted: 12,
    mentor: "Rahul Kumar",
    status: "Active",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
  };

  const progressPercent = (internshipData.daysCompleted / internshipData.duration) * 100;

  return (
    <InternLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Internship</h1>
          <p className="text-muted-foreground">View your internship details and progress</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                  <Code className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{internshipData.role} Internship</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {internshipData.duration} Days Program
                  </p>
                </div>
                <span className="status-badge status-approved">{internshipData.status}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    Start Date
                  </div>
                  <p className="font-medium">{internshipData.startDate}</p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    End Date
                  </div>
                  <p className="font-medium">{internshipData.endDate}</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Duration Progress</span>
                  <span className="font-medium">{internshipData.daysCompleted} of {internshipData.duration} days</span>
                </div>
                <Progress value={progressPercent} className="h-3" />
              </div>

              <div>
                <h4 className="font-medium mb-3">Skills You'll Learn</h4>
                <div className="flex flex-wrap gap-2">
                  {internshipData.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side Stats */}
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Days Remaining</p>
                    <p className="text-2xl font-bold">{internshipData.daysRemaining}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Days Completed</p>
                    <p className="text-2xl font-bold">{internshipData.daysCompleted}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-warning" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Certificate</p>
                    <p className="text-sm font-medium text-muted-foreground">Unlocks after completion</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </InternLayout>
  );
};

export default InternInternship;
