import InternLayout from "@/components/layouts/InternLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Briefcase, Calendar, CheckCircle, Clock, TrendingUp } from "lucide-react";

const InternDashboard = () => {
  const internshipData = {
    role: "Web Development",
    duration: 30,
    daysRemaining: 18,
    progress: 40,
    completedTasks: 2,
    totalTasks: 5,
    status: "Active",
  };

  const progressPercent = ((internshipData.duration - internshipData.daysRemaining) / internshipData.duration) * 100;

  return (
    <InternLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground">Here's an overview of your internship progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Internship Status</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{internshipData.status}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Days Remaining</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{internshipData.daysRemaining} days</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed Tasks</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{internshipData.completedTasks}/{internshipData.totalTasks}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Progress</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{internshipData.progress}%</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Internship Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Overall Completion</span>
                <span className="font-medium">{internshipData.progress}%</span>
              </div>
              <Progress value={internshipData.progress} className="h-3" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Time Progress</span>
                <span className="font-medium">{Math.round(progressPercent)}%</span>
              </div>
              <Progress value={progressPercent} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Current Task */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Week Task</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                W3
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Build a Responsive Landing Page</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Create a fully responsive landing page using HTML, CSS, and JavaScript with modern design principles.
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="status-badge status-pending">
                    <Clock className="w-3 h-3 mr-1" />
                    Pending
                  </span>
                  <span className="text-xs text-muted-foreground">Due: Feb 5, 2024</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </InternLayout>
  );
};

export default InternDashboard;
