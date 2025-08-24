import axios from "axios";
const DATABASEURL = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = DATABASEURL + "animals/vacas";
export default async function getVacas() {
  try {
    const resp = await axios.get(apiUrl);
    console.log("VACASSS", resp);
    return resp.data;
  } catch (error) {
    console.log("ERRORP", error);
    return error;
  }
}
