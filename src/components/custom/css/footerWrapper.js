import styled from 'styled-components';

const FooterWrapper = styled.div`
@import 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap';
.foot {
  font-family: 'Roboto', sans-serif;  text-align: center;
}



.footercontainer {
  font-family: 'Roboto', sans-serif;
  border: 1px rgb(201, 199, 199);
  border-style: solid none solid none;
  width: auto;
  padding: 10px 50px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    
}

a {
  text-decoration: none;
  margin-left: 10px;
  color: black;
  font-family: 'Roboto', sans-serif;
}

p {
  border-bottom: 2px solid #94bbe9;
  width: 70px;
  margin: 0 auto;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
}


.copyright {
  opacity: 0.6;
  color: gray;
  font-family: 'Roboto', sans-serif;
}
.divfooter{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.footer img {
  margin-left: 5px;
}

@media only screen and (max-width: 700px) {
  .container {
    margin: 0 auto;
    width: 180px;
  }
  p {
    font-size: 13px;
    width: 60px;
  }
  .container a {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 18px;
  }
  .footer a {
    font-size: 12px;
  }
  .footer img {
    width: 15px;
  }
}


`;
export default FooterWrapper;
