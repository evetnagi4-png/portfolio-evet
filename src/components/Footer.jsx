import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-forest-950 px-5 py-6 text-center text-sm text-white/70 sm:px-8">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
