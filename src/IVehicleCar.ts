import IVehicle from "./IVehicle";

export default interface IVehicleCar extends IVehicle {
  addFuel(liters: number, type: string): void;
}
