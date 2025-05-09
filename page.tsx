import Link from "next/link"

import { Button } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("/images/viking-background.png")' }}
            />
            <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for better text readability */}
          </div>
          <div className="container relative z-10 flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">The Viking Vibe</h1>
            <p className="max-w-[42rem] leading-normal text-white sm:text-xl sm:leading-8">
              A collaborative calendar and exclusive blog platform for the Viking community. Share updates, plan events,
              and stay connected.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/calendar">
                <Button size="lg">View Calendar</Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  Read Blog
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Rest of the page content remains the same */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Features</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to coordinate with your team and share important updates.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Collaborative Calendar</h3>
              <p className="mt-2 text-muted-foreground">Create, edit, and share events with your team in real-time.</p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Bi-Monthly Blog</h3>
              <p className="mt-2 text-muted-foreground">
                Stay updated with regular blog posts about team activities and announcements.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Multi-User Access</h3>
              <p className="mt-2 text-muted-foreground">
                Different permission levels for team members to view and edit content.
              </p>
            </div>
          </div>
        </section>
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid max-w-[58rem] gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">Get Started Today</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Create an account to start collaborating with your team on events and blog posts.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border bg-background p-8">
              <UserAuthForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 The Viking Vibe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
