const fs = require('fs');
const chalk = require('chalk');
const fileName = 'notes.json';

const getNotes = () =>  'Your notes...';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) =>  note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Note saved.'));
    } else {
        console.log(chalk.red.inverse('Note with that title already exists.'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) =>  note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed.'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('Note not found.'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log('Made it in');
    if(notes.length === 0) {
        console.log(chalk.red.inverse('You have no notes currently.'));
    } else {
        console.log(chalk.blue.inverse('Your notes:'));
        notes.forEach((note) => console.log(note.title));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync(fileName, dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(fileName);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes
};