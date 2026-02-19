import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Check, X, Eye, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useEffect } from "react";


interface Application {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  duration: string;
  college: string;
  about: string;
  applied_at: string;
  status: string;
}


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

const AdminApplications = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
const [applications, setApplications] = useState<Application[]>([]);
useEffect(() => {
  axios
    .get("http://127.0.0.1:8000/api/applications/")
    .then((response) => {
      setApplications(response.data);
    })
    .catch((error) => {
      console.error("Error fetching applications:", error);
    });
}, []);
   
  const filteredApplications = applications.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
//this is used for backend 
 const handleApprove = async (id: number) => {
  try {
    await axios.patch(
      `http://127.0.0.1:8000/api/applications/${id}/`,
      { status: "approved" }
    );

    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: "approved" } : app
      )
    );

    toast({
      title: "Application Approved",
      description: "Status updated successfully.",
    });

  } catch (error) {
    console.error(error);
  }
};

//this is used for backend
 const handleReject = async (id: number) => {
  try {
    await axios.patch(
      `http://127.0.0.1:8000/api/applications/${id}/`,
      { status: "rejected" }
    );

    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: "rejected" } : app
      )
    );

    toast({
      title: "Application Rejected",
      description: "Status updated successfully.",
    });

  } catch (error) {
    console.error(error);
  }
};

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Applications</h1>
            <p className="text-muted-foreground">Review and manage internship applications</p>
          </div>
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
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
                    <TableHead>Applicant</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>College</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{app.name}</p>
                          <p className="text-sm text-muted-foreground">{app.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{app.role}</TableCell>
                      <TableCell>{app.duration}</TableCell>
                      <TableCell>{app.college}</TableCell>
                      <TableCell>
                        {new Date(app.applied_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{getStatusBadge(app.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          {app.status === "pending" && (
                            <>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-success hover:text-success hover:bg-success/10"
                                onClick={() => handleApprove(app.id)}
                              >
                                <Check className="w-4 h-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                onClick={() => handleReject(app.id)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
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

export default AdminApplications;
