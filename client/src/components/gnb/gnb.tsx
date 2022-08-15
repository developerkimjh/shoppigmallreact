import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";

const Gnb = () => {
  return (
    <div>
      <nav className="gnb">
        <div className="gnbleft">
          <a href="/">
            <img className="logo" src={logo} />
          </a>
        </div>
        <ul className="gnbcenter">
          <li>
            <Link to="/" className="menu">
              홈
            </Link>
          </li>
          <li>
            <Link to="/products" className="menu">
              상품목록
            </Link>
          </li>
          <li>
            <Link to="/cart" className="menu">
              장바구니
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Gnb;
function getNextId(userId: any) {
  throw new Error("Function not implemented.");
}

function fetchProfileData(nextUserId: void): any {
  throw new Error("Function not implemented.");
}

function setResource(arg0: any) {
  throw new Error("Function not implemented.");
}
