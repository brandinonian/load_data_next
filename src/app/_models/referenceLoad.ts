import mongoose, { mongo } from "mongoose"

export interface IReferenceLoad extends mongoose.Document {

    // load specs
    cartridge: String;
    overallLength: Number;

    // case specs
    caseManufacturer: String;
    caseLength: Number;

    // bullet specs
    bulletManufacturer: String;
    bulletName: String;
    bulletWeight: Number;

    // primer specs
    primerManufacturer: String;
    primerName: String;

    // powder specs
    powderManufacturer: String;
    powderName: String;

    // barrel info
    barrelLength: Number;

    // velocity data
    minChargeWeight: Number;
    maxChargeWeight: Number;
    minVelocity: Number;
    maxVelocity: Number;

    // source
    source: String;

}

const referenceSchema = new mongoose.Schema<IReferenceLoad>({

    // load specs
    cartridge: { type: String },
    overallLength: Number,

    // case specs
    caseManufacturer: String,
    caseLength: Number,

    // bullet specs
    bulletManufacturer: String,
    bulletName: { type: String },
    bulletWeight: { type: Number },

    // primer specs
    primerManufacturer: String,
    primerName: String,

    // powder specs
    powderManufacturer: String,
    powderName: String,

    // velocity info
    barrelLength: Number,

    // velocity info
    minChargeWeight: Number,
    maxChargeWeight: Number,
    minVelocity: Number,
    maxVelocity: Number,

    // source
    source: String,
})

const ReferenceLoad = mongoose.models.ReferenceLoad || mongoose.model<IReferenceLoad>("referenceloads", referenceSchema);

export default ReferenceLoad;