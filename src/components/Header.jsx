import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav>
      <FontAwesomeIcon icon={faPen} className='logo' />
      <h1 className='title'>DevDoodle</h1>
    </nav>
  );
};
export default Header;
