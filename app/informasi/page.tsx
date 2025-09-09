import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Megaphone, FileText, Users } from "lucide-react"

// Sample news and information data
const newsItems = [
  {
    id: 1,
    title: "Pengaspalan Jalan Blok Citaman",
    excerpt: "Mahasiswa KKM UMC 47 turut berpartisipasi dalam proyek pembangunan jalan desa, khususnya di wilayah Blok Citaman Desa Ciawiasih. Kegiatan ini dilaksanakan bersama masyarakat setempat sebagai upaya meningkatkan aksesibilitas, memperlancar mobilitas warga, serta menunjang pertumbuhan ekonomi desa. Kehadiran mahasiswa dalam kegiatan ini tidak hanya membantu secara fisik, tetapi juga mempererat hubungan sosial dengan warga melalui semangat gotong royong yang menjadi ciri khas masyarakat pedesaan.",
    date: "2025-08-21",
    author: "Admin",
    category: "Pembangunan",
    image: "/news1.jpg",
    content: "Pembangunan jalan desa tahap II sepanjang 2 km telah dimulai pada tanggal 15 Januari 2024...",
  },
  {
    id: 2,
    title: "Berpartisipasi Membantu Kegiatan di Desa Ciawiasih yaitu Posyandu BudarsihKajaga (ibu hamil)",
    excerpt: "Mahasiswa KKM UMC 47 berpartisipasi dalam kegiatan Posyandu BudarsihKajaga di Desa Ciawiasih dengan membantu pelayanan dan pendampingan ibu hamil sebagai bentuk kepedulian terhadap kesehatan masyarakat.",
    date: "2025-08-08",
    author: "Admin",
    category: "Program Kesehatan",
    image: "/news3.jpg",
    content: "Pelatihan UMKM digital diselenggarakan untuk meningkatkan kemampuan warga dalam memasarkan produk...",
  },
  {
    id: 3,
    title: "Partisipasi Mahasiswa KKM UMC 47 dalam Mengikuti Kegiatan Upacara 17 Agustus di Desa Ciawiasih",
    excerpt: "Mahasiswa KKM UMC 47 berpartisipasi dalam mengikuti Upacara Peringatan Hari Kemerdekaan Republik Indonesia pada 17 Agustus 2025 di Desa Ciawiasih. Kehadiran mahasiswa dalam upacara ini menjadi wujud kebersamaan dengan masyarakat desa serta bentuk penghormatan terhadap perjuangan para pahlawan bangsa.",
    date: "2025-08-17",
    author: "Admin",
    category: "Kegiatan",
    image: "/news2.jpg",
    content: "Kegiatan gotong royong pembersihan saluran air dilaksanakan serentak di seluruh RT/RW...",
  },
]

const announcements = [
  {
    title: "Pendaftaran Bantuan Sosial Tahun 2024",
    date: "2024-01-20",
    description: "Pendaftaran bantuan sosial untuk keluarga kurang mampu dibuka hingga 31 Januari 2024.",
    urgent: true,
  },
  {
    title: "Jadwal Pelayanan Administrasi",
    date: "2024-01-18",
    description: "Pelayanan administrasi kependudukan tersedia setiap hari Senin-Jumat pukul 08.00-15.00 WIB.",
    urgent: false,
  },
  {
    title: "Rapat Koordinasi RT/RW",
    date: "2024-01-16",
    description: "Rapat koordinasi bulanan RT/RW akan dilaksanakan pada tanggal 25 Januari 2024.",
    urgent: false,
  },
]

export default function InformasiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Informasi & Berita Desa</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dapatkan informasi terkini tentang kegiatan, pembangunan, dan pengumuman penting dari Desa Ciawiasih.
              </p>
            </div>
          </div>
        </section>

        {/* Important Announcements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Megaphone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl">Pengumuman Penting</h2>
                  <p className="text-muted-foreground">Informasi terbaru yang perlu diketahui warga</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {announcements.map((announcement, index) => (
                  <Card
                    key={index}
                    className={`border-0 bg-card/50 backdrop-blur ${announcement.urgent ? "ring-2 ring-secondary/20" : ""}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="font-heading text-lg leading-tight">{announcement.title}</CardTitle>
                        {announcement.urgent && (
                          <Badge variant="secondary" className="ml-2 flex-shrink-0">
                            Penting
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(announcement.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{announcement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl">Berita Terbaru</h2>
                  <p className="text-muted-foreground">Kabar terkini dari kegiatan dan pembangunan desa</p>
                </div>
              </div>

              <div className="space-y-8">
                {newsItems.map((news) => (
                  <Card key={news.id} className="border-0 bg-card/50 backdrop-blur overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      <div className="lg:col-span-1">
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          className="w-full h-48 lg:h-full object-cover"
                        />
                      </div>
                      <div className="lg:col-span-2 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="secondary">{news.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(news.date).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="h-4 w-4 mr-1" />
                            {news.author}
                          </div>
                        </div>

                        <h3 className="font-heading font-bold text-xl mb-3 leading-tight">{news.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{news.excerpt}</p>

                        {/* <Button variant="outline" className="group bg-transparent">
                          Baca Selengkapnya
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button> */}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                {/* <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Lihat Semua Berita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button> */}
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
                    <div className="flex items-center justify-center space-x-3">
                      <div className="p-3 rounded-full bg-secondary/10">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl">Hubungi Kami</h3>
                        <p className="text-muted-foreground">Ada pertanyaan atau ingin menyampaikan aspirasi?</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <p className="font-medium mb-2">WhatsApp Desa</p>
                        <p className="text-sm text-muted-foreground">0853-1614-4921</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium mb-2">Email</p>
                        <p className="text-sm text-muted-foreground">pemdesciawiasih08@gmail.com</p>
                      </div>
                    </div>

                    <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                        Hubungi via WhatsApp
                      </a>
                    </Button>
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
