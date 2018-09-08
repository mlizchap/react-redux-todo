export const CREATE_TODO = 'CREATE_TODO';
export const MARK_COMPLETE = 'MARK_COMPLETE';

export const createTodo = (input) => {
    //console.log("action!", input)
    return {
        type: CREATE_TODO,
        payload: input
    }
}

export const markComplete = (name) => {
    return {
        type: MARK_COMPLETE,
        payload: name 
    }
}