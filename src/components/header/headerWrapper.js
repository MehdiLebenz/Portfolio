import styled from 'styled-components';

const HeaderWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');body {
  font-family: 'Roboto', sans-serif;  margin: 0;
  width:100%;
  height:100vh
}
.Header {
  top: 0; /* Stick it to the top */
  max-height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas: "logo nav";
}

.Logo {
  grid-area: logo;
  height: 70px;
}

.Nav {
    display: flex;
    grid-area: nav;
    grid-template-columns: repeat(4,auto);
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-items: center;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    flex-wrap: nowrap;

}
.Nav a {
  color: black;
  font-size: 20px;
  font-weight: 500;
  transition: 0.5s;
  text-decoration: none;
  margin-left: 3%;

}
.Nav a:hover {
  transform: scale(1.1);
}
.Nav button {
  padding: 5px;
  outline: none;
  border: none;
  font-size: 20px;
  color: #fff;
  font-weight: 200;
  background-color: #94bbe9;
  border-radius: 25px;
  cursor: pointer;
  transition: 70ms;
}

.Nav button:active {
  transform: translateY(3px);
  box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
}

.Burger {
  display: none;
  grid-area: burger;
  margin: 0 20px 0 0;
  padding: 0;
  justify-self: end;
  font-size: 40px;
  border: none;
  background: none;
  outline: none;
  transition: 0.1s;
}
.Burger:active {
  transform: scale(1.2);
}

@media (max-width: 700px) {
  .Header {
    grid-template-areas: "logo burger" "nav nav";
  }
  .Nav {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: none;
    grid-row-gap: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;  grid-area: nav;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;
    padding: 30px 0 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .Burger {
    display: inline;
  }
}

.NavAnimation-enter {
  opacity: 0;
  transform: scale(0.5);
}
.NavAnimation-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 350ms, transform 350ms;
}
.NavAnimation-exit {
  opacity: 1;
}
.NavAnimation-exit-active {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 350ms, transform 350ms;
}

.toggle{
  width:40%
}
@media (max-width: 700px) {
.toggle{
  width:100%
}
}

`;
export default HeaderWrapper;
