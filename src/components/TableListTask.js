import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, fetchTasks } from '../store/actions/task'

export default function TableListTasks(props) {
  const dispatch = useDispatch()

  function deleteTaskButton(id) {
    dispatch(deleteTask({ id }))
  }

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <tbody>
      {
        props.tasks.map((el, index) =>
          <tr key={el.id}>
            <td>{index + 1}</td>
            <td>{el.title}</td>
            <td>{el.category}</td>
            <td>
              <button type="button" onClick={() => deleteTaskButton(el.id)} className="btn btn-danger">Delete</button>
            </td>
          </tr>
        )
      }
    </tbody>
  )
}