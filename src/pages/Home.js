import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchTasks, sortTasks } from '../store/actions/task'
import TableListTasks from '../components/TableListTask'

export default function Home() {
  const tasks = useSelector(state => state.task.tasks)
  const dispatch = useDispatch()
  const [category, setCategory] = useState('Backend')

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  function categoryInput(e) {
    setCategory(e.target.value)
  }

  function sortTaskButton() {
    dispatch(sortTasks({ category }))
  }

  return (
    <div className="container">
      <h1 className="text-center">Home</h1>
      <div className="form-group text-center">
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
        <button type="button" className="btn btn-primary" onClick={sortTaskButton}>Sort</button>
      </div>
      <div>
        <h2>Table</h2>
        <table className="table table-hover table-black">
          <thead>
            <tr>
              <th>No</th>
              <th>Task</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <TableListTasks tasks={tasks} />
        </table>
      </div>
    </div>
  )
}