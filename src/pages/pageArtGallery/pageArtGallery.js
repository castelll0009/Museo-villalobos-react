import React from 'react';
import {datasArtGallery} from './Data';
import { InfoSection, ArtGallery } from '../../components';


const pageArtGallery = () => {
  return (
    <div>    
     <ArtGallery {...datasArtGallery}/>         
    </div>
  )
}

export default pageArtGallery
