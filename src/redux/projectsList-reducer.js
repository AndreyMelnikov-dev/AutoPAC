const ADD_PROJECT = 'ADD_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';

let initialState = {
    projects: [
        { id: 1, name: 'Проект 1', date: '21.11.2001' },
        { id: 2, name: 'Проект 2', date: '22.12.2002' },
        { id: 3, name: 'Проект 3', date: '23.13.2003' },
    ],
}

const projectsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            state.projects = state.projects.filter(item => item.id !== 0);
            if (action.projectName !== undefined)
                return {
                    ...state,
                    projects: [...state.projects, { id: 4, name: action.projectName, date: action.projectDate }]
                }
        case DELETE_PROJECT:
            state.projects = state.projects.filter(item => item.id !== action.projectId);
            if (state.projects.length == 0) {
                state.projects = [{ id: 0, name: 'У вас еще нет проектов', date: '' }];
            }
            return {
                ...state,
                projects: state.projects
            }

        default:
            return state;
    }
}

export const addProjectAC = (projectName, projectDate) => {
    return {
        type: ADD_PROJECT,
        projectName,
        projectDate
    }
}

export const deleteProjectAC = (projectId) => {
    return {
        type: DELETE_PROJECT,
        projectId
    }
}

export default projectsListReducer