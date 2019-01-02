import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  clickedBtn = () => {
    console.log("Hey, dude.  You clicked the button");
  };
  showLatestPosts = () => {
    if(this.props.initialData.latestPosts != undefined) {
      return this.props.initialData.latestPosts.map((item, index) => {
        let post = item.posts
        let user = item.users
        return(<div className="update-container" key={index}>
          <div className="author-info">
            <a href="#" className="user-img" style={{
              backgroundImage:
              `url('${user.profile_img}')`
            }}/>
            <div className="info">
              <a href="/profile">{`${user.first_name} ${user.last_name}`}</a> shared this
              <a href="#">
              {(post.type === 'text') ? 'story' : 'image'}
              </a>
            </div>
          </div>
          <div className="media">
            <div
              className="image"
              style={post.type !== 'text' ? {
                background:
                  'url("https://images.pexels.com/photos/355749/pexels-photo-355749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'
              } : {background: 'url("https://images.unsplash.com/photo-1524401597352-ec4463663233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")'}}
            />
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3>How to become a virtual world developer?</h3>
                <p>
                  {post.content}
                </p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
                <div className="other-users">
                  Sarah Brovowski and 74 others liked this.
                </div>
                <div className="comments-stats">2 comments</div>
              </div>
              <div className="compose-comment">
                <textarea
                  name="name"
                  rows={8}
                  cols={80}
                  defaultValue={""}
                />
                <div className="buttons">
                  <div className="repost-btn">
                    <i className="fas fa-redo" />
                  </div>
                  <div className="like-btn">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
      })
    }
  }
  render() {
    return (
      <section id="posts">
        {this.showLatestPosts()}
      </section>
    );
  }
}
