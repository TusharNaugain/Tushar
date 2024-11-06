import React from 'react'

function companies() {
  return (
    <div data-scroll data-scroll-section className=' h-fit w-full bg-yellow-100 rounded-tl-[10vw] '>
        <div className='flex gap-10 px-8 md:px-16 py-10 md:py-20  marker font-founders '>
            <h1 className='tracking-tight leading-8 md:leading-[2vw] text-[12vw] md:text-[5vw] w-[40vw]'>Our Clients</h1>
            <span className=' text-[8vw] leading-8 md:text-[2vw]'> At Atbuzz, we craft dynamic marketing strategies that elevate your brand’s visibility and drive engagement. Our data-driven approach and creative solutions help businesses grow and thrive in a competitive landscape. Let us boost your brand’s impact with tailored marketing campaigns that deliver results. </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  md:ml-[10vw] ml-[5vw] mb-[1vw] overflow-hidden">
  <div className="p-4 ">
    <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg" alt="Airbnb" />
  </div>
  <div className="p-4">
    <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png" className="w-32" alt="Client 8" />
  </div>
  <div className="p-4">
    <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png" className="w-32" alt="Client 3" />
  </div>
  <div className="p-4">
    <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png" className="w-32" alt="Client 1" />
  </div>
  <div className="p-4">
    <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg" className="w-32" alt="Tailus" />
  </div>
  <div className="p-4">
    <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg" className="w-32" alt="Microsoft" />
  </div>
  <div className="p-4">
    <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg" className="w-20" alt="Coty" />
  </div>
  <div className="p-4">
    <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png" className="w-24" alt="Client 4" />
  </div>
</div>

    </div>
  )
}

export default companies