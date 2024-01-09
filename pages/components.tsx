import styled from "styled-components";

export const Wrapper = styled.div`
  body {
    height: 100vh; // 100% view height
    width: 100vw; // 100% view width
    position: absolute; // so it goes behind the current content
  }
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
  justify-content: center;
  align-items:center; // centers perpendicular to the flex direction
  width: 100%; /* Full width of its parent */
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
  align-items:center; // centers perpendicular to the flex direction
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
  display: ${(props) => (props.show == "true" ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh; /* Full height of the viewport */
  width: 100vw; /* Full width of the viewport */
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove any default padding */
`;

const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  align-items:center; // centers perpendicular to the flex direction
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

