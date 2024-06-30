

export const getNotes = (req, res) => {
    console.log("Notes successfully retrieved")
    res.json("Notes successfully retrieved")
}

export const getNote = (req, res) => {
    console.log(`Note with ID ${req.params.id} has been retrieved successfully`)
    res.json(`Note with ID ${req.params.id} has been retrieved successfully`)
}

export const updateNote = (req, res) => {
    console.log(`Note with ID ${req.params.id} has been updated`)
    res.json(`Note with ID ${req.params.id} has been updated`)
}

export const deleteNote = (req, res) => {
    console.log(`Note with ID ${req.params.id} has been deleted`)
    res.json(`Note with ID ${req.params.id} has been deleted`)
}