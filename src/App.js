import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const LandingPage = () => {
    const formRef = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs
            .sendForm('adityaService', 'template_b92o3ed', formRef.current, 'kDv14N1AfXfoYqOKY')
            .then((result) => {
                console.log(result.text);
                // Display success message
            }, (error) => {
                console.log(error.text);
                // Display error message
            });
    };

    return (<Wrapper>
        <Title>Welcome to Reflectify!</Title>
        <Message>Leave some feedback on what you want.</Message>
        <Form ref={formRef} onSubmit={sendEmail}>
            <Label>Name</Label>
            <Input
                type="text"
                name="to_name"/>
            <Label>Email</Label>
            <Input
                type="email"
                name="from_name"/>
            <Label>Message</Label>
            <Textarea
                name="message"/>
            <Button type="submit">Send</Button>
        </Form>
    </Wrapper>);
};

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin: 0;
  text-align: center;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin: 10px 0;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  background-color: #eee;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  font-size: 1.2rem;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

export default LandingPage;
