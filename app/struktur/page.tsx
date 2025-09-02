import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Mail, MapPin } from "lucide-react"

// Sample government officials data
const officials = [
  {
    name: "H. Ahmad Suryadi, S.Sos",
    position: "Kepala Desa",
    phone: "0812-3456-7890",
    email: "kades@desaciawiasih.id",
    photo: "/indonesian-village-head-official-portrait.png",
    description: "Memimpin pemerintahan desa dan bertanggung jawab atas kebijakan strategis desa.",
  },
  {
    name: "Dra. Siti Nurhasanah",
    position: "Sekretaris Desa",
    phone: "0812-3456-7891",
    email: "sekdes@desaciawiasih.id",
    photo: "/indonesian-village-secretary-official-portrait.png",
    description: "Mengelola administrasi desa dan mendukung tugas kepala desa.",
  },
  {
    name: "Budi Santoso, S.E",
    position: "Kepala Urusan Keuangan",
    phone: "0812-3456-7892",
    email: "kaur.keuangan@desaciawiasih.id",
    photo: "/indonesian-village-finance-official-portrait.png",
    description: "Mengelola keuangan desa dan penyusunan anggaran.",
  },
  {
    name: "Rina Marlina, S.Pd",
    position: "Kepala Urusan Umum",
    phone: "0812-3456-7893",
    email: "kaur.umum@desaciawiasih.id",
    photo: "/indonesian-village-general-affairs-official-portra.png",
    description: "Mengurus administrasi umum dan pelayanan masyarakat.",
  },
  {
    name: "Dedi Kurniawan",
    position: "Kepala Dusun I",
    phone: "0812-3456-7894",
    email: "kadus1@desaciawiasih.id",
    photo: "/indonesian-village-hamlet-head-official-portrait.png",
    description: "Memimpin dan mengkoordinasikan kegiatan di Dusun I.",
  },
  {
    name: "Asep Saepudin",
    position: "Kepala Dusun II",
    phone: "0812-3456-7895",
    email: "kadus2@desaciawiasih.id",
    photo: "/indonesian-village-hamlet-head-official-portrait.png",
    description: "Memimpin dan mengkoordinasikan kegiatan di Dusun II.",
  },
  {
    name: "Ibu Yayah Rokayah",
    position: "Kepala Dusun III",
    phone: "0812-3456-7896",
    email: "kadus3@desaciawiasih.id",
    photo: "/indonesian-village-hamlet-head-official-portrait.png",
    description: "Memimpin dan mengkoordinasikan kegiatan di Dusun III.",
  },
  {
    name: "Ujang Suhendar",
    position: "Kepala Dusun IV",
    phone: "0812-3456-7897",
    email: "kadus4@desaciawiasih.id",
    photo: "/indonesian-village-hamlet-head-official-portrait.png",
    description: "Memimpin dan mengkoordinasikan kegiatan di Dusun IV.",
  },
]

export default function StrukturPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation/>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Struktur Pemerintahan Desa</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mengenal perangkat desa dan struktur organisasi pemerintahan Desa Ciawiasih yang melayani masyarakat
                dengan dedikasi tinggi.
              </p>
            </div>
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Bagan Organisasi
                </Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Struktur Organisasi</h2>
                <p className="text-muted-foreground text-lg">Hierarki dan pembagian tugas dalam pemerintahan desa</p>
              </div>

              <Card className="border-0 bg-card/50 backdrop-blur overflow-hidden">
                <CardContent className="p-8">
                  <div className="aspect-video relative">
                    <img
                      src="/bagan.png"
                      alt="Bagan Organisasi Pemerintah Desa Ciawiasih"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Struktur organisasi pemerintahan Desa Ciawiasih berdasarkan Peraturan Menteri Dalam Negeri No. 84
                      Tahun 2015
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Village Officials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Perangkat Desa
                </Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Daftar Perangkat Desa</h2>
                <p className="text-muted-foreground text-lg">
                  Tim pemerintahan desa yang siap melayani dan membangun Desa Ciawiasih
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {officials.map((official, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur"
                  >
                    <CardHeader className="text-center pb-3">
                      <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage src={official.photo || "/placeholder.svg"} alt={official.name} />
                        <AvatarFallback className="text-lg font-semibold bg-secondary/10 text-secondary">
                          {official.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="font-heading text-lg leading-tight">{official.name}</CardTitle>
                      <CardDescription className="font-medium text-secondary">{official.position}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {official.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t">
                        <div className="flex items-center space-x-2 text-xs">
                          <Phone className="h-3 w-3 text-secondary flex-shrink-0" />
                          <span className="truncate">{official.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <Mail className="h-3 w-3 text-secondary flex-shrink-0" />
                          <span className="truncate">{official.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 bg-gradient-to-r from-secondary/10 to-secondary/5 backdrop-blur">
                <CardContent className="p-8 text-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-bold text-2xl mb-2">Kantor Desa Ciawiasih</h3>
                      <p className="text-muted-foreground">
                        Hubungi kami untuk berbagai keperluan administrasi dan pelayanan masyarakat
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-3 rounded-full bg-secondary/10">
                          <MapPin className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Alamat</p>
                          <p className="text-sm text-muted-foreground">
                            Jl. Raya Ciawiasih No. 123
                            <br />
                            Kec. Ciawiasih, Kab. Kuningan
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-3 rounded-full bg-secondary/10">
                          <Phone className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Telepon</p>
                          <p className="text-sm text-muted-foreground">
                            (0232) 123-4567
                            <br />
                            WhatsApp: 0812-3456-7890
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-3 rounded-full bg-secondary/10">
                          <Mail className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">
                            info@desaciawiasih.id
                            <br />
                            pelayanan@desaciawiasih.id
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>Jam Pelayanan:</strong> Senin - Jumat: 08.00 - 16.00 WIB | Sabtu: 08.00 - 12.00 WIB
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
