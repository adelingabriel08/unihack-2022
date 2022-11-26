import Grid from "@mui/material/Grid";
import { useLoadScript } from "@react-google-maps/api";
import HeatMapComponent from "../components/map/heat-map";

const HeatMap = () => {
  const google = window.google;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      process.env.GOOGLE_API_KEY || "AIzaSyDtoQL1szabhLVJO2qYj6NEXUn3NmEkrm4", // Add your API key
  });
  return isLoaded ? <HeatMapComponent /> : null;
};
