import Car from "./Car";
import EletricCar from "./EletricCar";

const car = new Car();
car.addFuel(20, "alcohol");
car.startVehicle();

const eletric_car = new EletricCar();
eletric_car.chargeBattery(360);
eletric_car.startVehicle();
