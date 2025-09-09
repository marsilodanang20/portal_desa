import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Kontak Desa</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Desa Ciawiasih</p>
                  <p className="text-sm">Kecamatan Susukan Lebak</p>
                  <p className="text-sm">Kabupaten Cirebon, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm">WhatsApp: 0853-1614-4921</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <p className="text-sm">pemdesciawiasih08@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Tautan Cepat</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/profil" className="text-sm hover:text-secondary transition-colors">
                Profil Desa
              </Link>
              <Link href="/struktur" className="text-sm hover:text-secondary transition-colors">
                Struktur Pemerintahan
              </Link>
              <Link href="/informasi" className="text-sm hover:text-secondary transition-colors">
                Informasi & Berita
              </Link>
              <Link href="/dokumen" className="text-sm hover:text-secondary transition-colors">
                Dokumen Publik
              </Link>
              <Link href="/galeri" className="text-sm hover:text-secondary transition-colors">
                Galeri
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Media Sosial</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/desa\ciawiasih"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-secondary" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/desaciawiasih"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-secondary" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com/@desaciawiasih"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
              >
                <Youtube className="h-5 w-5 text-secondary" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Ikuti media sosial kami untuk</p>
              <p>informasi terbaru dari desa</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Desa Ciawiasih. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
