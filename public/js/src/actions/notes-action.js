import axios from 'axios'

const getNotes = get => {
    return dispatch => {
        axios.post('/api/get-notes', { get })
            .then(notes => dispatch({ type: "GET_NOTES", payload: notes.data }) )
            .catch(err => dispatch({ type: "GET_NOTES_ERR", payload: err }) )
    }
}

const updateNote = note => {
    return {
        type: "UPDATE_NOTES",
        payload: note
    }
}

const deleteNote = note => {
    return {
        type: "DELETE_NOTE",
        payload: note
    }
}

const editNote = note_details => {
    return {
        type: "EDIT_NOTE",
        payload: note_details
    }
}

const getFeeds = () => {
    return dispatch => {
        axios.post('/api/feeds')
            .then(notes => dispatch({ type: "GET_FEEDS", payload: notes.data }) )
            .catch(err => dispatch({ type: "GET_FEEDS_ERR", payload: err }) )
    }
}

module.exports = {
    getNotes,
    updateNote,
    deleteNote,
    editNote,
    getFeeds
}