import * as React from 'react'
import ImageGallery from 'react-image-gallery'
import Images from"../utils/certificationData"
import styled from 'styled-components'


const Certifications = () => (
<div>
    <ImageGallery items={Images} autoPlay lazyLoad="true" fullscreen />
  </div>
)

export default Certifications
