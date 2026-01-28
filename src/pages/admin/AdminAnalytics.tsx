import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, FileText, IndianRupee, Award, Briefcase } from "lucide-react";

const monthlyData = [
  { month: "Aug", applications: 85, interns: 42, revenue: 4200 },
  { month: "Sep", applications: 120, interns: 68, revenue: 6800 },
  { month: "Oct", applications: 145, interns: 82, revenue: 8200 },
  { month: "Nov", applications: 168, interns: 95, revenue: 9500 },
  { month: "Dec", applications: 195, interns: 112, revenue: 11200 },
  { month: "Jan", applications: 247, interns: 142, revenue: 14200 },
];

const roleDistribution = [
  { role: "Web Development", count: 145, percentage: 42 },
  { role: "Python Development", count: 98, percentage: 28 },
  { role: "Data Analyst", count: 62, percentage: 18 },
  { role: "UI/UX Design", count: 42, percentage: 12 },
];

const AdminAnalytics = () => {
  const totalApplications = monthlyData.reduce((sum, m) => sum + m.applications, 0);
  const totalInterns = monthlyData.reduce((sum, m) => sum + m.interns, 0);
  const totalRevenue = monthlyData.reduce((sum, m) => sum + m.revenue, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Insights and statistics about your internship program</p>
        </div>

        {/* Summary Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Applications</p>
                  <p className="text-2xl font-bold mt-1">{totalApplications.toLocaleString()}</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +26% growth
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Interns</p>
                  <p className="text-2xl font-bold mt-1">{totalInterns.toLocaleString()}</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +27% growth
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <div className="flex items-center gap-1 text-2xl font-bold mt-1">
                    <IndianRupee className="w-5 h-5" />
                    <span>{totalRevenue.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +27% growth
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <IndianRupee className="w-5 h-5 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-2xl font-bold mt-1">57%</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +5% improvement
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Monthly Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Monthly Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data) => (
                  <div key={data.month} className="flex items-center gap-4">
                    <div className="w-10 text-sm font-medium text-muted-foreground">
                      {data.month}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div 
                          className="h-6 bg-primary rounded-md transition-all"
                          style={{ width: `${(data.applications / 250) * 100}%` }}
                        />
                        <span className="text-sm font-medium">{data.applications}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">Applications per month</p>
              </div>
            </CardContent>
          </Card>

          {/* Role Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Interns by Role</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roleDistribution.map((role) => (
                  <div key={role.role}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{role.role}</span>
                      <span className="text-sm text-muted-foreground">{role.count} ({role.percentage}%)</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-primary rounded-full transition-all"
                        style={{ width: `${role.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary/30 rounded-xl">
                <Briefcase className="w-8 h-8 text-primary mb-3" />
                <p className="font-medium">Most Popular</p>
                <p className="text-sm text-muted-foreground">Web Development with 42% of applications</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-xl">
                <TrendingUp className="w-8 h-8 text-success mb-3" />
                <p className="font-medium">Highest Growth</p>
                <p className="text-sm text-muted-foreground">26% increase in applications this month</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-xl">
                <Award className="w-8 h-8 text-warning mb-3" />
                <p className="font-medium">Completion Rate</p>
                <p className="text-sm text-muted-foreground">95% of interns complete their program</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-xl">
                <Users className="w-8 h-8 text-primary mb-3" />
                <p className="font-medium">Avg. Duration</p>
                <p className="text-sm text-muted-foreground">32 days average internship duration</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
