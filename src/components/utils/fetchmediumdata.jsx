import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col,
} from 'reactstrap';

const moment = require('moment');

const Fetchdata = function fetchdata () {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehdilebenz')
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, 10);

  return (
    <div id="blog" className="container mt-3">
      <h3 className="ui horizontal header divider mt-5">
        <h3 style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5%',
        }}
        >
          {' '}
          My Blog
        </h3>
      </h3>
      {isLoading && <p>Fetching data from Medium!</p>}

      <Row style={{
        width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '3%',
      }}
      >
        {finalData.map((article) => (
          <Col md="4" className="mb-6" key={article.guid}>
            <div>
              <Card style={{ maxWidth: '100%' }}>
                <CardImg top src={article.thumbnail} alt="img" style={{ maxWidth: '70%' }} />
                <CardBody>
                  <CardTitle style={{ textAlign: 'center' }}>
                    <a href={article.link}>
                      {' '}
                      {article.title}
                    </a>
                  </CardTitle>
                  <CardSubtitle style={{ textAlign: 'center' }}>
                    Published:
                    {' '}
                    {moment(article.pubDate).format('dddd, MMMM Do YYYY')}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Fetchdata;
