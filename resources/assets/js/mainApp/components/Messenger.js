import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Messenger extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  clickedBtn = () => {
    console.log("Hey, dude.  You clicked the button");
  };
  render() {
    return (
      <section id="messenger">
        <div className="messenger-header">
          <div className="messenger-icon">
            <i className="fas fa-comments" />
          </div>
          <div className="title">Messenger</div>
          <div className="options-icon">
            <i className="fas fa-ellipsis-v" />
          </div>
        </div>
        <div className="users">
          <div className="users-container">
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: 30,
                  width: 30
                }}
              />
              <div className="username">James McAvoy</div>
              <div className="conversation">
                <i className="fas fa-comment" />
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </section>
    );
  }
}
