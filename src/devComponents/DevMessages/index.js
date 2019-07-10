import React, { Component } from "react";
import { database } from "../../api/firebase/index";

class DevMessages extends Component {
    // Setting the component's initial state
    state = {
        posts: []
    };

    componentDidMount() {
        this.loadMessages();
    };

    loadMessages = () => {
        database.ref("/bulletinposts").on("value", snapshot => {

            const messages = snapshot.val();

            const postsArray = Object.entries(messages);
            console.log("postsArray: ", postsArray);

            this.setState({ posts: postsArray });
            console.log("state.posts: ", this.state.posts);


            
            // const postsArray = [];

            // snapshot.forEach(childSnapshot => {
            //     var childKey = childSnapshot.key;
            //     var childData = childSnapshot.val();
            //     console.log("childKey: ", childKey);
            //     console.log("childData: ", childData);
            //     postsArray.push(childData);
            // });

            // console.log("postsArray: ", postsArray);
            // this.setState({ posts: postsArray })

        })
    }




    render() {
        return (
            <div>
                {this.state.posts.length ? (
                <list>
                    {this.state.posts.map(post => (
                            <h2>
                                {post[1].message} by {post[1].user}
                            </h2>
                    ))}

                </list>
                 ) : (
                    <h3>No Results to Display</h3>
                  )}

            </div>
        );
    }
}

export default DevMessages;
