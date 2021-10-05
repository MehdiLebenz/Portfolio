import styled from 'styled-components'
import Home from './home';

const HomeWrapper = styled.div`
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css";
@import "~react-image-gallery/styles/css/image-gallery.css";

.badge{
  display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.pal{
  width: 100px;
}
.psm{
  width: 100px;
}
.oyez{
  width: 26%;
  margin-top: 3%;
}
.image-gallery{
  margin-left: auto;
    margin-right: auto;
    margin-top: 6%;
    width: 50%;
    
}
@media screen and (max-width: 400px) {
  .image-gallery {
width: 102%;
  }
  .image-gallery-thumbnails-wrapper {

    visibility: hidden;

  }
  .image-gallery-play-button{
    visibility: hidden;
  }
  .image-gallery-fullscreen-button{
color: black;
  }
}

.container.is-fullhd{
  width: 100%;
}
h1 {
  font-size: 24px;
	margin: 10px 0 0 0;
	font-weight: lighter;
	text-transform: uppercase;
	color: #eeeeee;
}

p {
	font-size: 12px;
	font-weight: light;
	color: #333333;
}

span a {
	font-size: 18px;
	color: #cccccc;
	text-decoration: none;
	margin: 0 10px;
	transition: all 0.4s ease-in-out;

}
.span.a:hover {
  color: #ffffff;
}

@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}

.container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: center;

}

.avatar {
	width: 150px;
	height: 150px;
	box-sizing: border-box;
	border: 5px #3099b0 solid;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
	transform: translatey(0px);
	animation: float 6s ease-in-out infinite;
}
.avatar.img { width: 100%; height: auto; }

.Typewriter__wrapper span {
  color: white;
  background-color: #3099B0;
  text-align: justify;
}

.content {
	width: 100%;
	max-width: 600px;
	padding: 20px 40px;
	box-sizing: border-box;
  text-align: center;
  margin-left: 0;
  margin-right: 0;
  margin-top: 24px;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}
.button.is-primary{
  background-color: #3099b0 ;
}

.icons-box{
  background: #f2f2f2;
    box-sizing: border-box;
    box-shadow: -10px 10px 20px rgb(0 0 0 / 30%);
  width: max-content;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;

}

.vertical-box.span{
  background: #34495E;
  color: white;
  display: block;
  margin: 10px 0;
  padding: 5px 10px;   
}

.homecontainer {
  margin-top: 10%;
}
.level.is-mobile {
  margin-left: auto;
  margin-right: auto;
}
.image {
  margin-left: auto;
  margin-right: auto;
  width: 12em;
}
.quotes {
  margin-top: 2%;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 2;
}
.quotes .box {
  width: auto;
  height: auto;
  background: #f2f2f2;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);
}
.blockquote::before {
  content: open-quote;
  color: #7a7964;
  font-size: 2rem;
  
}
.blockquote::after {
  content: close-quote;
  color: #7a7964;
  font-size: 2rem;
}
.blockquote {
  quotes: "“" "”" "‘" "’";
  text-align: center;
  font-family: "Cursive ";
}
.quotes .box h2 {
  margin: 0;
  padding: 0;
  bottom: 10%;
  right: 2%;
  font-size: 1rem;
  text-align: center;
}
.quotes .bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  transition: all 0.5s ease-in;
  pointer-events: none;
  width: 100%;
  height: 200%;
  overflow: hidden;
}
.card{
  width: 70%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.Typewriter__cursor {
		visibility: hidden;
  }
  

.nav{display: flex;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;;
}
.titlenav{
  margin-left: 10px;
  font-size: 35px;
color: black;

}
.titlenav:hover{
color : #3273dc;

}
.has-text-centered{
  margin-right: 10px;
}


`;
export default HomeWrapper;
