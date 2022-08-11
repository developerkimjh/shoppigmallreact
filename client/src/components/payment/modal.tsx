import { createPortal } from "react-dom";

const ModalPortal = ({ children }: any) => {
  return createPortal(children, document.getElementById("modal")!);
};

const PaymentModal = ({
  show,
  proceed,
  cancel,
}: {
  show: boolean;
  proceed: () => void;
  cancel: () => void;
}) => {
  return show ? (
    <ModalPortal>
      <div className={`modal ${show ? "show" : ""}`}>
        <div className="modal__inner">
          <label className="modal_label">정말 결제하시겠습니까?</label>
          <div className="modal_button">
            <button className="yes_button" onClick={proceed}>
              예
            </button>
            <button className="no_button" onClick={cancel}>
              아니요
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  ) : null;
};
export default PaymentModal;
