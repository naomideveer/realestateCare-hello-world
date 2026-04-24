import { Inspection } from '@/models/Inspection'

const API_URL =
  'https://my-json-server.typicode.com/naomideveer/realestateCare-hello-world/inspections'

export async function fetchInspections() {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data.map((item) => new Inspection(item))
}
