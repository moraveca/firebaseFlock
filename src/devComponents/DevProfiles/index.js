import React, { Component } from "react";
import { db } from "../../api/firebase/index"

class DevProfiles extends Component {
    // Setting the component's initial state
    state = {
        profiles: []
    };

    componentDidMount() {
        this.loadProfiles();
    };

    loadProfiles = () => {

        db.collection("users").limit(10).get().then(querySnapshot => {

            const profileArray = [];

            querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                profileArray.push(doc.data())

            });

            console.log("profileArray: ", profileArray);
            this.setState({ profiles: profileArray });
            console.log("this.profiles: ", this.state.profiles)
        });
    };




    render() {
        return (
            <div>
                {this.state.profiles.length ? (
                    <list>
                        {this.state.profiles.map(profile => (
                            <h2>
                                {profile.firstName} {profile.lastName}
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

export default DevProfiles;
