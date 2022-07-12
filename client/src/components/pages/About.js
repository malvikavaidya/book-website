import "./About.css";
import React, { Component } from "react";
import headshot from "../../images/headshot.jpg";
import background from '../../images/books2.jpeg'

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
        <div style={{ backgroundImage: `url(${background})`, width: '100vw', height: '100vh'}}/> 
          <div className="centered">
            <img
              className="profile_image"
              // src={headshot}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">malvika vaidya</div>
            <div className="brief_description">
               Hi there! I'm a junior at UT Austin studying computer engineering. I like reading, working out, and eating good food!
            </div>
            <div className="space"></div>
            <div className="brief_description2">
               Books mean a lot to me. Not only are they an escape, but they give people inspiration and hope. Books give us courage - the courage to 
               keep fighting and dreaming. Words hold immeasurable power, and I'm confident that there are many ideas and lessons that can be taken from them - regardless of the book's genre or
               whether they're seen as "intellectual" or not. 
               Each book is valuable and prompts us to reconsider our own lives. 
              <div className="space"></div>
              In this blog, I write pretty succint reviews, but if you wanna discuss a book in more depth with me feel free to shoot me an email @ malvikavaidya26@gmail.com! I'm also open to book suggestions :)
            </div>
          </div>
        </div>
      </div>
    );
  }
}
