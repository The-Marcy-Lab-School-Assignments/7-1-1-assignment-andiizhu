import { Link } from "react-router-dom";
// TODO: 
// - Make the button navigate the user back to the home page

const GoHomeButton = () => {
  return (
    <Link to="/" className="ui button fluid">Go Home </Link>
  )
}

export default GoHomeButton;