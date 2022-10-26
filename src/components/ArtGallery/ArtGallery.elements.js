import styled from 'styled-components';

export const Section = styled.div`
padding: 100px 0 160px;
display: flex;
flex-direction: column;
justify-content: center;
background: #4b59f7;
`;

export const  TitleContainer = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
	min-height: 35vh;
	font-size: 36px;
	text-transform: uppercase;	
`;
export const H1 = styled.h1`
color: white;
`;

export const ArtGalleryContainer = styled.div`
width: 90%;
max-width: 1200px;
margin: 100px auto;
display: flex;
flex-direction: column;
position: relative;
`;

export const Evento = styled.div`
display: flex;
	justify-content: space-between;
	margin-bottom: 200px;
	position: relative;
`;

export const Foto = styled.div`
width: 42%;
border: 10px solid #fff;
position: relative;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Img = styled.img`
width: 100%;
vertical-align: top;
`;

export const Fecha = styled.h3`
display: flex;
align-items: center;
justify-content: start;
	width: calc(42% + 20px);
	font-size: 32px;
	font-weight: normal;
`;


