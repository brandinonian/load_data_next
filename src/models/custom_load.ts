import { Schema } from "mongoose";

interface ICustomLoad {
    // load specs
    cartridge: String;
    overallLength: Number;
    baseToOgive: Number;

    // case specs
    caseManufacturer: String;
    caseLength: Number;
    annealedTime: Number;
    timesFired: Number;

    // bullet specs
    bulletManufacturer: String;
    bulletName: String;
    bulletWeight: String;

    // primer specs
    primerManufacturer: String;
    primerName: String;

    // powder specs
    powderManufacturer: String;
    powderName: String;

    // velocity data
    velocityData: {
        barrelName: String;
        powderChargeWeight: [];
        velocities: [];
    }
}

const customSchema = new Schema<ICustomLoad>({
    // load specs
    cartridge: { type: String, required: true },
    overallLength: Number,
    baseToOgive: Number,

    // case specs
    caseManufacturer: String,
    caseLength: Number,
    annealedTime: Number,
    timesFired: Number,

    // bullet specs
    bulletManufacturer: String,
    bulletName: { type: String, required: true },
    bulletWeight: { type: String, required: true },

    // primer specs
    primerManufacturer: String,
    primerName: String,

    // powder specs
    powderManufacturer: String,
    powderName: String,

    // velocity data
    velocityData: {
        barrelName: String,
        powderChargeWeight: [],
        velocities: [],
    },
})

export default customSchema;