import mongoose from 'mongoose'

export interface ICustomLoad extends mongoose.Document {
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

const customSchema = new mongoose.Schema<ICustomLoad>({
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

export default mongoose.models.CustomLoad || mongoose.model("Custom Load", customSchema)