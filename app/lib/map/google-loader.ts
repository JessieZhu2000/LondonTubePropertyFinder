import { Loader } from '@googlemaps/js-api-loader'
import type { Library } from '@googlemaps/js-api-loader'

let loader: Loader | null = null
let mapsPromise: Promise<typeof google> | null = null

export interface GoogleMapsOptions {
  libraries?: Library[]
}

function getApiKey(): string {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY
  if (!key) {
    // Provide a warning so production logs / user consoles show actionable guidance before we throw.
    if (typeof window !== 'undefined') {
      // Browser environment: user can inspect devtools.
      // eslint-disable-next-line no-console
      console.warn(
        'Google Maps API key missing: set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable interactive map. Falling back to offline list.'
      )
    } else {
      // Server side during build / prerender.
      // eslint-disable-next-line no-console
      console.warn('Google Maps API key missing during build/server execution. Provide NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.')
    }
    throw new Error('Google Maps API key is missing. Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in the environment.')
  }
  return key
}

export function initGoogleMapsLoader(options: GoogleMapsOptions = {}): void {
  if (loader) {
    return
  }

  loader = new Loader({
    apiKey: getApiKey(),
    version: 'weekly',
    libraries: options.libraries ?? ['geometry'], // Default to 'geometry' if no libraries are provided
    id: 'google-maps-script',
  })
}

export async function loadGoogleMaps(options: GoogleMapsOptions = {}): Promise<typeof google> {
  if (typeof window === 'undefined') {
    // eslint-disable-next-line no-console
    console.warn('Attempted to load Google Maps on the server; this function should only run client-side.')
    throw new Error('Google Maps can only be loaded in a browser environment.')
  }

  if (!loader) {
    initGoogleMapsLoader(options)
  }

  if (!mapsPromise) {
    mapsPromise = loader!.load()
  }

  return mapsPromise
}

export function resetGoogleMapsLoader(): void {
  loader = null
  mapsPromise = null
}
