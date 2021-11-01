import styled from "styled-components"

const FooterWrapper = styled.div`


.foot {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;  text-align: center;
}



.footercontainer {
  border: 1px rgb(201, 199, 199);
  border-style: solid none solid none;
  width: 900px;
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
}

p {
  border-bottom: 2px solid #94bbe9;
  width: 70px;
  margin: 0 auto;
  margin-bottom: 10px;
}


.copyright {
  opacity: 0.6;
  color: gray;
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


`
export default FooterWrapper;