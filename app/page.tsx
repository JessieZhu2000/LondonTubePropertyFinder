import MapExperience from '@/app/components/MapExperience/MapExperience'
import { loadStaticTransitData } from '@/app/lib/data/load-static-data'
// Static generation hint so exported HTML contains a lightweight SSR skeleton.
export const dynamic = 'force-static'

// Dynamic import of MapExperience with SSR disabled can cause blank HTML if nothing is rendered.
// Instead we keep MapExperience SSR-capable and provide a static skeleton to ensure non-empty HTML.

export default function HomePage() {
  const dataset = loadStaticTransitData()

  return (
    <main>
      {/* Lightweight SSR skeleton (enhances pre-hydration HTML for crawlers & users without JS) */}
      <h1 className="visually-hidden" aria-hidden="false">London Tube &amp; DLR Interactive Map</h1>
      <p className="visually-hidden" aria-hidden="false">
        Explore every London Underground and DLR line. JavaScript loads an interactive map; without it you can still see basic metadata.
      </p>
      <noscript>
        <p>Interactive map requires JavaScript. Enable it to view the network.</p>
      </noscript>
      <MapExperience dataset={dataset} />
    </main>
  )
}
