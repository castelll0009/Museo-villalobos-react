import React from 'react';
import {
	TitleContainer,
	H1,
	ArtGalleryContainer,
	Evento,
	Foto,	
	Img,
	Fecha
} from './ArtGallery.elements';


const ArtGallery = (
	{	
	img1, 
	img2,
	img3,
	img4,
	fecha,
    alt
	}
) => {
  return (
	< >	
	<TitleContainer > {/*hero*/}
		<H1>Torre artistica(tour artistique)</H1>
	</TitleContainer>	
	<ArtGalleryContainer>
		<Evento>
			<Foto data-os="fade-up">
				<Img src={img1} alt={alt}/>
			</Foto>
			<Fecha>{fecha}</Fecha>
		</Evento>
		<Evento>
			<Foto data-os="fade-up">
				<Img src={img2} alt={alt}/>
			</Foto>
			<Fecha>Noviembre 25 2022</Fecha>
		</Evento>
		<Evento>
			<Foto data-os="fade-up">
				<Img src={img3} alt={alt}/>
			</Foto>
			<Fecha>Noviembre 25 2022</Fecha>
		</Evento>
		<Evento>
			<Foto data-os="fade-up">
				<Img src={img4} alt={alt}/>
			</Foto>
			<Fecha>Noviembre 25 2022</Fecha>
		</Evento>
		
	</ArtGalleryContainer>	
	</>

	
  )
}

export default ArtGallery