import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import WillPay from "../../components/willPay";
import { EXECUTE_PAY } from "../../graphql/payment";
import { graphqlFetcher } from "../../queryClient";
import { checkedCartState } from "../../recoils/cart";
import PaymentModal from "./modal";

type PaymentInfos = string[];

const Payment = () => {
  const navigate = useNavigate();
  const [checkedCartData, setCheckedCartData] =
    useRecoilState(checkedCartState);
  const [ModalShow, toggleModal] = useState(false);
  const { mutate: executePay } = useMutation((ids: PaymentInfos) =>
    graphqlFetcher(EXECUTE_PAY, { ids })
  );

  const showModal = () => {
    toggleModal(true);
  };

  const proceed = () => {
    const ids = checkedCartData.map(({ id }) => id);
    executePay(ids, {
      onSuccess: () => {
        setCheckedCartData([]);
        alert("결제 완료되었습니다.");
        navigate("/products", { replace: true });
      },
    });
  };

  const cancle = () => {
    toggleModal(false);
  };

  return (
    <div className="payment-window">
      <WillPay handleSubmit={showModal} submitTitle="결제하기" />
      <PaymentModal show={ModalShow} proceed={proceed} cancel={cancle} />
    </div>
  );
};

export default Payment;
