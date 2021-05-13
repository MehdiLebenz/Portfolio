import * as React from "react"
import Typewriter from "typewriter-effect"
import Accounts from './Accounts'

const Home = () => {
  return (
    <div className="container">
	<div className="avatar">
		<a href="https://codepen.io/MarioDesigns/">
			<img src="https://media-exp1.licdn.com/dms/image/C5603AQEQf2z_8T37vQ/profile-displayphoto-shrink_800_800/0/1548402321950?e=1626307200&v=beta&t=egCeGlFuvesaLkB7P1lsyBRnkCgc86YGRiJyQ1TD8HI" alt="Mehdi" />
		</a>
	</div>
	<div className="content">
    <h2>
              <Typewriter
                onInit={typewriter => {
                  typewriter.typeString("<span>Mehdi Benzarti</span> <br/>")
                  typewriter.typeString("<span className=test>Head of Operations </span> ").start()
                }}
              />
            </h2>
		<p>Follow me on:</p>
        <Accounts/>
	</div>
    <div className="quotes">
        <div className="card">
          <div className="box box1">
            <blockquote className="blockquote">
              Growth and change can be painful, but nothing is more painful than
              getting stuck somewhere you don't want to be{" "}
            </blockquote>
            <h2>
              <Typewriter
                onInit={typewriter => {
                  typewriter.typeString("Mehdi Benzarti ").start()
                }}
              />
            </h2>
          </div>
        </div>
      </div>
</div>

  )
}
export default Home