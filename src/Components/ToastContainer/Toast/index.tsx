import React, { useEffect } from "react";
import { ToastMessage, useToast } from "../../../Hooks/ToastContext";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle
} from "../../Input/node_modules/react-icons/fi";
import { Container } from "./styles";

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />,
  };

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || "info"]}
      <div>
        <strong>{message.title} </strong>

        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;