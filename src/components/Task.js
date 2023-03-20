
const Task = ({task,onDelete}) => {
  return (
    <div>
        <h3>
          {task.text}
          <a style={{ marginLeft:10,cursor:'pointer',color:"red" }} onClick={()=>onDelete(task.id)}>x</a>
         </h3>
        <p>{task.day}</p>
    </div>

  )
}

export default Task