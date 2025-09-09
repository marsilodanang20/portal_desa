"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigationItems = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil Desa" },
  { href: "/struktur", label: "Struktur Pemerintahan" },
  { href: "/informasi", label: "Informasi & Berita" },
  { href: "/galeri", label: "Galeri" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logokabcirebon-LWYK7SeqaDXraz9QVH6mlLiDKGIrqi.png"
              alt="Logo Kabupaten Cirebon"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight">Desa Ciawiasih</span>
              <span className="text-xs text-muted-foreground">Kabupaten Cirebon</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop UMKM Button */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link
                href="https://profilumkmciawiasih.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                UMKM Desa
              </Link>
            </Button>
          </div>

          {/* Mobile Section */}
          <div className="md:hidden flex items-center space-x-2">
            {/* UMKM Button (Mobile) */}
            <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link
                href="https://profilumkmciawiasih.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                UMKM
              </Link>
            </Button>

            {/* Mobile Menu (Hamburger) */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Buka menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[320px] bg-white/95 backdrop-blur p-6"
              >
                <div className="flex flex-col h-full">
                  {/* Logo (Mobile) */}
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logokabcirebon-LWYK7SeqaDXraz9QVH6mlLiDKGIrqi.png"
                      alt="Logo Kabupaten Cirebon"
                      className="h-8 w-8 object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-heading font-bold text-base">Desa Ciawiasih</span>
                      <span className="text-xs text-muted-foreground">Kabupaten Cirebon</span>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-2 mt-6">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center py-3 px-4 rounded-lg text-base font-medium transition-colors hover:text-secondary hover:bg-secondary/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Footer (Mobile) */}
                  <div className="mt-auto pt-6 border-t">
                    <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <Link
                        href="https://profilumkmciawiasih.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kunjungi UMKM Desa
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
