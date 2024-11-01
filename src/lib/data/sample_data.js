//////////////////////////////////////// Explorer
export const storage_name = "Working"
export const storage_tree = [
    {
        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
        type: "folder",
        name: 'My opuses',
        children: [
            {
                id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                type: "file",
                name: 'song.mp3'
            }
        ]
    },
    {
        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
        type: "folder",
        name: 'Sketches',
        children: [
            {
                id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                type: "folder",
                name: 'For client',
                children: [
                    { 
                        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                        type: "file",
                        name: 'milk.jpeg'
                    },
                    {
                        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                        type: "file",
                        name: 'banner.psd'
                    }
                ]
            },
            {
                id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                type: "folder",
                name: 'UI design',
                children: [
                    {
                        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                        type: "file",
                        name: 'mobile.fig'
                    },
                    {
                        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                        type: "file",
                        name: 'demo.gif'
                    }
                ]
            },
            {
                id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                type: "file",
                name: 'logo.png'
            },
            {
                id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                type: "file",
                name: 'banner.jpeg'
            },
            {
                id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
                type: "file",
                name: 'showreel.gif'
            }
        ]
    },
    {
        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
        type: "file",
        name: 'README.md'
    },
    {
        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
        type: "file",
        name: 'Life.txt'
    },
    {
        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
        type: "note",
        name: 'My brilliant poems.note'
    },
    {
        id: 'fd0eb23d-d9f5-465a-ad32-aacc7d74ba52',
        type: "note",
        name: 'So cool file manager 🤩.note'
    },
]
export const breadcrumbs = ["Working", "Sketches"]


// show_widget (tree: selected_widget)
export const selected_widget = {
    id: "123",
    type: "folder",
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
        { 
            type: "note", 
            text: 'My brilliant poems', 
            rect: [190, 50, 190, 100] 
        },
        { 
            type: "note", 
            text: 'So cool file manager 🤩', 
            rect: [50, 200, 150, 100], 
            backgroundColor: "#a4cedb" 
        }
    ]
}

// selection: WidgetId = [] (сначала WidgetId, потом WidgetId[]) // selected_widget (in editor)



//////////////////////////////////////// Sample widgets
export const sample_filewidget_1 = {
    type: "file",
    name: "README.md",
    rect: [50, 50, 150, 200]
}
export const sample_filewidget_2 = {
    type: "file",
    name: "Life.txt",
    rect: [50, 50, 150, 200],
    backgroundColor: "#cedba4"
}
export const sample_folderwidget_1 = {
    type: "folder",
    name: "My folder",
    rect: [50, 50, 150, 200]
}
export const sample_folderwidget_2 = {
    type: "folder",
    name: "Sketches",
    rect: [50, 50, 150, 200],
    backgroundColor: "#cedba4"
}
export const sample_notewidget_1 = {
    type: "note",
    text: 'My note 1', 
    rect: [50, 50, 150, 200] 
}
export const sample_notewidget_2 = {
    type: "note",
    text: 'My note 2', 
    rect: [10, 30, 150, 200], 
    backgroundColor: "#cedba4"
}


//////////////////////////////////////// Workspaces
export const workspaces = [
    {
        name: "Working",
        explorers: [
            {
                rect: [],
                explorer: {
                    storage_name,
                    storage_tree,
                    breadcrumbs,
                    selected_widget
                }
            }
        ]
    }
]