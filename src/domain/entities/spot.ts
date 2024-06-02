import Row from "./row";

export default class Spot {
    private readonly id: number;
    private readonly row: Row;
    private readonly price: number;
    private readonly available: boolean;
}
