import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Building2, Newspaper, ArrowRight } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "Profil Desa",
    titleSunda: "Profil Désa",
    description: "Pelajari sejarah, visi-misi, dan demografi Desa Ciawiasih",
    descriptionSunda: "Diajar sajarah, visi-misi, jeung demografi Désa Ciawiasih",
    href: "/profil",
    image: "/news4.jpg",
  },
  {
    icon: Building2,
    title: "Struktur Pemerintahan",
    titleSunda: "Struktur Pamaréntahan",
    description: "Kenali perangkat desa dan struktur organisasi pemerintahan",
    descriptionSunda: "Kenal jeung parangkat désa jeung struktur organisasi pamaréntahan",
    href: "/struktur",
    image: "/bagan.png",
  },
  {
    icon: Newspaper,
    title: "Informasi & Berita",
    titleSunda: "Informasi & Béja",
    description: "Dapatkan informasi terkini dan pengumuman penting dari desa",
    descriptionSunda: "Meunang informasi panganyarna jeung pengumuman penting ti désa",
    href: "/informasi",
    image: "/indonesian-village-bulletin-board-community-announ.png",
  },
]

export function HighlightCards() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Jelajahi Desa Ciawiasih</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temukan berbagai informasi penting tentang desa kami melalui menu-menu berikut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur"
              >
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-secondary/10 transition-colors"
                  >
                    <Link href={item.href}>
                      <span>Selengkapnya</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
