import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Award, Download, Eye, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const certificatesData = [
  { id: "CERT-2024-WD-001234", intern: "Kavitha Menon", email: "kavitha@example.com", role: "Web Development", issueDate: "Jan 25, 2024", status: "issued" },
  { id: "CERT-2024-PY-001235", intern: "Sneha Gupta", email: "sneha@example.com", role: "Python Development", issueDate: "Jan 24, 2024", status: "issued" },
  { id: "CERT-2024-DA-001236", intern: "Anita Patel", email: "anita@example.com", role: "Data Analyst", issueDate: null, status: "ready" },
  { id: "CERT-2024-WD-001237", intern: "Arjun Reddy", email: "arjun@example.com", role: "Web Development", issueDate: null, status: "ready" },
  { id: null, intern: "Rohit Sharma", email: "rohit@example.com", role: "UI/UX Design", issueDate: null, status: "pending" },
];

const AdminCertificates = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = certificatesData.filter((cert) =>
    cert.intern.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (cert.id && cert.id.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleIssue = (intern: string) => {
    toast({
      title: "Certificate Issued",
      description: `Certificate has been issued to ${intern}.`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "issued":
        return <span className="status-badge status-approved">Issued</span>;
      case "ready":
        return <span className="status-badge status-submitted">Ready to Issue</span>;
      default:
        return <span className="status-badge status-pending">Pending Payment</span>;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Certificates</h1>
          <p className="text-muted-foreground">Issue and manage intern certificates</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Issued</p>
                  <p className="text-2xl font-bold mt-1">
                    {certificatesData.filter((c) => c.status === "issued").length}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Ready to Issue</p>
                  <p className="text-2xl font-bold mt-1">
                    {certificatesData.filter((c) => c.status === "ready").length}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Payment</p>
                  <p className="text-2xl font-bold mt-1">
                    {certificatesData.filter((c) => c.status === "pending").length}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or certificate ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Certificates Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Certificate ID</TableHead>
                    <TableHead>Intern</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCertificates.map((cert, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {cert.id ? (
                          <code className="text-sm bg-muted px-2 py-1 rounded">{cert.id}</code>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{cert.intern}</p>
                          <p className="text-sm text-muted-foreground">{cert.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{cert.role}</TableCell>
                      <TableCell>
                        {cert.issueDate || <span className="text-muted-foreground">—</span>}
                      </TableCell>
                      <TableCell>{getStatusBadge(cert.status)}</TableCell>
                      <TableCell className="text-right">
                        {cert.status === "ready" && (
                          <Button size="sm" onClick={() => handleIssue(cert.intern)}>
                            Issue Certificate
                          </Button>
                        )}
                        {cert.status === "issued" && (
                          <div className="flex items-center justify-end gap-2">
                            <Button size="icon" variant="ghost" className="h-8 w-8">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
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

export default AdminCertificates;
