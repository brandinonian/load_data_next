import { IReferenceLoad } from "../_models/referenceLoad";
import { useFetch } from "./useFetch";

const GetReferenceLoads = async () => {

    const fetch = useFetch();

    const res = await fetch.get('/api/reference_loads')
    const data = res.json();

    return data;
}

export default GetReferenceLoads;