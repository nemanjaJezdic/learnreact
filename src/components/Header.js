import Button from "./Button"
const Header = ({title}) => {

  const addTask=() =>{
    
  }

  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='green' text='add' onClick={addTask}></Button>
    </header>
  )
}

export default Header