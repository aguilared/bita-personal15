import axios from "axios";
const DATABASEURL = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = DATABASEURL + "clases";
export default async function getClases() {
  try {
    const resp = await axios.get(apiUrl);
    //console.log("CLASES", resp);
    return resp.data;
  } catch (error) {
    return error;
  }
}
