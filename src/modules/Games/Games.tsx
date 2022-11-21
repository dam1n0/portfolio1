import React, {useEffect, useState} from "react";
import cssm from "./Games.module.css"
import {checkAnswer, setPhoto, setNumberOfCells, setChapter, checkAnswerSideEffect} from "../../redux/Games-reducer";
import {useAppDispatch, useAppSelector} from "../../hooks";

const Games: React.FC = () => {
    const gameState = useAppSelector((state)=> state.Games);
    const dispatch = useAppDispatch();

       useEffect(() => {
           dispatch(setPhoto([gameState.numberOfCells, gameState.chapter]))
       }, [gameState.numberOfCells, gameState.chapter]);

    const [disableClick, setDisableClick] = useState(false);

    const clickHandler = (key: number) => {
        if(!disableClick) {
            dispatch(checkAnswer(key));
            setDisableClick(true);
            setTimeout(() => {
                dispatch(checkAnswerSideEffect(key));
                setDisableClick(false);
            }, 270)
        }
    }

    return (
        <div className={cssm.main}>
            <h3 className={cssm.h3}>Find The Pair</h3>
            <div className={cssm.selectContainer}>
                <div className={cssm.selectItem}>
                    <h4>Side</h4>
                    <select className={cssm.select} onChange={e => dispatch(setNumberOfCells(+e.target.value))}>
                        <option value="12">Small</option>
                        <option value="16">Middle</option>
                        <option value="24">Large</option>
                    </select>
                </div>

                <div className={cssm.selectItem}>
                    <h4>Level</h4>
                    <select className={cssm.select} onChange={e => dispatch(setChapter(e.target.value))}>
                        <option value="birds">Children</option>
                        <option value="lady">Lady</option>
                        <option value="gachi">Real Man</option>
                        <option value="extrasensories">Extrasensories</option>

                    </select>
                </div>
                <div className={cssm.selectItem}><h4>Moves: {gameState.numberOfMoves}</h4></div>
            </div>

            <div className={`${cssm.gameContainer} ${(gameState.numberOfCells === 24) ? cssm.large : ''}`}>
                <div
                    className={(gameState.numberOfCellsGuessed === gameState.numberOfCells / 2) ? cssm.win : cssm.hide}>
                    <h3 className={cssm.h3}>Congratulations</h3><h3 className={cssm.h3}>Try the next level</h3>
                </div>
                {gameState?.items.map((item) => (
                    <div key={item.key} className={cssm.imgItem + ' ' + (item.isGuessed ? cssm.guessed : '')}><img
                        className={(item.isOpen ? cssm.open : cssm.close)} src={item.src}
                        onClick={()=> clickHandler(item.key)} alt="photo"/></div>))}
            </div>
            <div>
                <button className={cssm.playAgan} onClick={(e) => {
                    dispatch(setPhoto([gameState.numberOfCells, gameState.chapter]))
                }}>New game
                </button>
            </div>


        </div>
    )
}
export default Games
