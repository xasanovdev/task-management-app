// Todo:
// - Get data from kanban
// - Set data to kanban

export const setDataToLocalStorage= (kanban) => {
    localStorage.setItem('kanban', JSON.stringify(kanban))
}

export const getDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('kanban'))
}