import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Activity, 
  Calendar, 
  Stethoscope, 
  Pill,
  Plus,
  TrendingUp,
  AlertTriangle
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const HealthTracking = () => {
  // Sample data
  const healthData = [
    { month: 'Jan', checkups: 12, vaccinations: 8, treatments: 3 },
    { month: 'Feb', checkups: 15, vaccinations: 10, treatments: 2 },
    { month: 'Mar', checkups: 18, vaccinations: 12, treatments: 5 },
    { month: 'Apr', checkups: 14, vaccinations: 9, treatments: 1 },
    { month: 'Mei', checkups: 16, vaccinations: 11, treatments: 4 },
    { month: 'Jun', checkups: 20, vaccinations: 15, treatments: 2 },
  ];

  const healthStatusData = [
    { name: 'Sehat', value: 85, color: 'hsl(var(--farm-green))' },
    { name: 'Monitoring', value: 10, color: 'hsl(var(--warning-amber))' },
    { name: 'Perawatan', value: 5, color: 'hsl(var(--destructive))' },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'vaccination',
      animal: 'Sapi ID-001',
      description: 'Vaksinasi PMK',
      date: '2 hari lalu',
      status: 'completed'
    },
    {
      id: 2,
      type: 'checkup',
      animal: 'Sapi ID-003',
      description: 'Pemeriksaan rutin',
      date: '3 hari lalu',
      status: 'completed'
    },
    {
      id: 3,
      type: 'treatment',
      animal: 'Sapi ID-007',
      description: 'Pengobatan mastitis',
      date: '5 hari lalu',
      status: 'ongoing'
    },
    {
      id: 4,
      type: 'vaccination',
      animal: 'Sapi ID-012',
      description: 'Vaksinasi BEF',
      date: '1 minggu lalu',
      status: 'completed'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'vaccination': return Pill;
      case 'checkup': return Stethoscope;
      case 'treatment': return Heart;
      default: return Activity;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-farm-green text-primary-foreground';
      case 'ongoing': return 'bg-warning-amber text-white';
      case 'scheduled': return 'bg-sky-blue text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="health" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sistem Rekording Kesehatan Sapi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kelola dan pantau riwayat kesehatan, vaksinasi, dan perawatan setiap sapi secara digital
          </p>
        </div>

        {/* Health Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-card border-border/50 hover:shadow-card-farm transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-farm-green" />
                <CardTitle className="text-sm font-medium">Total Sapi</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">120</div>
              <p className="text-xs text-muted-foreground">Terdaftar dalam sistem</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-card-farm transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-farm-green" />
                <CardTitle className="text-sm font-medium">Sapi Sehat</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-farm-green">102</div>
              <div className="flex items-center gap-1 text-xs">
                <TrendingUp className="h-3 w-3 text-farm-green" />
                <span className="text-farm-green">+2.1% dari bulan lalu</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-card-farm transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-warning-amber" />
                <CardTitle className="text-sm font-medium">Monitoring</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning-amber">12</div>
              <p className="text-xs text-muted-foreground">Perlu perhatian khusus</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-card-farm transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <CardTitle className="text-sm font-medium">Perawatan</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">6</div>
              <p className="text-xs text-muted-foreground">Sedang dalam perawatan</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Health Activities Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Aktivitas Kesehatan Bulanan
              </CardTitle>
              <CardDescription>
                Grafik pemeriksaan, vaksinasi, dan perawatan dalam 6 bulan terakhir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="checkups" fill="hsl(var(--farm-green))" name="Pemeriksaan" />
                  <Bar dataKey="vaccinations" fill="hsl(var(--sky-blue))" name="Vaksinasi" />
                  <Bar dataKey="treatments" fill="hsl(var(--warning-amber))" name="Perawatan" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Health Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Status Kesehatan
              </CardTitle>
              <CardDescription>
                Distribusi kondisi kesehatan sapi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={healthStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {healthStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {healthStatusData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span>{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Aktivitas Kesehatan Terbaru
              </CardTitle>
              <CardDescription>
                Riwayat pemeriksaan, vaksinasi, dan perawatan terbaru
              </CardDescription>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Tambah Aktivitas
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-foreground">{activity.animal}</h4>
                        <Badge className={getStatusColor(activity.status)}>
                          {activity.status === 'completed' ? 'Selesai' : 
                           activity.status === 'ongoing' ? 'Berlangsung' : 'Terjadwal'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HealthTracking;