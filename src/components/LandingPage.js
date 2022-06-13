import React from 'react'
import Map from './Map'
import Autocomplete2 from './Autocomplete2'

const LandingPage = () => {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-12">
  <div class="mx-auto max-w-4xl rounded-3xl bg-black p-20 text-center">
    <h2 class="text-5xl font-bold leading-tight text-white">Find SpaceX Mission</h2>
    <p class="mt-5 text-xl leading-8 text-white"> with Google Maps</p>
    <div>

    </div>
    {<Map/>}
    <p class="mt-5 text-xl leading-8 text-white"> Andrea . Daniel . Israel . Arturo . Fernando</p>
    </div>
  </div>
  )
}

export default LandingPage
