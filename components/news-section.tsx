import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowRight, Clock } from "lucide-react"

// Sample news data - in real app this would come from CMS or API
const newsItems = [
  {
    id: 1,
    title: "Pengaspalan Jalan Blok Citaman",
    excerpt: "Proyek pembangunan jalan desa, khususnya di wilayah Blok Citaman Desa Ciawiasih. Kegiatan ini dilaksanakan bersama masyarakat setempat sebagai upaya meningkatkan aksesibilitas, memperlancar mobilitas warga, serta menunjang pertumbuhan ekonomi desa. Kehadiran mahasiswa dalam kegiatan ini tidak hanya membantu secara fisik, tetapi juga mempererat hubungan sosial dengan warga melalui semangat gotong royong yang menjadi ciri khas masyarakat pedesaan.",
    date: "2025-08-21",
    category: "Pembangunan",
    image: "/news1.jpg",
    readTime: "120 menit",
  },
  {
    id: 2,
    title: "Partisipasi Mahasiswa KKM UMC 47 dalam Mengikuti Kegiatan Upacara 17 Agustus di Desa Ciawiasih",
    excerpt: "Mahasiswa KKM UMC 47 berpartisipasi dalam mengikuti Upacara Peringatan Hari Kemerdekaan Republik Indonesia pada 17 Agustus 2025 di Desa Ciawiasih. Kehadiran mahasiswa dalam upacara ini menjadi wujud kebersamaan dengan masyarakat desa serta bentuk penghormatan terhadap perjuangan para pahlawan bangsa.",
    date: "2025-08-17",
    category: "Kegiatan",
    image: "/news2.jpg",
    readTime: "60 menit",
  },
  {
    id: 3,
    title: "Berpartisipasi Membantu Kegiatan di Desa Ciawiasih yaitu Posyandu BudarsihKajaga (ibu hamil)",
    excerpt: "Mahasiswa KKM UMC 47 berpartisipasi dalam kegiatan Posyandu BudarsihKajaga di Desa Ciawiasih dengan membantu pelayanan dan pendampingan ibu hamil sebagai bentuk kepedulian terhadap kesehatan masyarakat.",
    date: "2025-08-08",
    category: "Program Kesehatan",
    image: "/news3.jpg",
    readTime: "60 menit",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Berita Terbaru</h2>
            <p className="text-muted-foreground text-lg">Ikuti perkembangan dan kegiatan terbaru di Desa Ciawiasih</p>
          </div>

          <Button asChild variant="outline">
            <Link href="/informasi" className="flex items-center space-x-2">
              <span>Lihat Semua Berita</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
                    {item.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(item.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <CardTitle className="font-heading text-lg leading-tight line-clamp-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </CardTitle>

                <CardDescription className="text-sm leading-relaxed line-clamp-3">{item.excerpt}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-secondary/10 transition-colors"
                >
                  {/* <Link href={`/informasi/${item.id}`}>
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link> */}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
