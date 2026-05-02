import { Inspection } from '@/models/Inspection'

const API_URL =
  'https://my-json-server.typicode.com/naomideveer/realestateCare-hello-world/inspections'

export async function fetchInspections() {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error(`API fout: ${response.status}`)
    }

    const data = await response.json()
    return data.map((item) => new Inspection(item))
  } catch (error) {
    console.error('Fout bij ophalen inspecties:', error)
    throw error
  }
}
