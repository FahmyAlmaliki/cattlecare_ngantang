import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Bot, 
  Send, 
  Lightbulb,
  AlertCircle,
  TrendingUp,
  Mic,
  MoreHorizontal
} from "lucide-react";

const ChatbotSection = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatHistory = [
    {
      id: 1,
      sender: "bot",
      message: "Selamat datang! Saya adalah asisten AI untuk sistem monitoring kandang sapi Anda. Ada yang bisa saya bantu hari ini?",
      time: "10:30",
      type: "greeting"
    },
    {
      id: 2,
      sender: "user",
      message: "Bagaimana kondisi suhu kandang saat ini?",
      time: "10:32",
      type: "question"
    },
    {
      id: 3,
      sender: "bot",
      message: "Berdasarkan data sensor terbaru, suhu kandang saat ini adalah 24°C dengan kelembaban 62%. Kondisi ini optimal untuk sapi dewasa. Semua parameter dalam rentang normal.",
      time: "10:32",
      type: "analysis"
    },
    {
      id: 4,
      sender: "user",
      message: "Apakah ada sapi yang perlu perhatian khusus?",
      time: "10:35",
      type: "question"
    },
    {
      id: 5,
      sender: "bot",
      message: "Ya, saya menemukan 2 sapi yang perlu perhatian: Sapi ID-007 menunjukkan pola aktivitas rendah dan Sapi ID-012 memiliki jadwal vaksinasi yang akan jatuh tempo dalam 3 hari. Apakah Anda ingin detail lebih lanjut?",
      time: "10:35",
      type: "alert"
    }
  ];

  const suggestions = [
    { text: "Cek kondisi lingkungan", icon: TrendingUp },
    { text: "Status kesehatan sapi", icon: AlertCircle },
    { text: "Rekomendasi perawatan", icon: Lightbulb },
    { text: "Laporan harian", icon: MessageSquare }
  ];

  const aiCapabilities = [
    {
      title: "Analisis Real-time",
      description: "Menganalisis data sensor untuk memberikan insights kondisi kandang",
      icon: TrendingUp,
      color: "farm-green"
    },
    {
      title: "Deteksi Dini",
      description: "Mendeteksi anomali dan memberikan peringatan dini untuk masalah potensial",
      icon: AlertCircle,
      color: "warning-amber"
    },
    {
      title: "Rekomendasi Cerdas",
      description: "Memberikan saran perawatan dan tindakan berdasarkan data historis",
      icon: Lightbulb,
      color: "sky-blue"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsTyping(true);
      // Simulate AI response
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      setMessage("");
    }
  };

  return (
    <section id="chatbot" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Assistant untuk Peternak
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dapatkan insights cerdas, rekomendasi perawatan, dan analisis data dengan bantuan AI
          </p>
        </div>

        {/* AI Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {aiCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-card-farm transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Chatbot Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Area */}
          <Card className="lg:col-span-2">
            <CardHeader className="border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-lg">CattleMon AI Assistant</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-farm-green rounded-full animate-pulse"></div>
                    Online dan siap membantu
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {chatHistory.map((chat) => (
                  <div
                    key={chat.id}
                    className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        chat.sender === 'user'
                          ? 'bg-gradient-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{chat.message}</p>
                      <p className={`text-xs mt-1 ${
                        chat.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {chat.time}
                      </p>
                      {chat.type === 'alert' && chat.sender === 'bot' && (
                        <Badge className="mt-2 bg-warning-amber text-white">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Perhatian
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">AI sedang mengetik...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Input Area */}
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Tanyakan tentang kondisi kandang, kesehatan sapi, atau minta rekomendasi..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button size="icon" variant="outline">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button onClick={handleSendMessage} className="bg-gradient-primary hover:opacity-90">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggestions Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Saran Pertanyaan
              </CardTitle>
              <CardDescription>
                Klik untuk bertanya dengan cepat
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-primary/5"
                    onClick={() => setMessage(suggestion.text)}
                  >
                    <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{suggestion.text}</span>
                  </Button>
                );
              })}
              
              {/* Quick Stats */}
              <div className="mt-6 space-y-4">
                <h4 className="font-medium text-sm text-foreground">Quick Stats</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Suhu Kandang</span>
                    <Badge variant="secondary">24°C</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Sapi Sehat</span>
                    <Badge className="bg-farm-green text-primary-foreground">102/120</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Alert Aktif</span>
                    <Badge className="bg-warning-amber text-white">2</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Features */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Fitur AI Assistant
            </CardTitle>
            <CardDescription>
              Kemampuan lengkap AI untuk mendukung operasional peternakan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 border border-border rounded-lg">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium text-sm mb-1">Prediksi Tren</h4>
                <p className="text-xs text-muted-foreground">Analisis pola data untuk prediksi kondisi future</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <AlertCircle className="h-8 w-8 text-warning-amber mx-auto mb-2" />
                <h4 className="font-medium text-sm mb-1">Smart Alerts</h4>
                <p className="text-xs text-muted-foreground">Notifikasi cerdas berdasarkan kondisi real-time</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <Lightbulb className="h-8 w-8 text-sky-blue mx-auto mb-2" />
                <h4 className="font-medium text-sm mb-1">Rekomendasi</h4>
                <p className="text-xs text-muted-foreground">Saran perawatan dan tindakan optimal</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <MessageSquare className="h-8 w-8 text-earth-brown mx-auto mb-2" />
                <h4 className="font-medium text-sm mb-1">Konsultasi 24/7</h4>
                <p className="text-xs text-muted-foreground">Bantuan kapan saja untuk masalah peternakan</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChatbotSection;