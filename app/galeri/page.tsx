import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, Calendar, Eye, Download } from "lucide-react"

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    title: "Gotong Royong Pembersihan Desa",
    date: "2024-01-15",
    category: "Kegiatan",
    image: "/indonesian-village-community-cleaning-activity.png",
    description: "Warga bergotong royong membersihkan lingkungan desa",
  },
  {
    id: 2,
    title: "Pelatihan UMKM Digital",
    date: "2024-01-10",
    category: "Pelatihan",
    image: "/indonesian-village-digital-training-workshop.png",
    description: "Pelatihan digital marketing untuk pelaku UMKM desa",
  },
  {
    id: 3,
    title: "Pengaspalan Jalan Desa terutama di Blok Citaman",
    date: "2025-21-08",
    category: "Pembangunan",
    image: "/news1.png",
    description: "Progress pembangunan infrastruktur jalan desa",
  },
  {
    id: 4,
    title: "Panen Raya Padi",
    date: "2024-01-05",
    category: "Pertanian",
    image: "/indonesian-village-rice-harvest-celebration.png",
    description: "Perayaan panen raya padi di sawah desa",
  },
  {
    id: 5,
    title: "Festival Budaya Desa",
    date: "2024-01-01",
    category: "Budaya",
    image: "/indonesian-village-cultural-festival-traditional.png",
    description: "Festival budaya dan seni tradisional desa",
  },
  {
    id: 6,
    title: "Rapat Koordinasi RT/RW",
    date: "2023-12-28",
    category: "Pemerintahan",
    image: "/indonesian-village-community-meeting-discussion.png",
    description: "Rapat koordinasi bulanan pengurus RT/RW",
  },
]

const categories = ["Semua", "Kegiatan", "Pembangunan", "Pertanian", "Budaya", "Pelatihan", "Pemerintahan"]

export default function GaleriPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Galeri Desa Ciawiasih</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dokumentasi kegiatan, pembangunan, dan kehidupan sehari-hari masyarakat Desa Ciawiasih dalam gambar.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "Semua" ? "default" : "outline"}
                    size="sm"
                    className="mb-2"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <Card
                    key={item.id}
                    className="group border-0 bg-card/50 backdrop-blur overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h3 className="font-heading font-semibold text-lg leading-tight">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(item.date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Camera className="mr-2 h-5 w-5" />
                  Muat Lebih Banyak
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="text-center border-0 bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-secondary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Total Foto</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-secondary mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Kegiatan</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-secondary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Bulan Terakhir</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-secondary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Kategori</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
