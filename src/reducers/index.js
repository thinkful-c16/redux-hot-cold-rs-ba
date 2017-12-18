import { RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE } from '../actions.js'

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const guessReducer = (state=initialState, action) => {
    if(action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: action.correctAnswer
        });
    }

    if (action.type === actions.MAKE_GUESS) {
        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess]
        })
    }

    
}