
const Task = ({task,onDelete,onToggle}) => {
  return (
    <div onDoubleClick={()=>onToggle(task.id)} className={`task ${task.reminder ? 'reminder':''}`}>
        <h3>
          {task.text}
          <b style={{ marginLeft:10,cursor:'pointer',color:"red" }} onClick={()=>onDelete(task.id)}>x</b>
         </h3>
        <p>{task.day}</p>
    </div>

  )
}

export default Task