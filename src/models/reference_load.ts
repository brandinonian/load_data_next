import { Schema } from 'mongoose';

interface IReferenceLoad {
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

    // velocity info
    barrelLength: Number;
    velocity: Number;

}

const referenceSchema = new Schema<IReferenceLoad>({
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
    velocity: Number,
})

export default referenceSchema;