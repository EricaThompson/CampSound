import React from 'react';
// import { Link } from 'react-router-dom';
import * as StoryAPIUtil from '../../util/stories_api_util';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';

// import * as SessionAPIUtil from '../../util/session_api_util';
// // import { readAllUserItems } from '../../util/items_api_util';
// import MailchimpSubscribe from "react-mailchimp-subscribe"

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageCount: 1,
            items: [],
            loading: false,
            selectedItem: '',
            selectedSongImage: '',
            selectedSong: '',
            viewPlayer: false,
            viewSelected: true,
            playShow: true,
            duration: 'time',
            currentTime: 'current',
            timeRendered: false,
            bar1: '#41A0BD',
            bar2: '#4390A8',
            bar3: '#4390A8',
            bar4: '#418194',
            all: 'selected',
            electronic: '',
            rock: '',
            metal: '',
            metal: '',
            alternative: '',
            hip_hop: '',
            experimental: '',
            punk: '',
            folk: '',
            pop: '',
            ambient: '',
            soundtrack: '',
            world: '',
            jazz: '',
            currentGenre: ''
        }



    }

    componentDidMount(){
        // this.setState({viewPlayer: false})

        // this.setState({loading: true})


        
        this.props.browseAll()
            .then((res) => this.setState({ 
                selectedItem: Object.values(res.items)[0],
                selectedSongImage: Object.values(res.items)[0].cover,
                
                selectedSong: Object.values(res.items)[0].song
            }, this.setState({ viewPlayer: true })))


        // this.props.genreSearch(this.props.match.params.result)
        //     .then(res => this.setState({ discoverResults: res.items }))

        this.props.browseAll()
            .then(res => {
                this.setState({
                    items: Object.values(res.items),
                    //!pageCount here
                    pageCount: Math.ceil(Object.values(res.items).length / 8),
                    loading: false
                })

            })
        // this.setState({ loading: true })
        // this.setState({ viewPlayer: true })
    }

    // allTab(){
    //     this.props.browseAll()
    //         .then(res => this.setState({ items: Object.values(res.items) }))
    // }

    search(genre){
        this.setState({viewSelected: true})
        
        
        if (genre === 'all'){
            this.props.browseAll()
                .then(res => {
                    this.setState({ items: Object.values(res.items) })
                    this.setState({loading: false, selectedSongImage: Object.values(res.items)[0].cover})
                    this.setState({ viewSelected: true })
                    // this.setState({ loading: true })
                })
        } else if (genre.includes("hop") || genre.includes('rap')){
            this.props.genreSearch('hip hop')
                .then(res => {
                    this.setState({ items: Object.values(res.items) })
                    this.setState({
                        loading: false, 
                        selectedSongImage: Object.values(res.items)[0].cover,
                        selectedSong: Object.values(res.items)[0].song,
                        selectedItem: Object.values(res.items)[0]
                    
                    })
                    this.setState({ viewSelected: true })
                })
        } else {
            this.props.genreSearch(genre)
                .then(res => {
                    if (Object.values(res.items).length < 1){
                        // this.setState({loading: false, selectedSongImage: Object.values(res.items)[0].cover})
                        this.setState({ viewSelected: false })
                    } else {
                        this.setState({ items: Object.values(res.items) })
                        
                        this.setState({ 
                            loading: false, 
                            selectedSongImage: Object.values(res.items)[0].cover,
                            selectedSong: Object.values(res.items)[0].song,
                            selectedItem: Object.values(res.items)[0] 
                        
                        })
                        this.setState({viewSelected: true})
                    }
                })
        }
    }

    switchTab(genre){
    
        
        this.setState({
            items: [],
            page: 1,
            all: '',
            electronic: '',
            rock: '',
            metal: '',
            metal: '',
            alternative: '',
            hip_hop: '',
            experimental: '',
            punk: '',
            folk: '',
            pop: '',
            ambient: '',
            soundtrack: '',
            world: '',
            jazz: '',
            playShow: true
            // loading: 'true',
            // viewPlayer: true
        })
        
        this.search(genre);

        // if (genre != 'all'){
        //     this.setState({ all: '' })
        // }
        
        this.setState({ [genre]: 'selected', currentGenre: genre })
        

        switch (genre) {
            case 'all':
                this.setState({ 
                    bar1: '#41A0BD',
                    bar2: '#4390A8',
                    bar3: '#4390A8',
                    bar4: '#418194',
                })
                // this.allTab();
                break;
            case 'electronic':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28',
                    bar4: '#2F8628' 
                })
                break;
            case 'rock':
                this.setState({ 
                    bar1: '#D42127',
                    bar2: '#BE2428',
                    bar3: '#A72529',
                    bar4: '#92262A' 
                })
                break;
            case 'metal':
                this.setState({ 
                    bar1: '#990201',
                    bar2: '#820504',
                    bar3: '#6B0807',
                    bar4: '#550808' 
                })
                break;
            case 'alternative':
                this.setState({ 
                    bar1: '#E65719',
                    bar2: '#CD521E',
                    bar3: '#B64E21',
                    bar4: '#A04823' 
                })
                break;
            case 'hip_hop':
                this.setState({ 
                    bar1: '#3764A1',
                    bar2: '#365B8D',
                    bar3: '#355379',
                    bar4: '#324967' 
                })
                break;
            case 'experimental':
                this.setState({ 
                    bar1: '#5D1AE6',
                    bar2: '#581DCD',
                    bar3: '#5220B6',
                    bar4: '#4C22A0' 
                })
                break;
            case 'punk':
                this.setState({ 
                    bar1: '#F25202',
                    bar2: '#D94D0A',
                    bar3: '#C0480D',
                    bar4: '#A94211' 
                })
                break;
            case 'folk':
                this.setState({ 
                    bar1: '#984AB5',
                    bar2: '#8A4AA2',
                    bar3: '#7B498D',
                    bar4: '#6D477B' 
                })
                break;
            case 'pop':
                this.setState({ 
                    bar1: '#F20F93',
                    bar2: '#D91386',
                    bar3: '#C11579',
                    bar4: '#AA196D' 
                })
                break;
            case 'ambient':
                this.setState({ 
                    bar1: '#A3C2BD',
                    bar2: '#9BB5B1',
                    bar3: '#94A8A5',
                    bar4: '#8F9997' 
                })
                break;
            case 'soundtrack':
                this.setState({ 
                    bar1: '#5E9FC9',
                    bar2: '#5594BE',
                    bar3: '#4C8AB4',
                    bar4: '#4C7E9E' 
                })
                break;
            case 'world':
                this.setState({ 
                    bar1: '#E61964',
                    bar2: '#CD1E5E',
                    bar3: '#B62058',
                    bar4: '#A02250' 
                })
                break;
            case 'jazz':
                this.setState({ 
                    bar1: '#07B89F',
                    bar2: '#049F8A',
                    bar3: '#0A8877',
                    bar4: '#077263'
                })
                break;
            default:
                break;
        }
    }

    selectSong(idx){
        // let itemCover = Object.values(this.state.items).map(item => {
        //     if (item.id === id){
        //         return item
        //     }
        // })
        
        this.getDuration();
        this.setState({viewPlayer: false});

        let itemSong = this.state.items[idx].song
        let itemCover = this.state.items[idx].cover
        
        this.setState({ selectedItem: this.state.items[idx], selectedSong: itemSong, selectedSongImage: itemCover })
        
        setTimeout(() => {
            this.setState({ viewPlayer: true })
        }, 1);

        // this.play();
        

    }

    play() {
        this.setState({ playShow: false })
        setTimeout(() => {
            
            document.getElementById('item-player').play()
        }, 100);
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
    }

    pause() {
        this.setState({ playShow: true })
        document.getElementById('item-player').pause()
        // document.querySelector('.fa-play').classList.remove('disappear')
        // document.querySelector('.fa-pause').classList.add('disappear')
    }

    timeUpdate() {
        let player = document.getElementById('elapsed-time')
        // console.log(player.currentTime)
        this.getDuration()
        let second;
        let minute;
        let ct = this.state.currentTime
        
            if (ct % 60 === 0 || ct > 60) {
                minute = Math.floor(ct / 60)
                second = Math.floor(ct - (minute * 60))
            } else {
                minute = 0
            }

            if (ct < 10) {
                player.innerHTML = `00:0${Math.floor(ct)}`;
            } else if (ct < 60) {
                player.innerHTML = `00:${Math.floor(ct)}`;
            } else {
                if (second < 10) {
                    player.innerHTML = `0${minute}:0${second}`;
                } else {
                    player.innerHTML = `0${minute}:${second}`
                }
            }
    

    }


    getDuration() {
        // let time = document.getElementById('item-player').duration

        if (this.state.items.length > 0){

            this.setState({ duration: document.getElementById('item-player').duration })
            this.setState({ currentTime: document.getElementById('item-player').currentTime })
            this.setState({ timeRendered: true })
            return this.state.currentTime
        }
        
    
    }

    next(){
        if (this.state.pageCount > this.state.page){
            let nextPage = this.state.page + 1
            this.setState({page: nextPage})
        }
    }

    previous() {
        if (this.state.page > 1) {
            let prevPage = this.state.page - 1
            this.setState({ page: prevPage })
        }
    }

    selectPage(num){
        // this.setState({ loading: true })
        this.setState({page: num})
    }



    render() {
        // console.log('pc', this.state.pageCount)
        

        // console.log('ssi', this.state.selectedSongImage)
        let results;
        // if (this.state.page === 1){
            results = this.state.items.map((result,idx) => {
                let show;
                if (idx < (this.state.page * 8) && idx >= (this.state.page * 8 - 8)){
                    let playPauseBtn;

                    playPauseBtn =

                        <div

                            className={`play-pause play-button`}
                            onClick={
                                () => {

                                    // this.displayPause1(idx)
                                    this.play()
                                }}
                        >

                            <i className="fas fa-play"></i>
                        </div>

                    if (this.state.playShow && result.id === this.state.selectedItem.id) {

                        playPauseBtn =

                            <div

                                className={`play-pause play-button`}
                                onClick={
                                    () => {

                                        // this.displayPause1(idx)
                                        this.play()
                                    }}
                            >

                                <i className="fas fa-play"></i>
                            </div>
                    } else if (result.id === this.state.selectedItem.id) {
                        show = 'show'
                        playPauseBtn = <div
                            className={`play-pause pause-button ${show}`}
                            onClick={() => {
                                // this.displayPlay1(idx)
                                this.pause()

                            }}>


                            <i className="fas fa-pause"></i>
                        </div>
                    }








                    return <div key={result.id} 
                                onClick={()=>this.selectSong(idx)}
                                className="result-display">
                        {/* <Link to={`artists/${this.props.currentUserId}/music/${result.id}`}> */}
                        <span 
                        // onClick={() => this.props.history.push(`/users/${this.props.currentUserId}/music/${result.id}`)}
                        >
                            <img className="discover-result-image" src={`${result.cover}`} alt="song cover art" />
                            <div className='audio-control'>
                                <audio
                                    // controls
                                    id={`${this.state.selectedItem.id}`}
                                    src={`${this.state.selectedSong}`}
                                    onEnded={() => this.reset1(idx)}
                                >
                                </audio>

                                {playPauseBtn}


                            </div>
                            <h5 className="home-text top discover-result-title">{result.title}</h5>
                        </span>
                        <span onClick={() => this.props.history.push(`/users/${this.props.currentUserId}`)}>
                            <h5 className="home-text discover-result-artist">by {result.artist}</h5>
                        </span>
                        <span><h5 className='discover-result-genre'>{result.genre}</h5></span>
                        {/* <span className='result-about'>
                                <h5>{result.about}</h5>
                            </span> */}
                        {/* <h5 
                                                className="home-text add">Add to Playlist
                                            </h5> */}
                        {/* <h5 className="home-text"><a href={`${result.song}`} download>Download</a></h5> */}
                        {/* <h5 onClick={()=>this.toggleAudioPlayer()} className="home-text">Listen</h5> */}
                        {/* <audio key={result.id} id="results-single-player" controls>
                                <source src={result.song} type="audio/mpeg" />
                                                Your browser does not support the audio tag.
                                            </audio> */}
                        {/* </Link> */}
                    </div>
                }
            })
        // } else {

        // }

        let resultPages;



        let signInOrAddSong = ''

        // console.log(this.props)

        // setTimeout(() => {
            
        // }, 1000);



        if (this.state.loading === true) {
            signInOrAddSong = <div>
                                <i className="fas fa-asterisk fa-spin"></i>
                            </div>
        } else if (this.props.currentUser && this.state.items.length < 1 && this.state.loading === false){
            // setTimeout(() => {
                signInOrAddSong = <div><p>no results, <span 
                                                            style={{ color: '#5CB8D4'}}
                                                            className="link"
                                                            onClick={() => this.props.history.push(`/${this.props.currentUser}/new`)}>add one</span>..</p></div>
                
            // }, 10);
        } else if (!this.props.currentUser && this.state.items.length < 1 && this.state.loading === false){
            // setTimeout(() => {
                signInOrAddSong = <div>
                                    <p>
                                        no results, sign up as an 
                                        <span 
                                            className="link"
                                            style={{ color: "#9CB67C"}}
                                            onClick={() => {
                                                this.props.history.push('/artist')
                                                this.props.openModal('signup')
                                            }}> artist</span> or 
                                        <span 
                                            className="link"
                                            style={{ color: '#8B6BB2'}}
                                            onClick={() => {
                                                this.props.history.push('/label')
                                                this.props.openModal('signup')
                                            }}> label</span> to add one..</p>
                                </div>
            // }, 10);
        } else {
            signInOrAddSong = ''
        }


        // if (results.length < 1){
        //     results = <div>No results, <span onClick={()=>this.props.history.push(`/${this.props.currentUser.id}/new`)}></span>add one..</div>
        // }


        // console.log(this.state.items)
        let itemCover;
        let itemSong;
        let audio = '';

        let currentButton;

        if (this.state.playShow) {
            currentButton = <div className='play-button discover-pause-play' onClick={() => this.play()}><i className="fas fa-play"></i></div>
        } else {
            currentButton = <div className='pause-button discover-pause-play' onClick={() => this.pause()}><i className="fas fa-pause"></i></div>
        }

        if (this.state.currentTime === this.state.duration) {
            currentButton = <div className='play-button' onClick={() => this.play()}><i className="fas fa-play"></i></div>
        }

        let remainder;
        let minute;
        let second;
        let timeDuration
        let durationRender;



        if (this.state.duration != 'time') {
            timeDuration = Math.round(this.state.duration)
            if (timeDuration > 59) {
                minute = Math.floor(timeDuration / 60)
                remainder = minute * 60
                second = timeDuration - remainder
                if (second < 10) {
                    second = `0${second}`
                }

                durationRender = <span>{minute}:{second}</span>
            } else if (timeDuration < 10) {
                durationRender = <span>00:0{timeDuration}</span>
            } else {
                durationRender = <span>00:{timeDuration}</span>
                // this.stopSpinner();
            }
        }
            

        // if (document.getElementById('item-player').duration() != null){

            
        //     timeDuration = Math.round(document.getElementById('item-player').duration())
        //     if (timeDuration > 59) {
        //         minute = Math.floor(timeDuration / 60)
        //         remainder = minute * 60
        //         second = timeDuration - remainder
        //         if (second < 10) {
        //             second = `0${second}`
        //         }

        //         durationRender = <span>{minute}:{second}</span>
        //     } else if (timeDuration < 10) {
        //         durationRender = <span>00:0{timeDuration}</span>
        //     } else {
        //         durationRender = <span>00:{timeDuration}</span>
        //         // this.stopSpinner();
        //     }
        // }

        // if (this.state.duration != 'time'){
        //     durationRender = <p>{document.getElementById('item-player').duration()}</p>

        // }

        


        if (this.state.items.length > 0){
            // featured = this.state.items[0]
            itemCover = this.state.items[0].cover
            itemSong = this.state.items[0].song
            // console.log('items',this.state.items[0].cover);

            if (this.state.viewPlayer) {
                // console.log('song', this.state.selectedSong)
                audio = <div className="discover-player">
                            <audio
                                id="item-player"
                                controls="controls"
                                onTimeUpdate={() => this.timeUpdate()}
                            >
                                <source src={this.state.selectedSong} type="audio/mpeg" />
                                                Your browser does not support the audio tag.
                                        </audio>
                            <div className="controls">
                                <div className="play-pause">
                                    {currentButton}
                                </div>
                                <div
                                    style={{ position: 'relative' }}
                                    className='right-side'>
                                        <div className="player-top-container">
                                            <div className='player-top'>
                                                <p>{this.state.selectedItem.title}</p>
                                                <div className="time"><span id='elapsed-time'>00:00</span> / {durationRender}</div>
                                            
                                            </div>
                                            <input
                                                id='seeker'
                                                className='seeker'
                                                type="range"
                                                value={this.state.currentTime}
                                                max={`${this.state.duration}`}
                                                readOnly
                                                min="0"
                                            />
                                        </div>

                                    <div className="time-location"></div>

                                    {/* <div
                                                    style={{ transform: `scaleX(${this.state.currentTime})` }}
                                                    id="progress-bar"
                                                >
                                                    Progress Bar
                                                </div> */}
                                    {/* <progress
                                                    value={this.state.currentTime}
                                                    max={timeDuration}
                                                    id="main-song-progress"
                                                >
                                                </progress> */}

                                    
                                    
                                    
                                    {/* <div 
                                                    style={{backgroundColor: 'blue', height: '10px', width: '10px', position: 'absolute', left: `10`}}
                                                    className='progress-square'>

                                                </div> */}

                                    {/* Progress Bar */}
                                </div>
                                {/* <div onClick={()=>this.volumeUp()}>Volume Up</div>
                                            <div onClick={()=>this.volumeDown()}>Volume Down</div> */}
                            </div>
                            
                            
                        </div>
                        
                if (!this.state.timeRendered) {
                    setTimeout(() => {
                        // this.stopSpinner();
                        this.getDuration();
                        // console.log(this.state.currentTime)

                    }, 1000);

                }
                
            } else {
                audio = ""
            }
        }

        let pages = []
        let ellipsis;
        let lastPage;
        let otherPageDisabler = false;
        let previousDisabler = false;
        let nextDisabler = false;
        let lastPageDisabler = false;
        let currentPage = ''

        //! 8 here
        for (let i = 0; i < this.state.pageCount; i++){
            if (this.state.page === i + 1){
                otherPageDisabler = true;
                currentPage = 'current-page'
            } else {
                otherPageDisabler = false;
                currentPage = ''
            }

            if (i < 7 && i >= 0){
                pages.push(<button key={i} className={`${currentPage}`} onClick={()=>this.selectPage(i+1)} disabled={otherPageDisabler}>{i+1}</button>)
            }
        }

        if (this.state.page === this.state.pageCount){
            nextDisabler = true;
        } else {
            nextDisabler = false;
        }

        if (pages.length > 6){
            ellipsis = <p>   ...   </p>;

            if (this.state.page === this.state.pageCount){
                lastPageDisabler = true;
                nextDisabler = true;
                currentPage = 'current-page';
                ellipsis = ''
                lastPage = ''
            } else {
                lastPageDisabler = false;
                nextDisabler = false;
                lastPage = <button className={`${currentPage}`} disabled={lastPageDisabler} onClick={() => this.selectPage(pages.length)}>{this.state.pageCount}</button>;
            }

        }

        if (this.state.page === 1){
            previousDisabler = true;
        } else {
            previousDisabler = false;
        }


        // console.log(pages)

        let pageButtons;
        
        if (this.state.items.length < 9){
            pageButtons = '';
        } else {
            pageButtons = <div className="page-buttons">
                            <button className="previous" disabled={previousDisabler} onClick={() => this.previous()}>previous</button>
                            {pages}
                            {ellipsis}
                            {lastPage}
                            <button className="next"disabled={nextDisabler} onClick={() => this.next()}>next</button>
                        </div>
        }

        let viewSelected;
        if (!this.state.viewSelected){
            viewSelected = ''
        } else {
            viewSelected = <div className="discover-player">
                <div className="image-player">
                    <img className="image" src={this.state.selectedSongImage} alt="" />
                    {/* <audio id="discover-result-player" controls>
                                <source src={this.state.selectedSong} type="audio/mpeg" />
                                Your browser does not support the audio tag.
                            </audio> */}
                    {audio}
                    {/* {document.getElementById('item-player').duration()} */}

                </div>
                <div className="discover-player-info">
                    <p>by <span
                        onClick={() => this.props.history.push(`/users/${this.state.selectedItem.owner_id}`)}
                        className="discover-player-artist">{this.state.selectedItem.artist}</span></p>
                    <p>{this.state.selectedItem.location}</p>
                    <button onClick={() => this.props.history.push(`/users/${this.state.selectedItem.owner_id}/music/${this.state.selectedItem.id}`)}>hear more</button>

                    {/* <p className='origin-note'>direct from artist</p> */}
                </div>
            </div>
        }

        // console.log(this.state.viewSelected)

        let barTwo;

        if (this.state.currentGenre === '' || this.state.currentGenre === 'all'){
            barTwo = <div className='bar-two genres-container all bar-two-collapsed' style={{ backgroundColor: this.state.bar2 }}>
                <ul
                    className="genres-bar-three "
                >
                    <Link to="#"><li className="selected">all {this.state.currentGenre}</li></Link>
                </ul>
            </div>
        } else {
            barTwo = <div className='bar-two genres-container all' style={{ backgroundColor: this.state.bar2 }}>
                <ul
                    className="genres-bar-three "
                >
                    <Link to="#"><li className="selected">all {this.state.currentGenre}</li></Link>
                </ul>
            </div>
        }


        return (
            <div className='discover-container'>
                <div className='discover'>
                    <div className='discover-title'>Discover</div>
                    <div className='genres-container' style={{ backgroundColor: this.state.bar1 }}>
                        <ul 
                            className="genres"
                            style={{backgroundColor:this.state.bar1}}
                            >
                            <Link to="#"><li className={this.state.all} onClick={() => this.switchTab('all')}>all</li></Link>
                            <Link to="#"><li className={this.state.electronic} onClick={() => this.switchTab('electronic')}>electronic</li></Link>
                            <Link to="#"><li className={this.state.rock} onClick={() => this.switchTab('rock')}>rock</li></Link>
                            <Link to="#"><li className={this.state.metal} onClick={() => this.switchTab('metal')}>metal</li></Link>
                            <Link to="#"><li className={this.state.alternative} onClick={() => this.switchTab('alternative')}>alternative</li></Link>
                            <Link to="#"><li className={this.state.hip_hop} onClick={() => this.switchTab('hip_hop')}>hip-hop/rap</li></Link>
                            <Link to="#"><li className={this.state.experimental} onClick={() => this.switchTab('experimental')}>experimental</li></Link>
                            <Link to="#"><li className={this.state.punk} onClick={() => this.switchTab('punk')}>punk</li></Link>
                            <Link to="#"><li className={this.state.folk} onClick={() => this.switchTab('folk')}>folk</li></Link>
                            <Link to="#"><li className={this.state.pop} onClick={() => this.switchTab('pop')}>pop</li></Link>
                            <Link to="#"><li className={this.state.ambient} onClick={() => this.switchTab('ambient')}>ambient</li></Link>
                            <Link to="#"><li className={this.state.soundtrack} onClick={() => this.switchTab('soundtrack')}>soundtrack</li></Link>
                            <Link to="#"><li className={this.state.world} onClick={() => this.switchTab('world')}>world</li></Link>
                            <Link to="#"><li className={this.state.jazz} onClick={() => this.switchTab('jazz')}>jazz</li></Link>
                        </ul>
                    </div>
                    {barTwo}
                    <div className='bar-three genres-container all' style={{ backgroundColor: this.state.bar3 }}>
                        <ul
                            className="genres-bar-three "
                        >
                            <Link to="#"><li className="selected">new arrivals</li></Link>
                        </ul>
                    </div>
                    <div className='bar-four genres-container all' style={{ backgroundColor: this.state.bar4 }}>
                        <ul
                            className="genres-bar-three "
                        >
                            <Link to="#"><li className="selected">any format</li></Link>

                        </ul>
                    </div>
                </div>
                <div className="discover-results-container">
                    <div className={`result-parent discover-results`}>
                        {results}
                        {signInOrAddSong}
                        {pageButtons}
                    </div>
                    {viewSelected}
                    
                </div>
            </div>
        )
    }
}


export default withRouter(Discover);