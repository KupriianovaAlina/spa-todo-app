import { useSelector } from "react-redux";
import Add from './Add.jsx';
import Info from './Info.jsx';

const MODALS = {
  adding: Add,
  info: Info,
};

const Modal = () => {
  const modal = useSelector((state) => state.modal);

  if (!modal.type) return null;
  const Component = MODALS[modal.type];
  return <Component />;
};

export default Modal;
