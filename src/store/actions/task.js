export function getTasks(payload) {
  return (dispatch) => {
    dispatch({ type: 'getTask', payload })
  }
}

export function fetchTasks() {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:4000/tasks')
      const data = await res.json()
      dispatch(getTasks(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export function addTask(payload) {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:4000/tasks', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
}

export function deleteTask(payload) {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:4000/tasks/${payload.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
}

export function sortTasks(payload) {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:4000/tasks?category=${payload.category}`)
      const data = await res.json()
      console.log(data, 'ini sort')
      dispatch(getTasks(data))
    } catch (err) {
      console.log(err)
    }
  }
}