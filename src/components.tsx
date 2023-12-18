import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin: 0;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin: 10px 0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  background-color: #eee;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  font-size: 1.2rem;
  height: 100px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;
const DialogWrapper = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const DialogBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

const DialogTitle = styled.h2`
  color: #333;
  margin-top: 0;
`;

const DialogMessage = styled.p`
  color: #666;
  font-size: 16px;
`;

const CloseButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #ff5252;
  }
`;

const ErrorDialog = ({ show, onClose, title, message }) => (
    <DialogWrapper show={show}>
        <DialogBox>
            <DialogTitle>{title}</DialogTitle>
        <DialogMessage>{message}</DialogMessage>
        <CloseButton onClick={onClose}>Close</CloseButton>
    </DialogBox>
    </DialogWrapper>
);

export default ErrorDialog;

