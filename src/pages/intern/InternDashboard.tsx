import InternLayout from "@/components/layouts/InternLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, CheckCircle, Clock, TrendingUp, Timer, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InternDashboard = () => {
  const internshipData = {
    role: "Web Development",
    duration: 30,
    daysRemaining: 18,
    daysCompleted: 12,
    progress: 40,
    completedTasks: 2,
    totalTasks: 5,
    totalHours: 78,
    completedHours: 20,
    status: "Active",
    startDate: "Jan 15, 2024",
    endDate: "Feb 14, 2024",
  };

  const upcomingTasks = [
    {
      week: 3,
      title: "Build a Responsive Landing Page",
      deadline: "Feb 5, 2024",
      estimatedHours: 10,
      status: "pending",
    },
    {
      week: 4,
      title: "Interactive Form Validation",
      deadline: "Feb 12, 2024",
      estimatedHours: 12,
      status: "locked",
    },
  ];

  const progressPercent = ((internshipData.duration - internshipData.daysRemaining) / internshipData.duration) * 100;
  const taskProgressPercent = (internshipData.completedTasks / internshipData.totalTasks) * 100;
  const hoursProgressPercent = (internshipData.completedHours / internshipData.totalHours) * 100;

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
                  <p className="text-xs text-muted-foreground mt-1">{internshipData.role}</p>
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
                  <p className="text-xs text-muted-foreground mt-1">of {internshipData.duration} days</p>
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
                  <p className="text-sm text-muted-foreground">Tasks Completed</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{internshipData.completedTasks}/{internshipData.totalTasks}</p>
                  <p className="text-xs text-muted-foreground mt-1">weekly tasks</p>
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
                  <p className="text-sm text-muted-foreground">Hours Logged</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{internshipData.completedHours} hrs</p>
                  <p className="text-xs text-muted-foreground mt-1">of {internshipData.totalHours} hrs total</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Timer className="w-5 h-5 text-warning" />
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
                <span className="text-muted-foreground">Time Progress</span>
                <span className="font-medium">{internshipData.daysCompleted} of {internshipData.duration} days ({Math.round(progressPercent)}%)</span>
              </div>
              <Progress value={progressPercent} className="h-3" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Task Completion</span>
                <span className="font-medium">{internshipData.completedTasks} of {internshipData.totalTasks} weeks ({Math.round(taskProgressPercent)}%)</span>
              </div>
              <Progress value={taskProgressPercent} className="h-3" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Hours Completed</span>
                <span className="font-medium">{internshipData.completedHours} of {internshipData.totalHours} hours ({Math.round(hoursProgressPercent)}%)</span>
              </div>
              <Progress value={hoursProgressPercent} className="h-3" />
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Current & Upcoming Tasks */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/intern/tasks">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 bg-secondary/30 rounded-xl ${task.status === "locked" ? "opacity-60" : ""}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ${
                    task.status === "pending" 
                      ? "gradient-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    W{task.week}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{task.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Due: {task.deadline}
                      </span>
                      <span className="flex items-center gap-1">
                        <Timer className="w-3 h-3" />
                        {task.estimatedHours} hrs
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className={`status-badge ${task.status === "pending" ? "status-pending" : "bg-muted text-muted-foreground"}`}>
                        <Clock className="w-3 h-3 mr-1" />
                        {task.status === "pending" ? "Pending" : "Locked"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certificate Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Certificate Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Certificate Locked</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete all {internshipData.totalTasks} weekly tasks and pay ₹100 to unlock your certificate.
                </p>
                
                <div className="space-y-3 text-left mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    {internshipData.completedTasks === internshipData.totalTasks ? (
                      <CheckCircle className="w-4 h-4 text-success" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                    )}
                    <span>Complete all tasks ({internshipData.completedTasks}/{internshipData.totalTasks})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                    <span>Pay certification fee (₹100)</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/intern/certificate">View Certificate Page</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Internship Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-semibold">{internshipData.startDate}</p>
              </div>
              <div className="flex-1 mx-6">
                <div className="relative">
                  <div className="h-2 bg-secondary rounded-full">
                    <div 
                      className="h-full gradient-primary rounded-full transition-all"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div 
                    className="absolute -top-1 w-4 h-4 bg-primary rounded-full border-2 border-background"
                    style={{ left: `calc(${progressPercent}% - 8px)` }}
                  />
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Day {internshipData.daysCompleted} of {internshipData.duration}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">End Date</p>
                <p className="font-semibold">{internshipData.endDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </InternLayout>
  );
};

export default InternDashboard;
