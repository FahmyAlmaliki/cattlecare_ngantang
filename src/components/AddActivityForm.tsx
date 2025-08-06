import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter 
} from "@/components/ui/dialog";
import { 
  Heart, 
  Stethoscope, 
  Pill,
  X,
  Save
} from "lucide-react";

interface AddActivityFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (activity: ActivityData) => void;
}

interface ActivityData {
  id: string;
  animalId: string;
  activityType: string;
  description: string;
  status: 'completed' | 'ongoing' | 'scheduled';
  date: string;
  notes?: string;
}

const AddActivityForm = ({ isOpen, onClose, onSave }: AddActivityFormProps) => {
  const [formData, setFormData] = useState<ActivityData>({
    id: '',
    animalId: '',
    activityType: '',
    description: '',
    status: 'ongoing',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const activityTypes = [
    { value: 'vaccination', label: 'Vaksinasi', icon: Pill },
    { value: 'checkup', label: 'Pemeriksaan Rutin', icon: Stethoscope },
    { value: 'treatment', label: 'Perawatan/Pengobatan', icon: Heart },
  ];

  const statusOptions = [
    { value: 'completed', label: 'Selesai', color: 'bg-green-500' },
    { value: 'ongoing', label: 'Berlangsung', color: 'bg-yellow-500' },
    { value: 'scheduled', label: 'Terjadwal', color: 'bg-blue-500' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newActivity = {
      ...formData,
      id: `ACT-${Date.now()}`
    };
    
    onSave(newActivity);
    
    setFormData({
      id: '',
      animalId: '',
      activityType: '',
      description: '',
      status: 'ongoing',
      date: new Date().toISOString().split('T')[0],
      notes: ''
    });
    
    onClose();
  };

  const handleInputChange = (field: keyof ActivityData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getActivityIcon = (type: string) => {
    const activity = activityTypes.find(a => a.value === type);
    return activity?.icon || Heart;
  };

  const isFormValid = formData.animalId && formData.activityType && formData.description;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Tambah Aktivitas Kesehatan Baru
          </DialogTitle>
          <DialogDescription>
            Masukkan detail aktivitas kesehatan untuk sapi yang dipilih
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="animalId">ID Sapi *</Label>
              <Input
                id="animalId"
                placeholder="Contoh: SAPI-001"
                value={formData.animalId}
                onChange={(e) => handleInputChange('animalId', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Tanggal Aktivitas *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="activityType">Jenis Aktivitas *</Label>
            <Select 
              value={formData.activityType} 
              onValueChange={(value) => handleInputChange('activityType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih jenis aktivitas" />
              </SelectTrigger>
              <SelectContent>
                {activityTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {type.label}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi Aktivitas *</Label>
            <Input
              id="description"
              placeholder="Contoh: Vaksinasi PMK, Pemeriksaan kesehatan rutin, dll"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status Aktivitas *</Label>
            <Select 
              value={formData.status} 
              onValueChange={(value) => handleInputChange('status', value as 'completed' | 'ongoing' | 'scheduled')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih status aktivitas" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${status.color}`}></div>
                      {status.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Catatan Tambahan (Opsional)</Label>
            <Textarea
              id="notes"
              placeholder="Catatan khusus tentang aktivitas ini..."
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows={3}
            />
          </div>

          {formData.activityType && (
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">Preview Aktivitas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      {(() => {
                        const Icon = getActivityIcon(formData.activityType);
                        return <Icon className="h-5 w-5 text-primary" />;
                      })()}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{formData.animalId || 'ID Sapi'}</h4>
                      <Badge className={
                        formData.status === 'completed' ? 'bg-green-500 text-white' :
                        formData.status === 'ongoing' ? 'bg-yellow-500 text-white' :
                        'bg-blue-500 text-white'
                      }>
                        {statusOptions.find(s => s.value === formData.status)?.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formData.description || 'Deskripsi aktivitas'}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.date ? new Date(formData.date).toLocaleDateString('id-ID') : 'Tanggal'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <DialogFooter className="gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              <X className="h-4 w-4 mr-2" />
              Batal
            </Button>
            <Button 
              type="submit" 
              disabled={!isFormValid}
              className="bg-gradient-primary hover:opacity-90"
            >
              <Save className="h-4 w-4 mr-2" />
              Simpan Aktivitas
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddActivityForm;