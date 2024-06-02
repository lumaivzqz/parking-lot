import Spot from "./spot";
import Vehicle from "./vehicle";

export default class Parking {
    private readonly id;
    private readonly vehicle: Vehicle;
    private readonly spot: Spot;
    private dateStart: Date;
    private dateEnd: Date;
    private price_total: number;
}