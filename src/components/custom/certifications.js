import * as React from 'react'
import ImageGallery from 'react-image-gallery'
import '../layout.css'

const images = [
  {
    original: ' https://i.ibb.co/JCdwS6C/Capture-d-e-cran-2021-05-25-a-2-26-22-PM.png',
    thumbnail: ' https://i.ibb.co/JCdwS6C/Capture-d-e-cran-2021-05-25-a-2-26-22-PM.png',
    
  },
 
  {
    original: ' https://i.ibb.co/hX5BFnG/Capture-d-e-cran-2021-05-25-a-2-24-42-PM.png',
    thumbnail: ' https://i.ibb.co/hX5BFnG/Capture-d-e-cran-2021-05-25-a-2-24-42-PM.png',
    
  },

  {
    original: 'https://media-exp1.licdn.com/dms/image/C4E22AQEhimfeA11aKQ/feedshare-shrink_2048_1536/0/1617716968273?e=1624492800&v=beta&t=cG7Bglt11_BMz-ZklWgatHG871a0GUznqnIUNBhG4wk',
    thumbnail: 'https://media-exp1.licdn.com/dms/image/C4E22AQEhimfeA11aKQ/feedshare-shrink_2048_1536/0/1617716968273?e=1624492800&v=beta&t=cG7Bglt11_BMz-ZklWgatHG871a0GUznqnIUNBhG4wk',
    
  },
  {
    original: 'https://media-exp1.licdn.com/dms/image/C4E22AQHWHsSgN1oFSQ/feedshare-shrink_2048_1536/0/1617716968380?e=1624492800&v=beta&t=RaKPNmIUHiyF8yhs6dEJGzygeuw2AT9KQ2mL8hDLO5c',
    thumbnail: 'https://media-exp1.licdn.com/dms/image/C4E22AQHWHsSgN1oFSQ/feedshare-shrink_2048_1536/0/1617716968380?e=1624492800&v=beta&t=RaKPNmIUHiyF8yhs6dEJGzygeuw2AT9KQ2mL8hDLO5c',
  },
  {
    original: 'https://media-exp1.licdn.com/dms/image/C4E22AQGsm5-4akG5xw/feedshare-shrink_2048_1536/0/1617716968870?e=1624492800&v=beta&t=vPAa2qssGU19-Quz7YBX-iJlStHWtvq6mBhoeojMS-w',
    thumbnail: 'https://media-exp1.licdn.com/dms/image/C4E22AQGsm5-4akG5xw/feedshare-shrink_2048_1536/0/1617716968870?e=1624492800&v=beta&t=vPAa2qssGU19-Quz7YBX-iJlStHWtvq6mBhoeojMS-w',
  },
  {
    original: 'https://media-exp1.licdn.com/dms/image/C4E22AQFSMjhhCfbpsg/feedshare-shrink_2048_1536/0/1601292485274?e=1624492800&v=beta&t=jY3erjZ-zehGJPs24yUQpDjWRI6eR0xUD7A89-UsX1w',
    thumbnail: 'https://media-exp1.licdn.com/dms/image/C4E22AQFSMjhhCfbpsg/feedshare-shrink_2048_1536/0/1601292485274?e=1624492800&v=beta&t=jY3erjZ-zehGJPs24yUQpDjWRI6eR0xUD7A89-UsX1w',
    
  },
  
]

const Certifications = () => (
  <div>
    <ImageGallery items={images} autoPlay lazyLoad="true" fullscreen />
  </div>
)

export default Certifications
