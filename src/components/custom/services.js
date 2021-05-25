import * as React from 'react'
import './css/services.css'
const Services = () => (
  <div id="btns">
    <div className="btn" onClick="window.location='#'">
      <div className="icon">
        <i className="fa fa-code fa-2x" aria-hidden="true"></i>
      </div>
      <h2> Static sites</h2>
      <p>
      You need a static website for your online store or your personal blog or others ..
      </p>
    </div>
    <div className="btn" onClick="window.location='#'">
      <svg className="icon"></svg> <h2>Heading</h2>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
    </div>
    <div className="btn" onClick="window.location='#'">
      <svg className="icon"></svg>
      <h2>Heading</h2>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
    </div>
    <div className="btn" onClick="window.location='#'">
      <svg className="icon"></svg>
      <h2>Heading</h2>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
    </div>
  </div>
)
export default Services
