import React, {useState} from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
import './PlayComputer.css'


const game = new Chess();

export default function PlayComputer() {
    const [message, setMessage] = useState('');
    const [fen, setFen] = useState(game.fen())
    function makeMove(move) 
    {
        const result = game.move(move)
        if (result)
        {
            setFen(game.fen());
            if (game.isCheckmate()) {
                setMessage('Checkmate! You win!');
            }
            if (game.isDraw()) {
                setMessage('Draw!');
            }
            if (game.isCheck()) {
                setMessage('Check!');
            } else {
                setMessage('');
            }
            setTimeout(() =>  MakeAIMove(),200);
        }
        else {
            setMessage('Invalid Move!');
        }
    }
    function MakeAIMove() {
        const moves = game.moves();
        const move = moves[Math.floor(Math.random() * moves.length)];
        game.move(move);
        setFen(game.fen());
        if (game.isCheckmate()) {
            setMessage('Checkmate! You lose!');
        }
        if (game.isDraw()) {
            setMessage('Draw!');
        }
        if (game.isCheck()) {
            setMessage('Check!');
        } else {
            setMessage('');
        }
        

    }
    return (
    <div className='content-container'>
        <div className='play-computer-text-container'>
                <h1 className='play-computer-text'>Play vs Computer</h1>
                <p className='play-computer-p'>Play against a computer opponent. Choose your level and play!</p>
                <p className='play-computer-message'>{message}</p>
            </div>
        <div className='chess-content-wrapper'>
            
            <Chessboard className='chessboard'
                position={fen}
                onPieceDrop={(sourceSquare, targetSquare) => makeMove({ from: sourceSquare, to: targetSquare })}
                boardWidth={600} />
        </div>
    </div>
    )        
}