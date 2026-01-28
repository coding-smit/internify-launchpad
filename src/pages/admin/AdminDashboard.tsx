import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, CheckCircle, IndianRupee, TrendingUp, Clock, Award, Briefcase } from "lucide-react";

const statsData = [
  {
    title: "Total Applications",
    value: "1,247",
    change: "+12%",
    icon: FileText,
    color: "primary",
  },
  {
    title: "Active Interns",
    value: "342",
    change: "+8%",
    icon: Users,
    color: "success",
  },
  {
    title: "Completed Internships",
    value: "856",
    change: "+23%",
    icon: CheckCircle,
    color: "warning",
  },
  {
    title: "Total Revenue",
    value: "₹85,600",
    change: "+18%",
    icon: IndianRupee,
    color: "primary",
  },
];

const recentApplications = [
  { id: 1, name: "Priya Sharma", role: "Web Development", date: "2 hours ago", status: "pending" },
  { id: 2, name: "Rahul Kumar", role: "Python Development", date: "4 hours ago", status: "pending" },
  { id: 3, name: "Anita Patel", role: "Data Analyst", date: "6 hours ago", status: "approved" },
  { id: 4, name: "Vikram Singh", role: "UI/UX Design", date: "8 hours ago", status: "pending" },
  { id: 5, name: "Meera Joshi", role: "Web Development", date: "1 day ago", status: "rejected" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "approved":
      return <span className="status-badge status-approved">Approved</span>;
    case "rejected":
      return <span className="status-badge status-rejected">Rejected</span>;
    default:
      return <span className="status-badge status-pending">Pending</span>;
  }
};

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <Card key={stat.title} className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-success mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    stat.color === "primary" ? "bg-primary/10" :
                    stat.color === "success" ? "bg-success/10" :
                    "bg-warning/10"
                  }`}>
                    <stat.icon className={`w-5 h-5 ${
                      stat.color === "primary" ? "text-primary" :
                      stat.color === "success" ? "text-success" :
                      "text-warning"
                    }`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Applications */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent Applications</CardTitle>
              <a href="/admin/applications" className="text-sm text-primary hover:underline">
                View all
              </a>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((app) => (
                  <div 
                    key={app.id} 
                    className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {app.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{app.name}</p>
                        <p className="text-sm text-muted-foreground">{app.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(app.status)}
                      <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="/admin/applications" 
                  className="p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-3">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="font-medium">Review Applications</p>
                  <p className="text-xs text-muted-foreground">23 pending</p>
                </a>
                <a 
                  href="/admin/tasks" 
                  className="p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-3">
                    <Clock className="w-6 h-6 text-success" />
                  </div>
                  <p className="font-medium">Manage Tasks</p>
                  <p className="text-xs text-muted-foreground">15 submissions</p>
                </a>
                <a 
                  href="/admin/certificates" 
                  className="p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-warning" />
                  </div>
                  <p className="font-medium">Issue Certificates</p>
                  <p className="text-xs text-muted-foreground">8 ready</p>
                </a>
                <a 
                  href="/admin/interns" 
                  className="p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium">View Interns</p>
                  <p className="text-xs text-muted-foreground">342 active</p>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
