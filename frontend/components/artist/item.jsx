import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: 'item',
            playerView: false,
            audioPlayer: false,
            playShow: true,
            pauseShow: false,
            duration: 'time',
            currentTime: 'current',
            timeRendered: false,
            discography: []
        }
    }

    componentDidMount(){
        this.props.readItem(this.props.match.params.userId,this.props.match.params.itemId)
            .then(res => this.setState({ item: res.item}))
        this.props.readAllUserItems(this.props.match.params.userId)
            .then(res => this.setState({discography: Object.values(res.items)}))
        // console.log('items',this.props.items)
        setTimeout(() => {
            this.setState({audioPlayer: true})
        }, 500);
    }

    toggleAudioPlayer() {
        this.setState({ audioPlayer: !this.state.audioPlayer })
    }

    play(){
        document.getElementById('item-player').play()
        this.setState({playShow: false})
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
    }

    pause(){
        document.getElementById('item-player').pause()
        this.setState({playShow: true})
        // document.querySelector('.fa-play').classList.remove('disappear')
        // document.querySelector('.fa-pause').classList.add('disappear')
    }

    timeUpdate(){
        let player = document.getElementById('elapsed-time')
        // console.log(player.currentTime)
        this.getDuration()
        let second;
        let minute;
        let ct = this.state.currentTime
        if (ct % 60 === 0 || ct > 60 ) {
            minute = Math.floor(ct / 60)
            second = Math.floor(ct - (minute * 60))
        } else {
            minute = 0
        }

        if (ct < 10){
            player.innerHTML = `0:0${Math.floor(ct)}`;
        } else if (ct < 60){
            player.innerHTML = `0:${Math.floor(ct)}`;
        } else {
            if (second < 10){
                player.innerHTML = `${minute}:0${second}`;
            } else {
                player.innerHTML = `${minute}:${second}`
            }
        }

        
        
    }

    // volumeUp(){
    //     if (document.getElementById('item-player').volume < 1){
    //         document.getElementById('item-player').volume += 0.1
    //     }
    // }

    // volumeDown(){
    //     if (document.getElementById('item-player').volume >= .1){
    //         document.getElementById('item-player').volume -= 0.1
    //     }
    // }

    getDuration(){
        // let time = document.getElementById('item-player').duration
        

        this.setState({duration: document.getElementById('item-player').duration})
        this.setState({ currentTime: document.getElementById('item-player').currentTime})
        this.setState({timeRendered: true})
        return this.state.currentTime
    }

    render() {
        // console.log('prop item', this.props.items.length)
        // console.log('state song', this.state.item.song)
        // console.log(this.state.duration)
        let renderPlayer;
        let currentButton;

        if (this.state.playShow){
            currentButton = <div className='play-button' onClick={() => this.play()}><i className="fas fa-play"></i></div>
        } else {
            currentButton = <div className='pause-button' onClick={() => this.pause()}><i className="fas fa-pause"></i></div>
        }

        let remainder;
        let minute;
        let second;
        let timeDuration = Math.round(this.state.duration)
        let durationRender;
        // console.log(time)
        if (timeDuration > 59) {
            minute = Math.floor(timeDuration / 60)
            remainder = minute * 60
            second = timeDuration - remainder
            durationRender = <span>{minute}:{second}</span>
        }
        
        // console.log(this.state.currentTime)
        // let timeLeft = this.state.currentTime
        // while (this.state.pauseShow){
        //     num = 0
        //     this.getDuration()
        // }
        // let currentTimeRender;
        // let counter;
        // if (timeLeft === 0){
        //     counter = 0
        //     while(this.state.pauseShow){
        //         setTimeout(() => {
        //             counter += 1
        //         }, 1000)
        //     }
        //     currentTimeRender = <span>{counter}</span>
        // }
        // else if (timeLeft > 59){
        //     minute = Math.floor(timeLeft / 60)
        //     remainder = minute * 60
        //     second = timeLeft - remainder
        //     currentTimeRender = <span>{minute}:{second}</span>
        // } else {
        //     minute = Math.floor(timeLeft / 60)
        //     remainder = minute * 60
        //     second = timeLeft - remainder
        //     currentTimeRender = <span>{minute}:{second}</span>
        // }
        
        if (this.state.audioPlayer){
            // console.log('time?')
            renderPlayer = <div>
                                <audio 
                                    id="item-player" 
                                    controls="controls"
                                    onTimeUpdate={()=>this.timeUpdate()}
                                >
                                        <source src={this.state.item.song} type="audio/mpeg" />
                                        Your browser does not support the audio tag.
                                </audio>
                                <div className="controls">
                                    <div className="play-pause">
                                        {currentButton}                                            
                                    </div>
                                    <div className='right-side'>
                                        <div className="time"><span id='elapsed-time'>0:00</span> / {durationRender}</div>
                                        <div className="time-location"></div>
                                    </div>
                                    {/* <div onClick={()=>this.volumeUp()}>Volume Up</div>
                                    <div onClick={()=>this.volumeDown()}>Volume Down</div> */}
                                </div>
                            </div>
            if (!this.state.timeRendered){
                setTimeout(() => {
                    this.getDuration();
                    // console.log(this.state.currentTime)
                }, 1000);
                
            }
        
        }

        let image = <img
            className="image"
            src={this.props.user.userImg}
            alt=""
        />

        console.log('single', this.state.item)
        console.log('discog', this.state.discography)

        let discography = this.state.discography.map(item => {
            return <div>
                        <img className="discog-cover" src={`${item.cover}`} alt=""/>
                    </div>
        })

        console.log()


        return (
            <div className="item-show">
                <img className='cover-art-header' src={`${this.state.item.cover}`} alt=""/>
                <div className='item-nav-bar'><div className="nav-music"><Link to={`/${this.state.item.owner_id}`}>music</Link></div></div>
                <div className="item-container">
                    <div className='about-item'>
                        <h1>{this.state.item.title}</h1>
                        <p className='artist'>by <Link to={`/${this.state.item.owner_id}`}>{this.state.item.artist_name}</Link></p>
                        <button>Delete</button>
                        <br />
                        {renderPlayer}
                        <br />
                        <br />
                        <br />
                        {/* <br /> */}
                        {/* hello */}
                        
                        <h3 className="digital">Digital Track</h3>
                        <h4 className='availability'>Streaming + Download</h4>
                        <p className="inclusion">Includes unlimited streaming via the free Bandcamp app, plus high-
                            <br />
                            quality download in MP3, FLAC and more.
                        </p>
                        <a className="download" href={`${this.state.item.song}`} download>Download Digital Track </a><span className="price">{this.state.item.price}</span>
                        <p className="release-date" >released {this.state.item.date}</p>
                        <p className="copyright" >© all rights reserved</p>
                    </div>
                    <img className="item-cover" src={this.state.item.cover} alt="song cover"/>
                    
                    <div className="sidebar">
                        <div className="about">
                            {/* <div className="username">
                                {this.state.item.owner_id}
                            </div> */}
                            <div className="image">
                                {image}
                                {/* <input
                                    id="user-image"
                                    type="file"
                                    // onChange={this.imageSubmit.bind(this)}
                                /> */}
                                {/* <div className="change-image">↻</div> */}
                            </div>

                            <p className='digital'>{this.props.user.username}</p>
                            <p className="availability">{this.props.user.location}</p>
                            <p className="copyright">{this.props.user.bio}</p>
                            <p>discography</p>
                            {discography}

                            {/* {location}
                            {bio} */}
                        </div>
                    </div>                   
                </div>
            </div>
        )
    }
}


export default Item;