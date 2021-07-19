import * as React from 'react'
import ImageGallery from 'react-image-gallery'
import '../layout.css'
import Images from"../utils/certificationData"
const Certifications = () => (
  <div>
    <ImageGallery items={Images} autoPlay lazyLoad="true" fullscreen />
  </div>
)

export default Certifications
