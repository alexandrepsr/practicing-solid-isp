import IVehicleEletricCar from "./IVehicleEletricCar";

export default class EletricCar implements IVehicleEletricCar {
  
  startVehicle(): void {
    console.log("starting eletric car");
  }
  
  chargeBattery(minutes: number): void {
    console.log(`charging battery for ${minutes} minutes`);
  }
}
