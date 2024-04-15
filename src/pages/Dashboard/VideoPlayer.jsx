
import React, { useRef, useState, useEffect } from 'react';
import { ReactComponent as PlayIcon } from '../../files/icons/Play.svg'
import { ReactComponent as PauseIcon } from '../../files/icons/Pause.svg'
import { ReactComponent as SettingIcon } from '../../files/icons/SettingIcon.svg'
import { ReactComponent as VolumeIcon } from '../../files/icons/VolumeIcon.svg'
import { ReactComponent as MuteVolumeIcon } from '../../files/icons/MuteVolumeIcon.svg'
import { ReactComponent as MiniPlayerIcon } from '../../files/icons/MiniPlayerIcon.svg'
import { ReactComponent as FullScreenIcon } from '../../files/icons/FullScreenIcon.svg'
import { ReactComponent as ShareIcon } from '../../files/icons/ShareIcon.svg'
import { ReactComponent as WatchLaterIcon } from '../../files/icons/WatchLaterIcon.svg'
import { ReactComponent as HeartIcon } from '../../files/icons/HeartIcon.svg'
import { ReactComponent as PreviousIcon } from '../../files/icons/PreviousIcon.svg'


const VideoPlayer = ({ productVideo, dhiyodhaLogo, title }) => {
    const videoRef = useRef(null);
    const timelineContainerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [isScrubbing, setIsScrubbing] = useState(false);
    const [isMiniPlayer, setIsMiniPlayer] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedQuality, setSelectedQuality] = useState('720p'); // Default quality
    const [isQualityMenuVisible, setIsQualityMenuVisible] = useState(false);
    const [isSettingsMenuVisible, setIsSettingsMenuVisible] = useState(false);
    const [showPlaybackSpeedMenu, setShowPlaybackSpeedMenu] = useState(false);
    const [showPlayback, setShowPlayback] = useState(true);
    const [showQuality, setShowQuality] = useState(true);

    const handleQualityChange = (quality) => {
        setSelectedQuality(quality);
        // setIsQualityMenuVisible(false);
        // Here, you can update the video source URL with the selected quality video URL
        // For example, you can have different URLs for each quality and switch them here.
        // Make sure to replace 'production' with the corresponding video URLs.
    };

    const toggleSettingsMenu = () => {
        setIsSettingsMenuVisible(prev => !prev);
        setShowPlayback(true)
    };

    useEffect(() => {
        const video = videoRef.current;
        const timelineContainer = timelineContainerRef.current;

        let scrubTimeout = null; // Add a timeout variable to handle single click behavior

        const handleVideoClick = () => {
            togglePlay();
        };

        const handleTimelineMouseDown = () => {
            setIsScrubbing(true);
        };

        const handleTimelineMouseUp = () => {
            setIsScrubbing(false);
        };

        const handleTimelineMouseMove = (e) => {
            if (isScrubbing) {
                const rect = timelineContainer.getBoundingClientRect();
                const percent = Math.min(Math.max(0, e.clientX - rect.left), rect.width) / rect.width;
                video.currentTime = percent * video.duration;
            }
        };

        const handleTimelineClick = (e) => {
            // Single click behavior
            const rect = timelineContainer.getBoundingClientRect();
            const percent = Math.min(Math.max(0, e.clientX - rect.left), rect.width) / rect.width;
            video.currentTime = percent * video.duration;

            // Prevent video pausing on single click
            setIsPlaying(true);

            // Clear any existing scrubTimeout and set a new one to reset the pause behavior
            if (scrubTimeout) {
                clearTimeout(scrubTimeout);
            }
            scrubTimeout = setTimeout(() => {
                setIsPlaying(false);
            }, 500); // Change this delay value (in milliseconds) to control how long the video should play after a single click.
        };

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
            const percent = video.currentTime / video.duration;
            timelineContainer.style.setProperty('--progress-position', percent);
        };

        const handleLoadedData = () => {
            setTotalTime(formatDuration(video.duration));
        };

        video.addEventListener('click', handleVideoClick);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('loadeddata', handleLoadedData);

        timelineContainer.addEventListener('mousedown', handleTimelineMouseDown);
        timelineContainer.addEventListener('click', handleTimelineClick); // Add event listener for single click
        window.addEventListener('mouseup', handleTimelineMouseUp);
        window.addEventListener('mousemove', handleTimelineMouseMove);

        return () => {
            video.removeEventListener('click', handleVideoClick);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadeddata', handleLoadedData);

            timelineContainer.removeEventListener('mousedown', handleTimelineMouseDown);
            timelineContainer.removeEventListener('click', handleTimelineClick);
            window.removeEventListener('mouseup', handleTimelineMouseUp);
            window.removeEventListener('mousemove', handleTimelineMouseMove);

            if (scrubTimeout) {
                clearTimeout(scrubTimeout);
            }
        };
    }, [isScrubbing]);

    const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
        minimumIntegerDigits: 2,
    });

    const formatDuration = (time) => {
        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60) % 60;
        const hours = Math.floor(time / 3600);
        if (hours === 0) {
            return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
        } else {
            return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`;
        }
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        setIsPlaying(!video.paused);
    };

    const toggleMute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
        setVolume(video.muted ? 0 : 1);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
        videoRef.current.muted = newVolume === '0';
    };
    const handleHidePlaybackSpeedMenu = () => {
        setShowPlaybackSpeedMenu(false);
        setIsQualityMenuVisible(false)
        setShowPlayback(true)
        setShowQuality(true)
    };
    const handleShowPlaybackSpeedMenu = () => {
        setShowPlaybackSpeedMenu(true)

        setShowQuality(false)
    }
    const handleIsQualityMenuVisible = () => {
        setIsQualityMenuVisible(true)
        setShowPlayback(false)

    }
    const handleToggleSettings = () => {
        setIsSettingsMenuVisible(prev => !prev);
        setShowPlaybackSpeedMenu(false); // Hide the playback speed menu when toggling the settings menu
    };
    const handlePlaybackSpeedChange = (speed) => {
        let newPlaybackSpeed = speed
        setPlaybackSpeed(newPlaybackSpeed);
        videoRef.current.playbackRate = newPlaybackSpeed;
        // setShowPlaybackSpeedMenu(false);

    };

    const toggleMiniPlayerMode = () => {
        const video = videoRef.current;
        if (document.pictureInPictureElement === video) {
            document.exitPictureInPicture();
        } else {
            video.requestPictureInPicture().catch((error) => {
                console.error('Failed to enter Picture-in-Picture mode:', error);
            });
        }
        setIsMiniPlayer((prev) => !prev);
    };



    const toggleFullScreenMode = () => {
        const video = videoRef.current;

        if (isFullScreen) {
            document.exitFullscreen();
        } else {
            video.requestFullscreen();
        }

        setIsFullScreen((prev) => !prev);
    };

    return (
        <div className={`video-container ${isPlaying ? '' : 'paused'}`} data-volume-level="high">
            <div className="video-controls-container">

                <div className="controls">
                    {/* Add your SVG icons for play and pause here */}
                    {isPlaying ? (<button className="play-pause-btn" onClick={togglePlay}><PauseIcon className='pause' /></button>)
                        :
                        (<button className="play-play-btn" onClick={togglePlay}><PlayIcon className='play' /></button>)}


                    <div className='video-bottom-control'>
                        <div className="duration-container">
                            <div className="current-time">{formatDuration(currentTime)}</div>
                            /
                            <div className="total-time">{totalTime}</div>
                        </div>
                        <div ref={timelineContainerRef} className="timeline-container">
                            <div className="timeline">
                                <img className="preview-img" alt='' />
                                <div className="thumb-indicator" style={{ left: `calc(var(--progress-position, 0%) * 100%)` }}></div>
                            </div>
                        </div>
                        <div className="volume-container">
                            {volume ? (<button className={`mute-btn ${videoRef.current && videoRef.current.muted ? 'muted' : ''}`} onClick={toggleMute}><VolumeIcon className='MuteIcon' /> </button>)
                                :
                                (<button className={`mute-btn ${videoRef.current && videoRef.current.muted ? 'muted' : ''}`} onClick={toggleMute}><MuteVolumeIcon className='MuteIcon' /></button>)}
                            <div className='volume-slider-box'>
                                <div className='volume-slider-childbox'>
                                    <input
                                        className={`volume-slider ${videoRef.current && videoRef.current.muted ? 'muted' : ''}`}
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="any"
                                        value={volume}
                                        onChange={handleVolumeChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <button className="setting-btn" onClick={toggleSettingsMenu}>
                            <SettingIcon className='setting-icon' />
                        </button>
                        {isSettingsMenuVisible && (
                            (
                                <div className="settings-menu">
                                    {/* Video speed button */}
                                    {
                                        showPlayback && (
                                            <div className="speed-btn wide-btn" onClick={handleShowPlaybackSpeedMenu}>
                                                <span> Playback Speed</span>  <span>{playbackSpeed}x</span>
                                            </div>
                                        )
                                    }

                                    {showPlaybackSpeedMenu && (
                                        <div>
                                            <div className='back-btn-style'>
                                                <div className="back-btn" onClick={handleHidePlaybackSpeedMenu}>
                                                    <PreviousIcon className='back-btn-icon' />
                                                </div>
                                            </div>
                                            <div className="playback-speed-menu">
                                                <div style={{ display: "block" }} onClick={() => handlePlaybackSpeedChange(0.5)}>0.5x</div>
                                                <div style={{ display: "block" }} onClick={() => handlePlaybackSpeedChange(0.75)}>0.75x</div>
                                                <div style={{ display: "block" }} onClick={() => handlePlaybackSpeedChange(1)}>1x</div>
                                                <div style={{ display: "block" }} onClick={() => handlePlaybackSpeedChange(1.25)}>1.25x</div>
                                                <div style={{ display: "block" }} onClick={() => handlePlaybackSpeedChange(1.5)}>1.5x</div>
                                                <div style={{ display: "block" }} onClick={() => handlePlaybackSpeedChange(2)}>2x</div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Quality button and menu */}
                                    {
                                        showQuality && (<div className="quality-btn" onClick={handleIsQualityMenuVisible}>
                                            <span>Quality</span><span>{selectedQuality}</span>
                                        </div>)
                                    }
                                    {isQualityMenuVisible && (
                                        <div>
                                            <div className='back-btn-style'>
                                                <div className="back-btn" onClick={handleHidePlaybackSpeedMenu}>
                                                    <PreviousIcon className='back-btn-icon' />
                                                </div>
                                            </div>
                                            <div className="quality-menu">
                                                <div className="quality-option" onClick={() => handleQualityChange('1080p')}>1080p</div>
                                                <div className="quality-option" onClick={() => handleQualityChange('720p')}>720p</div>
                                                <div className="quality-option" onClick={() => handleQualityChange('480p')}>480p</div>
                                                <div className="quality-option" onClick={() => handleQualityChange('360p')}>360p</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        )}
                        <button className="mini-player-btn" onClick={toggleMiniPlayerMode}>
                            <MiniPlayerIcon className='miniplayer-icon' />
                        </button>
                        <button className="full-screen-btn" onClick={toggleFullScreenMode}>
                            <FullScreenIcon className='fullscreen-icon' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='video-rightside-controls'>
                <button className="control-button">
                    <ShareIcon className='share-icon' />
                </button>
                <button className="control-button">
                    <WatchLaterIcon className='watchlater-icon' />
                </button>
                <button className="control-button">
                    <HeartIcon className='heart-icon' />
                </button>
            </div>
            <div className='video-title-control'>
                <div className="video-logo-control">
                    <img src={dhiyodhaLogo} alt='' />
                </div>
                <div className="video-childtitle-control">
                    <p>{title}</p>
                </div>
            </div>
            <video ref={videoRef} src={productVideo}></video>
        </div>
    );
};

export default VideoPlayer;
