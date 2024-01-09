import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import axios from "axios";
import ErrorDialog, {Button, Form, Input, Label, Message, Textarea, Title, Wrapper} from "./components.tsx";

const failedGptCall = "Prompt failed to send";
const successGptCall = "Success!";

const Home = () => {
    const formRef = useRef();
    const promptRef = useRef()
    const [showError, setShowError] = useState("false")
    const [dialogText, setDialogText] = useState("")
    const [titleGptCall, setTitleGptCall] = useState("")


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
        console.log(promptRef.current.value);

        callChatGptServer(promptRef.current.value).then((result) => {
            console.log("SUCCESSFULLY CALLED");
            console.log(result.choices[0].message.content);
            setDialogText(result.choices[0].message.content);
            setTitleGptCall(successGptCall);
        }).catch((error) => {
            setDialogText(error.response === undefined ? error.message : error.response.data);
            setTitleGptCall(failedGptCall);
        }).finally(() => {
            setShowError("true")
        })
    };

    return (<Wrapper className="container">
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
        <ErrorDialog show={showError} onClose={() => setShowError("false")}
                     title={titleGptCall}
                     message={dialogText}/>
        <Link href="/about">
            Go to the about page
        </Link>
    </Wrapper>);
};

const callChatGptServer = async (message) => {
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


export default Home;
