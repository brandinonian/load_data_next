import { Schema } from "mongoose";

interface IFactoryLoad {
    cartrdige: String;
    manufacturer: String;
    bulletName: String;
    bulletWeight: Number;
}

const factorySchema = new Schema<IFactoryLoad>({
    cartrdige: { type: String, required: true },
    manufacturer: { type: String, required: true },
    bulletName: { type: String, required: true },
    bulletWeight: { type: Number, required: true }
})

export default factorySchema;