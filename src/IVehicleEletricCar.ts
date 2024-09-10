import IVehicle from "./IVehicle";

export default interface IVehicleEletricCar extends IVehicle {
  chargeBattery(minutes: number): void;
}
