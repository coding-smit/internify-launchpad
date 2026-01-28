import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Check, X, Eye, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const tasksData = [
  { id: 1, week: 1, title: "Set Up Development Environment", role: "Web Development", deadline: "Jan 20, 2024", submissions: 45, pending: 5, approved: 38, rejected: 2 },
  { id: 2, week: 2, title: "Create a Static Portfolio Page", role: "Web Development", deadline: "Jan 27, 2024", submissions: 42, pending: 8, approved: 32, rejected: 2 },
  { id: 3, week: 3, title: "Build a Responsive Landing Page", role: "Web Development", deadline: "Feb 5, 2024", submissions: 28, pending: 15, approved: 12, rejected: 1 },
  { id: 4, week: 1, title: "Python Basics & Syntax", role: "Python Development", deadline: "Jan 20, 2024", submissions: 35, pending: 3, approved: 30, rejected: 2 },
  { id: 5, week: 1, title: "Excel Data Analysis", role: "Data Analyst", deadline: "Jan 20, 2024", submissions: 20, pending: 2, approved: 17, rejected: 1 },
];

const recentSubmissions = [
  { id: 1, intern: "Priya Sharma", task: "Responsive Landing Page", submittedAt: "2 hours ago", status: "pending" },
  { id: 2, intern: "Rahul Kumar", task: "Python Basics", submittedAt: "4 hours ago", status: "pending" },
  { id: 3, intern: "Anita Patel", task: "Excel Analysis", submittedAt: "6 hours ago", status: "approved" },
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

const AdminTasks = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateTask = () => {
    setIsDialogOpen(false);
    toast({
      title: "Task Created",
      description: "The new task has been added successfully.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Tasks Management</h1>
            <p className="text-muted-foreground">Create and manage weekly tasks for interns</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero">
                <Plus className="w-4 h-4 mr-2" />
                Create Task
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Internship Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="python">Python Development</SelectItem>
                      <SelectItem value="data">Data Analyst</SelectItem>
                      <SelectItem value="uiux">UI/UX Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Week Number</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select week" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((week) => (
                        <SelectItem key={week} value={week.toString()}>Week {week}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Task Title</Label>
                  <Input placeholder="Enter task title" />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea placeholder="Describe the task requirements" rows={3} />
                </div>
                <div className="space-y-2">
                  <Label>Deadline</Label>
                  <Input type="date" />
                </div>
                <Button variant="hero" className="w-full" onClick={handleCreateTask}>
                  Create Task
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Tasks Table */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">All Tasks</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Submissions</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tasksData.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">Week {task.week}: {task.title}</p>
                          </div>
                        </TableCell>
                        <TableCell>{task.role}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="w-3 h-3" />
                            {task.deadline}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-success">{task.approved}✓</span>
                            <span className="text-warning">{task.pending}⏳</span>
                            <span className="text-destructive">{task.rejected}✗</span>
                          </div>
                        </TableCell>
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

          {/* Recent Submissions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSubmissions.map((submission) => (
                  <div 
                    key={submission.id} 
                    className="p-3 bg-secondary/30 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-sm">{submission.intern}</p>
                      {getStatusBadge(submission.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{submission.task}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{submission.submittedAt}</span>
                      {submission.status === "pending" && (
                        <div className="flex gap-1">
                          <Button size="icon" variant="ghost" className="h-6 w-6 text-success hover:text-success hover:bg-success/10">
                            <Check className="w-3 h-3" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-6 w-6 text-destructive hover:text-destructive hover:bg-destructive/10">
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminTasks;
