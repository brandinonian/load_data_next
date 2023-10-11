import mongoose from "mongoose"

export interface IFactoryLoad extends mongoose.Document {
    cartrdige: String;
    manufacturer: String;
    bulletName: String;
    bulletWeight: Number;
    barrelLength: Number;
    velocity: Number;
}

const factorySchema = new mongoose.Schema<IFactoryLoad>({
    cartrdige: { type: String, required: true },
    manufacturer: { type: String, required: true },
    bulletName: { type: String, required: true },
    bulletWeight: { type: Number, required: true },
    barrelLength: Number,
    velocity: Number,
})

const FactoryLoad = mongoose.models.FactoryLoad || mongoose.model<IFactoryLoad>("factoryloads", factorySchema)

export default FactoryLoad;