import * as React from 'react'
import ImageGallery from 'react-image-gallery';
import "../layout.css"


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Certifications = ()=> {
    return (
        <div>
        <ImageGallery items={images} autoPlay lazyLoad="true" fullscreen/>
        </div>
    )

}

export default Certifications