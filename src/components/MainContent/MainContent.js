import React from 'react'
import './MainContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
  return (
    <div>
    <div className='main-content-container'> 
        <div className='chess-content-wrapper'>
            <img src = "https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png" alt = "chessboard" className='chessboard-image'/>
            <div className='chessboard-text-content'>
                <h1 className='play-chess-text'>
                    Play Chess Online <br/>
                    on the #1 Site!
                </h1>
                <div className='stats-container'>
                    <div className='people-stats'>
                        <h1 className='games-today-counter'>
                            17,549,113
                        </h1>
                        <p className='games-today-p'>
                            Games Today
                        </p>
                    </div>
                    <div className='playing-now-stats'>
                        <h1 className='playing-now-counter'>
                            106,327
                        </h1>
                        <p className='playing-now-p'>
                            Playing Now
                        </p>
                    </div>
                </div>
                <div className='buttons-container'>
                    <button className='play-button'>
                         <FontAwesomeIcon icon={faChessPawn} className='Icons' id='play-icon'/>
                        <div className='play-text'>
                            <h1 className='play-text-h1'>
                                Play Online
                            </h1>
                            <p className='play-text-p'>
                                Play with someone at your level
                            </p>
                        </div>
                    </button>
                    <button className='train-button' onClick={() => window.location.href='/play-computer'}>
                        <FontAwesomeIcon icon={faRobot} className='robot-img'/>
                        <div className='train-text'>
                            <h1 className='train-text-h1'>
                                Play Bots
                            </h1>
                            <p className='train-text-p'>
                                Play vs customizable training bots
                            </p>
                        </div>
                    </button>                 
                </div>

            </div>
            
        </div>
        <div className='chess-content-articles'>
        <article className='solve-chess-puzzles'>
            <div className='left-panel-solve-puzzles'>
                <h1 className='solve-chess-puzzles-h1'>
                    Solve Chess Puzzles
                </h1>
                <button className='solve-puzzles-button'>
                    Solve Puzzles
                </button>
                <div className='hikaru-quote'>
                    <img src="https://www.chess.com/bundles/web/images/faces/hikaru-nakamura.e1ca9267.jpg" alt='hikaru-nakamura' className='hikaru-nakamura-image'/>
                    <div>
                        <p className='hikaru-nakamura-main-text'>
                            "Puzzles are the best way to improve pattern recognition, and no site does it better."
                        </p>
                        <p><span className='hikaru-nakamura-GM'>GM</span> <span className='hikaru-nakamura-name'>Hikaru Nakamura</span></p>
                    </div>
                </div>
            </div>
            <div className='right-panel-solve-puzzles'>
            <img src="https://www.chess.com/bundles/web/images/web/board-puzzles.4a54c49f@2x.png" alt='chess-puzzles' className='chess-puzzles-image'/>
            </div>
        </article>
        <article className='Learn-chess'>
            <div className='left-panel-learn-chess'>
                <img src="https://www.chess.com/bundles/web/images/web/board-lessons.825946d3@2x.png" alt='learn-chess-img' className='learn-chess-image'/>

            </div>
            <div className='right-panel-learn-chess'>
                <h1 className='learn-chess-h1'>
                    Learn Chess
                </h1>
                <button className='learn-chess-button'>
                    Learn Chess
                </button>
                <div className='anna-quote'>
                    <img src='https://www.chess.com/bundles/web/images/faces/anna-rudolf.193d08a5.jpg' alt='anna-rudolf' className='anna-rudolf-image'/>
                    <div>
                        <p className='anna-rudolf-main-text'>
                        "Chess.com lessons make it easy to learn to play, then challenge you to continue growing."
                        </p>
                        <p><span className='anna-rudolf-GM'>IM</span> <span className='anna-rudolf-name'>Anna Rudolf</span></p>
                    </div>
                </div>

                        
            </div>
        </article>
    </div>
    </div>
    
        
    </div>
    )
}

export default MainContent
