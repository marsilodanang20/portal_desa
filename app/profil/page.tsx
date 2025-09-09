import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Home, Briefcase, GraduationCap, Heart } from "lucide-react"

export default function ProfilPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Profil Desa Ciawiasih</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mengenal lebih dekat sejarah, visi-misi, dan karakteristik Desa Ciawiasih yang kaya akan budaya dan
                tradisi.
              </p>
            </div>
          </div>
        </section>

        {/* Village History */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      Sejarah Desa
                    </Badge>
                    <h2 className="font-heading font-bold text-3xl mb-4">Asal Usul Desa Ciawiasih</h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Desa Ciawiasih didirikan pada tahun 1892 oleh para pendatang dari daerah Cirebon yang mencari
                      lahan pertanian yang subur. Nama "Ciawiasih" berasal dari bahasa Sunda yang berarti "air yang
                      jernih", merujuk pada sumber mata air alami yang melimpah di wilayah ini.
                    </p>
                    <p>
                      Pada masa kolonial Belanda, desa ini menjadi salah satu sentra produksi padi dan palawija di
                      wilayah Kuningan. Tradisi gotong royong yang kuat telah menjadi ciri khas masyarakat Ciawiasih
                      sejak awal berdirinya desa.
                    </p>
                    <p>
                      Setelah kemerdekaan Indonesia, Desa Ciawiasih terus berkembang dengan mempertahankan nilai-nilai
                      tradisional sambil mengadopsi teknologi modern untuk meningkatkan kesejahteraan masyarakat.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/pd1.jpg"
                    alt="Sejarah Desa Ciawiasih"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Visi & Misi
                </Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Visi dan Misi Desa</h2>
                <p className="text-muted-foreground text-lg">
                  Komitmen kami untuk membangun desa yang maju, sejahtera, dan berkelanjutan
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vision */}
                <Card className="border-0 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Heart className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="font-heading text-2xl">Visi</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed text-center font-medium text-balance">
                      "Mewujudkan Desa Ciawiasih sebagai desa yang maju, mandiri, dan sejahtera berdasarkan nilai-nilai
                      gotong royong dan kearifan lokal pada tahun 2030"
                    </p>
                  </CardContent>
                </Card>

                {/* Mission */}
                <Card className="border-0 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Briefcase className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="font-heading text-2xl">Misi</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Mengembangkan potensi ekonomi desa berbasis UMKM dan pertanian berkelanjutan
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Melestarikan budaya dan tradisi lokal untuk generasi mendatang</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Membangun infrastruktur desa yang mendukung kesejahteraan masyarakat
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Demographics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Demografi
                </Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Data Kependudukan</h2>
                <p className="text-muted-foreground text-lg">Statistik dan karakteristik penduduk Desa Ciawiasih</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="text-center border-0 bg-card/50 backdrop-blur">
                  <CardHeader className="pb-3">
                    <div className="mx-auto p-3 rounded-full bg-secondary/10 w-fit mb-2">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">2,298</CardTitle>
                    <CardDescription>Total Penduduk</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center border-0 bg-card/50 backdrop-blur">
                  <CardHeader className="pb-3">
                    <div className="mx-auto p-3 rounded-full bg-secondary/10 w-fit mb-2">
                      <Home className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">1772</CardTitle>
                    <CardDescription>Kepala Keluarga</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center border-0 bg-card/50 backdrop-blur">
                  <CardHeader className="pb-3">
                    <div className="mx-auto p-3 rounded-full bg-secondary/10 w-fit mb-2">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">89%</CardTitle>
                    <CardDescription>Tingkat Literasi</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center border-0 bg-card/50 backdrop-blur">
                  <CardHeader className="pb-3">
                    <div className="mx-auto p-3 rounded-full bg-secondary/10 w-fit mb-2">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">12.5</CardTitle>
                    <CardDescription>Luas (km²)</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Detailed Demographics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="font-heading">Komposisi Usia</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">0-17 tahun</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[28%] h-full bg-secondary"></div>
                        </div>
                        <span className="text-sm font-medium">28%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">18-64 tahun</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[65%] h-full bg-secondary"></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">65+ tahun</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[7%] h-full bg-secondary"></div>
                        </div>
                        <span className="text-sm font-medium">7%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="font-heading">Mata Pencaharian</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Petani</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[45%] h-full bg-secondary"></div>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pedagang/UMKM</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[25%] h-full bg-secondary"></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pegawai/Buruh</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[20%] h-full bg-secondary"></div>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Lainnya</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[10%] h-full bg-secondary"></div>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Village Map */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Peta Wilayah
                </Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                  Peta Desa Ciawiasih
                </h2>
                <p className="text-muted-foreground text-lg">
                  Lokasi dan batas wilayah Desa Ciawiasih
                </p>
              </div>

              <Card className="border-0 bg-card/50 backdrop-blur overflow-hidden">
                <CardContent className="p-0">
                  {/* Google Maps Embed */}
                  <div className="aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.344211665606!2d108.5866057055519!3d-6.8502598903677985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1adf0a39633b%3A0xc4c5fc93b4c90de3!2sCiawiasih%2C%20Kec.%20Susukan%20Lb.%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1756798196035!5m2!1sid!2sid"
                      className="w-full h-full border-0 rounded-lg"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  {/* Batas Wilayah & Koordinat */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-3">
                          Batas Wilayah
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Utara:</span>
                            <span>Desa Belawa</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Selatan:</span>
                            <span>Desa Sedong Kaler</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Timur:</span>
                            <span>Desa Pasawahan</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Barat:</span>
                            <span>Desa Ciawijapura</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-3">
                          Koordinat
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Lintang:</span>
                            <span>-6.8502° LS</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Bujur:</span>
                            <span>108.5866° BT</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Ketinggian:</span>
                            <span>100-150 mdpl</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Iklim:</span>
                            <span>Tropis</span>
                          </div>
                        </div>
                      </div>
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
