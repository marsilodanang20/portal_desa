import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin } from "lucide-react"

// Sample government officials data
const officials = [
  {
    name: "Nining Niawati, S.St",
    position: "Kuwu",
    photo: "/strk1.jpg",
    description: "Memimpin pemerintahan desa dan bertanggung jawab atas kebijakan strategis desa.",
  },
  {
    name: "Supani",
    position: "Sekretaris Desa",
    photo: "/strk2.jpg",
    description: "Mengelola administrasi desa dan mendukung tugas kepala desa.",
  },
  {
    name: "Zulka Syahruyumi",
    position: "Kepala Urusan Keuangan",
    photo: "/strk3.jpg",
    description: "Mengelola keuangan desa dan penyusunan anggaran.",
  },
  {
    name: "Wawan Erwan",
    position: "Kepala Urusan Perencanaan",
    photo: "/strk4.jpg",
    description: "Mengurus administrasi umum dan pelayanan masyarakat.",
  },
  {
    name: "Suhadi",
    position: "Kepala Seksi Pemerintahan",
    photo: "/strk5.jpg",
    description: "Mengurus pemerintahan di Desa Ciawiasih.",
  },
  {
    name: "Sanusi",
    position: "Kepala Seksi Kesejahteraan",
    photo: "/strk6.jpg",
    description: "Mengelola dan melaksanakan program-program kesejahteraan masyarakat, termasuk bidang sosial, kesehatan, pendidikan, dan pemberdayaan keluarga di desa.",
  },
  {
    name: "Cecep Hidayat",
    position: "Kepala Pelaksana Kewilayahan/Kepala Dusun 01",
    photo: "/strk7.jpg",
    description: "Memimpin dan mengkoordinasikan kegiatan di Dusun 01.",
  },
  {
    name: "Andri Setiawan",
    position: "Kepala Pelaksana Kewilayahan/Kepala Dusun 02",
    photo: "/strk8.jpg",
    description: "Memimpin dan mengkoordinasikan kegiatan di Dusun 02.",
  },
  {
    name: "Suhun",
    position: "Kepala Pelaksana Kewilayahan/Kepala Dusun 03",
    photo: "/strk9.jpg",
    description: "Memimpin dan mengkoordinasikan kegiatan di Dusun 03.",
  },
   {
    name: "Ahmad Kaelani",
    position: "Kepala Pelaksana Kewilayahan/Kepala Dusun 04",
    photo: "/strk10.jpg",
    description: "Memimpin dan mengkoordinasikan kegiatan di Dusun 04.",
  },
  {
    name: "Gilang Sulaeman H",
    position: "Kepala Pelaksana Kewilayahan/Kepala Dusun 05",
    photo: "/strk11.jpg",
    description: "Memimpin dan mengkoordinasikan kegiatan di Dusun 05.",
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

                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {official.description}
                      </p>
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
                            Desa Ciawiasih
                            <br />
                            Kec. Susukan Lebak, Kabupaten Cirebon 
                          </p>
                        </div>
                      </div>

                      {/* Telepon dan Email tetap di bagian kantor */}
                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-3 rounded-full bg-secondary/10">
                          <span className="h-6 w-6 text-secondary">📞</span>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Telepon</p>
                          <p className="text-sm text-muted-foreground">
                            WhatsApp: 0853-1614-4921
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-3 rounded-full bg-secondary/10">
                          <span className="h-6 w-6 text-secondary">✉️</span>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">
                            pemdesciawiasih08@gmail.com
                            <br />
                            pemdesciawiasih18@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>Jam Pelayanan:</strong> Senin - Jumat: 08.00 - 15.00 WIB | Sabtu: 08.00 - 12.00 WIB
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
