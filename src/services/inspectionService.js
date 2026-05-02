import axios from 'axios'
import { Inspection } from '@/models/Inspection'

const API_URL =
  'https://my-json-server.typicode.com/naomideveer/realestateCare-hello-world/inspections'

export async function fetchInspections() {
  try {
    const response = await axios.get(API_URL)
    return response.data.map((item) => new Inspection(item))
  } catch (_e) {
    console.error('Fout bij ophalen inspecties:', _e)
    throw _e
  }
}
