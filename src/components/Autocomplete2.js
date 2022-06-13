import React from 'react'
import Autocomplete from "react-google-autocomplete";


const Autocomplete2 = () => {
  return (
    <Autocomplete
  apiKey="AIzaSyA_blprFeJDS_uX2blFTEzgIWtjgTvjVns"
  style={{ width: "90%" }}
  onPlaceSelected={(place) => {
    console.log(place.geometry.location);
  }}
  options={{
    types: ["(regions)"],
    componentRestrictions: { country: "ru" },
  }}
  defaultValue="Amsterdam"
/>
  )
}

export default Autocomplete2
