import mongoose from "mongoose"

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
    cartridge: { type: String, required: true },
    overallLength: Number,

    // case specs
    caseManufacturer: String,
    caseLength: Number,

    // bullet specs
    bulletManufacturer: String,
    bulletName: { type: String, required: true },
    bulletWeight: { type: Number, required: true },

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

export default mongoose.models.ReferenceLoad || mongoose.model("Reference Load", referenceSchema)