import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import axios from "axios";
import ErrorDialog, {Button, Form, Input, Label, Message, Textarea, Title, Wrapper} from "./components.tsx";


const promptTitle = "Send a prompt";
const openAiErrorString = "OpenAI being a bitch";

const LandingPage = () => {
    const formRef = useRef();
    const promptRef = useRef()
    const [showError, setShowError] = useState(false)

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

    const sendPrompt = (event) => {
        event.preventDefault();
        console.log("calling gpt");

        callChatGpt(promptRef.current.value).then((result) => {
            console.log(result.value);
        }).catch((error) => {
            console.log("Showing error");
            setShowError(true)

        })
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
        <Form onSubmit={sendPrompt}>
            <Label>Talk to me!</Label>
            <Input
                type="text" ref={promptRef}/>
            <Button type="submit">Send</Button>
        </Form>
        <ErrorDialog show={showError} onClose={() => setShowError(false)}
                     title={promptTitle}
                     message={openAiErrorString}/>
    </Wrapper>);
};

const callChatGpt = async (message) => {
    const url = 'http://localhost:3001/chat'; // API endpoint
    console.log("request body" + message.toString());
    const apiRequestBody = {
        prompt: message
    };
    try {
        const response = await axios.post(
            url,
            apiRequestBody
        );
        return response.data;
    } catch (error) {
        console.error('Error calling local server:', error);
        throw error;
    }
}


export default LandingPage;
