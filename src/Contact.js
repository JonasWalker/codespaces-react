import { useMemo } from "react";
// import { GoogleMap, Marker } from "react-google-maps"
// import { GoogleMap, Loader, Marker } from "@googlemaps/js-api-loader"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "@googlemaps/js-api-loader"
export default function Contact() {


    return (
      <div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>

        <MyMapComponent isMarkerShown />// Map with a Marker
        <MyMapComponent isMarkerShown={false} />// Just only Map
      </div>
    );
  }