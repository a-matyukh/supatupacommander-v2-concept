// explorer

export const storage_tree = [
    {
        name: 'My opuses',
        files: [{ name: 'song.mp3' }]
    },
    {
        name: 'Sketches',
        files: [
            {
                name: 'For client',
                files: [
                    { name: 'milk.jpeg' },
                    { name: 'banner.psd' }
                ]
            },
            {
                name: 'UI design',
                files: [
                    { name: 'mobile.fig' },
                    { name: 'demo.gif' }
                ]
            },
            { name: 'logo.png' },
            { name: 'banner.jpeg' },
            { name: 'showreel.gif' }
        ]
    },
    { name: 'README.md' },
    { name: 'Life.txt' },
    { name: 'My brilliant poems.note' },
    { name: 'So cool file manager 🤩.note' },
]

export const selected_widget = {
    name: "Ideas",
    backgroundColor: "white",
    children: [
    {
        type: "file",
        name: "README.md",
        rect: [570, 70, 150, 190]
    },
    {
        type: "file",
        name: "Life.txt",
        rect: [30, 20, 120, 100],
        backgroundColor: "#b1a4db"
    },
    {
        type: "folder",
        name: "Sketches",
        rect: [250, 250, 150, 200]
    },
    {
        type: "folder",
        name: "My opuses",
        rect: [350, 110, 150, 200],
        backgroundColor: "#cedba4"
    },
    { type: "note", text: 'My brilliant poems', rect: [190, 50, 190, 100] },
    { type: "note", text: 'So cool file manager 🤩', rect: [50, 200, 150, 100], backgroundColor: "#a4cedb" }
    ]
}

// Sample widgets
export const sample_filewidget_1 = {
    name: "README.md",
    rect: [50, 50, 150, 200]
}
export const sample_filewidget_2 = {
    name: "Life.txt",
    rect: [50, 50, 150, 200],
    backgroundColor: "#cedba4"
}
export const sample_folderwidget_1 = {
    name: "My folder",
    rect: [50, 50, 150, 200]
}
export const sample_folderwidget_2 = {
    name: "Sketches",
    rect: [50, 50, 150, 200],
    backgroundColor: "#cedba4"
}
export const sample_notewidget_1 = { 
    text: 'My note', 
    rect: [50, 50, 150, 200] 
}
export const sample_notewidget_2 = { 
    text: 'My note', 
    rect: [10, 30, 150, 200], 
    backgroundColor: "#cedba4"
}

// NoteEditor
export const selected_widget_note = { text: 'My note 1' }
export const selected_widget_note_with_bg = { text: 'My note 2', backgroundColor: "#cedba4" }