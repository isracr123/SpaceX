import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {getLocation} from "graphql";
import axios from "axios";

const containerStyle = {
  width: '600px',
  height: '400px',
};



function Map(source, position) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDCbrkB5GM0b3IU3Zig2k5uL-YVH9EWaEQ"
  })

  const [map, setMap] = React.useState(null)
  const [center, setCenter] = React.useState({
    lat: -3.745,
    lng: -38.523,

  })
  const [location, setLocation] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  async function  getLocationOnMap(currentLocation) {
    try {

      const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${currentLocation}&key=${"AIzaSyA_blprFeJDS_uX2blFTEzgIWtjgTvjVns"}`

      )
      setCenter(response.data.results[0].geometry.location)





    } catch (e) {
      this.notFound = true;
      this.errors.push(e)
    }

  }


  const onFormSubmit = e => {
    e.preventDefault();
    getLocationOnMap(location).then(r =>    console.log(center) )

  }

  return isLoaded ? (
      <div>


        <form onSubmit={onFormSubmit}>
          <label>
            Location:
            <input type="text"

                   onChange={event => setLocation(event.target.value)}
                   onKeyPress={event => {
                     if (event.key === 'Enter') {
                       setLocation(event.target.value)
                     }
                   }}/>
          </label>
     
        </form>

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker position={{ lat: center.lat, lng:center.lng }} />
        </GoogleMap>

      </div>

  ) : <></>
}

export default React.memo(Map)
