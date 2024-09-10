import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
  startVehicle(): void {
    console.log("starting car");
  }

  addFuel(liters: number, type: string): void {
    console.log(`adding ${liters} liters of ${type}`);
  }
}
