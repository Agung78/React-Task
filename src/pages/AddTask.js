import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { addTask } from '../store/actions/task'

export default function AddTask() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Backend')
  const dispatch = useDispatch()
  const history = useHistory()

  function titleInput(e) {
    setTitle(e.target.value)
  }
  function categoryInput(e) {
    setCategory(e.target.value)
  }

  function addTaskButton() {
    console.log(title, category, 'ini addTask')
    dispatch(addTask({ title, category }))
    history.push("/");
  }

  return (
    <div className="container">
      <h1 className="text-center">Add Task</h1>
      <div className="cards col-md-4 offset-md-4">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" placeholder="Enter title" onChange={titleInput} />
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" defaultValue="Backend" onChange={categoryInput}>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={addTaskButton}>Submit</button>
      </div>
    </div>
  )
}