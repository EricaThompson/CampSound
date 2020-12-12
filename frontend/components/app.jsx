import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import ArtistHomepageContainer from './artist/artist_homepage_container';
// import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: ''
        };
        // this.getUser = this.fetchUser.bind(this);
    }

    

    render(){
        // console.log("app console",this.state.user)
        // console.log("app console 2", this.state.currentUser.userImg)

        return(
            <div className="container">
                <div className="top">
                    <Modal />
                    <Route key={Math.random()} path="/" component={NavBarContainer} />
                    <Route path="/:userId" component={ArtistHomepageContainer} />
                    {/* <Route exact path="/" /> */}
                    {/* <img id="main-story" src={require('../../app/assets/images/pexels.jpg')} alt="main story image" /> */}
                </div>
            </div>
        )
    }
}

export default App;