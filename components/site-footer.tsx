import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.jobTitle}</p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Vadodara, Gujarat, India</span>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <Link href={`tel:${siteConfig.phone}`} className="hover:underline">
                  {siteConfig.phone}
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <Link href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 transition-colors hover:text-primary" />
              </Link>
              <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 transition-colors hover:text-primary" />
              </Link>
              <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
