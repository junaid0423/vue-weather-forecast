import { Constants } from "../utils/constants";
import axios from "axios";
import OneCall from "@/types/one-call.type";
class MainHTTPService {
  getWeather(lat: number, lon: number): Promise<OneCall> {
    return axios
      .create({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .get(
        `${Constants.BASE_URL}onecall?lon=${lon}&lat=${lat}&uniots=metric&appid=${Constants.API_KEY}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }
}
export default new MainHTTPService();
