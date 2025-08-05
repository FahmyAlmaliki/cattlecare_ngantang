import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Volume2, 
  TrendingUp, 
  TrendingDown,
  Gauge
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const MonitoringDashboard = () => {
  // Sample data untuk chart
  const temperatureData = [
    { time: '00:00', temp: 22 },
    { time: '04:00', temp: 20 },
    { time: '08:00', temp: 24 },
    { time: '12:00', temp: 28 },
    { time: '16:00', temp: 26 },
    { time: '20:00', temp: 23 },
  ];

  const humidityData = [
    { time: '00:00', humidity: 65 },
    { time: '04:00', humidity: 70 },
    { time: '08:00', humidity: 60 },
    { time: '12:00', humidity: 55 },
    { time: '16:00', humidity: 58 },
    { time: '20:00', humidity: 62 },
  ];

  const sensorCards = [
    {
      title: "Suhu Kandang",
      value: "24°C",
      unit: "Celsius",
      icon: Thermometer,
      trend: "up",
      trendValue: "+2.1%",
      status: "normal",
      description: "Optimal untuk sapi dewasa"
    },
    {
      title: "Kelembaban",
      value: "62%",
      unit: "RH",
      icon: Droplets,
      trend: "down",
      trendValue: "-1.5%",
      status: "normal",
      description: "Dalam rentang ideal"
    },
    {
      title: "Kualitas Udara",
      value: "Good",
      unit: "AQI",
      icon: Wind,
      trend: "up",
      trendValue: "+0.8%",
      status: "good",
      description: "CO2 dan NH3 normal"
    },
    {
      title: "Tingkat Kebisingan",
      value: "45dB",
      unit: "Decibel",
      icon: Volume2,
      trend: "down",
      trendValue: "-3.2%",
      status: "normal",
      description: "Sapi dalam kondisi tenang"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-farm-green text-primary-foreground';
      case 'good': return 'bg-sky-blue text-white';
      case 'warning': return 'bg-warning-amber text-white';
      case 'danger': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="monitoring" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dashboard Monitoring Real-time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pantau kondisi lingkungan kandang secara real-time dengan sensor IoT yang terhubung ke ESP32
          </p>
        </div>

        {/* Sensor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sensorCards.map((sensor, index) => {
            const Icon = sensor.icon;
            const TrendIcon = sensor.trend === 'up' ? TrendingUp : TrendingDown;
            
            return (
              <Card key={index} className="hover:shadow-card-farm transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-sm font-medium">{sensor.title}</CardTitle>
                    </div>
                    <Badge className={getStatusColor(sensor.status)}>
                      {sensor.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">{sensor.value}</span>
                      <span className="text-sm text-muted-foreground">{sensor.unit}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <TrendIcon className={`h-3 w-3 ${sensor.trend === 'up' ? 'text-farm-green' : 'text-destructive'}`} />
                      <span className={sensor.trend === 'up' ? 'text-farm-green' : 'text-destructive'}>
                        {sensor.trendValue}
                      </span>
                      <span className="text-muted-foreground">dari kemarin</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{sensor.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Temperature Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-primary" />
                Grafik Suhu 24 Jam
              </CardTitle>
              <CardDescription>
                Monitoring suhu kandang dalam 24 jam terakhir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="temp" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))" 
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Humidity Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                Grafik Kelembaban 24 Jam
              </CardTitle>
              <CardDescription>
                Monitoring kelembaban kandang dalam 24 jam terakhir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={humidityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="humidity" 
                    stroke="hsl(var(--sky-blue))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--sky-blue))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Control Panel */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-primary" />
              Kontrol Perangkat Kandang
            </CardTitle>
            <CardDescription>
              Kontrol otomatis perangkat berdasarkan kondisi lingkungan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium">Kipas Ventilasi</h4>
                  <p className="text-sm text-muted-foreground">Status: Aktif</p>
                </div>
                <Badge className="bg-farm-green text-primary-foreground">ON</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium">Sistem Penyemprot</h4>
                  <p className="text-sm text-muted-foreground">Status: Standby</p>
                </div>
                <Badge variant="secondary">OFF</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium">Lampu Kandang</h4>
                  <p className="text-sm text-muted-foreground">Status: Auto</p>
                </div>
                <Badge className="bg-warning-amber text-white">AUTO</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MonitoringDashboard;