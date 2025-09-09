import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink, Store, TrendingUp, Users } from "lucide-react"

export function UMKMSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-r from-secondary/10 to-secondary/5 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-balance">UMKM Desa Ciawiasih</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Dukung ekonomi lokal dengan berbelanja produk-produk unggulan dari Usaha Mikro, Kecil, dan
                      Menengah (UMKM) Desa Ciawiasih. Temukan berbagai produk berkualitas dari warga desa.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Store className="h-4 w-4 text-secondary" />
                      <span>50+ Produk Lokal</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-4 w-4 text-secondary" />
                      <span>25+ UMKM Aktif</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                      <span>Kualitas Terjamin</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                    >
                      <Link
                        href="https://profilumkmciawiasih.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <span>Kunjungi Toko Online UMKM</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden rounded-2xl">
                    <img
                      src="/brownies3.jpg"
                      alt="Produk UMKM Desa Ciawiasih"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Produk Lokal
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
