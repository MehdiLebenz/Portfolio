import * as React from "react"
import Typewriter from "typewriter-effect"
import Accounts from './Accounts'
const Home = () => {
  return (
    <div class="homecontainer">
      <figure class="image">
        <img
          class="is-rounded"
          src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/165579512_3949001358493590_5257070772858628580_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0Mih-8XWDggAX9bQ7jA&_nc_ht=scontent.ftun10-1.fna&oh=4552e2953bb4cd02e57293e92babd21f&oe=60C11917"
        />
      </figure>
      <Accounts/>
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </div>
      </nav>
      <div class="quotes">
        <div class="card">
          <div class="box box1">
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
