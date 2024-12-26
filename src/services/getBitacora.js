import axios from "axios";
const ENDPOINT = process.env.NEXT_PUBLIC_API_URL + "bitacora/";

export default async function getBitacora(bitacoraId) {
  console.log("GET BitacoraID", bitacoraId);
  try {
    const resp = await axios.get(`${ENDPOINT}${bitacoraId}`);
    const data = resp.data;
    console.log("GET Bitacora", resp);
    
    return data;
  } catch (error) {
    return error;
  }
}
