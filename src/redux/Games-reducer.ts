import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type itemsType = {
    key: number,
    src: string,
    isOpen: boolean,
    isGuessed: boolean
}

export type initialStateType = {
    numberOfCells: number,
    numberOfCellsGuessed: number,
    chapter: string,
    lastClickCell: number | null,
    numberOfMoves: number,
    items: itemsType[]
}

let initialState: initialStateType = {
    numberOfMoves: 0,
    numberOfCells: 12,
    numberOfCellsGuessed: 0,
    chapter: 'birds',
    lastClickCell: null,
    items: [{
        key: 0,
        src: "",
        isOpen: false,
        isGuessed: false
    },
    ]
}

const GamesReducer = createSlice({
    name: "games",
    initialState,
    reducers: {
        setPhoto(state, action: PayloadAction<[number, string]>) {
            state.numberOfCellsGuessed = 0;
            state.numberOfMoves = 0;
            let pictures: string[] = [];//создаем массив картинок
            let halfPictures = [];
            for (let i = 0; i < action.payload[0] / 2; i++) {
                halfPictures[i] = `https://konotop.site/${action.payload[1]}/${i}.png`;
            }
            pictures = halfPictures.concat(halfPictures);

            shuffleArray(pictures);

//перемешать массив, Алгоритм Фишера-Йейса взятый из инета, не придумывал велосипед
            function shuffleArray(array: string[]) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }

            let items = [];
            for (let i = 0; i < pictures.length; i++) {
                items.push({
                    key: i,
                    src: pictures[i],
                    isOpen: false,
                    isGuessed: false
                })
            }
            state.items = items
        },
        checkAnswer(state, action: PayloadAction<number>) {
            if (action.payload !== state.lastClickCell) {
                state.numberOfMoves++;
                state.items[action.payload].isOpen = !state.items[action.payload].isOpen;
                /*setTimeout(() => {
                    if ((state.numberOfMoves % 2) === 0 && state.lastClickCell) {
                        if (state.items[action.payload].src === state.items[state.lastClickCell].src) {
                            state.items[action.payload].isGuessed = true;
                            state.items[state.lastClickCell].isGuessed = true;
                        } else {
                            state.items[action.payload].isOpen = false;
                            state.items[state.lastClickCell].isOpen = false;
                        }
                    }
                else {state.lastClickCell = action.payload}
                },3000)*/
            }
        },
        checkAnswerSideEffect(state, action: PayloadAction<number>){
            if (action.payload !== state.lastClickCell) {
                if ((state.numberOfMoves % 2) === 0 && state.lastClickCell !== null) {
                    if (state.items[action.payload].src === state.items[state.lastClickCell].src) {
                        state.items[action.payload].isGuessed = true;
                        state.items[state.lastClickCell].isGuessed = true;
                        state.numberOfCellsGuessed++
                    } else {
                        state.items[action.payload].isOpen = false;
                        state.items[state.lastClickCell].isOpen = false;
                    }
                } else {
                    state.lastClickCell = action.payload
                }
            }
        },
        setNumberOfCells(state, action: PayloadAction<number>) {
            state.numberOfCells = action.payload;
            state.numberOfCellsGuessed = 0;
            state.numberOfMoves = 0;
        },
        setChapter(state, action: PayloadAction<string>) {
            state.chapter = action.payload
            state.numberOfCellsGuessed = 0;
            state.numberOfMoves = 0;
        }
    }
})

export const {setPhoto, checkAnswer, setNumberOfCells, setChapter, checkAnswerSideEffect} = GamesReducer.actions;
export default GamesReducer.reducer;