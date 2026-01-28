import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Eye, MoreVertical } from "lucide-react";
import { useState } from "react";

const internsData = [
  { id: 1, name: "Anita Patel", email: "anita@example.com", role: "Data Analyst", duration: "30 days", startDate: "Jan 15, 2024", progress: 75, tasksCompleted: 3, totalTasks: 4, status: "active" },
  { id: 2, name: "Arjun Reddy", email: "arjun@example.com", role: "Python Development", duration: "30 days", startDate: "Jan 20, 2024", progress: 50, tasksCompleted: 2, totalTasks: 4, status: "active" },
  { id: 3, name: "Kavitha Menon", email: "kavitha@example.com", role: "Web Development", duration: "45 days", startDate: "Jan 10, 2024", progress: 100, tasksCompleted: 6, totalTasks: 6, status: "completed" },
  { id: 4, name: "Rohit Sharma", email: "rohit@example.com", role: "UI/UX Design", duration: "30 days", startDate: "Jan 25, 2024", progress: 25, tasksCompleted: 1, totalTasks: 4, status: "active" },
  { id: 5, name: "Sneha Gupta", email: "sneha@example.com", role: "Web Development", duration: "30 days", startDate: "Dec 15, 2023", progress: 100, tasksCompleted: 4, totalTasks: 4, status: "completed" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <span className="status-badge status-approved">Completed</span>;
    default:
      return <span className="status-badge status-submitted">Active</span>;
  }
};

const AdminInterns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredInterns = internsData.filter((intern) => {
    const matchesSearch = intern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || intern.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Interns</h1>
          <p className="text-muted-foreground">Manage and track all active and completed interns</p>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Intern</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInterns.map((intern) => (
                    <TableRow key={intern.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                            {intern.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium">{intern.name}</p>
                            <p className="text-sm text-muted-foreground">{intern.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{intern.role}</TableCell>
                      <TableCell>{intern.duration}</TableCell>
                      <TableCell>{intern.startDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ width: `${intern.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {intern.tasksCompleted}/{intern.totalTasks}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(intern.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminInterns;
