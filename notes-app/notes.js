const fs = require('fs');
const chalk = require('chalk');
const fileName = 'notes.json';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (duplicateNote) {
        console.log(chalk.red.inverse('Note with that title already exists.'));
    } else {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Note saved.'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

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
    if (notes.length === 0) {
        console.log(chalk.red.inverse('You have no notes currently.'));
    } else {
        console.log(chalk.blue.inverse('Your notes:'));
        notes.forEach((note) => console.log(note.title));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if(noteToRead) {
        console.log(chalk.blue.inverse(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red.inverse('Note not found.'));
    }

};

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
    addNote,
    removeNote,
    listNotes,
    readNote
};