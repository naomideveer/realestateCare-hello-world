export class Inspection {
  constructor(data = {}) {
    this.id = data.id ?? null
    this.propertyId = data.propertyId ?? ''
    this.address = data.address ?? ''
    this.inspectorName = data.inspectorName ?? ''
    this.date = data.date ?? ''
    this.status = data.status ?? ''
    this.damage = data.damage ?? []
    this.deferredMaintenance = data.deferredMaintenance ?? []
    this.technicalInstallations = data.technicalInstallations ?? []
    this.modifications = data.modifications ?? []
  }
}
