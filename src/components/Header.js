import Button from "./Button"
const Header = ({title,onToggleAdd,addFlag}) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        {
          addFlag ?  <Button color='red' text='close' onClick={onToggleAdd}></Button>: <Button color='green' text='add' onClick={onToggleAdd}></Button>
        }
       
    </header>
  )
}

export default Header