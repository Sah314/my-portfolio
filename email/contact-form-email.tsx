import React from 'react'
import { Html,Body,Head,Heading,Hr,Container,Preview,Section,Text,Tailwind } from '@react-email/components';

type ContactFormEmailProps = {
  message:string,
  senderEmail:string
};

const ContactFormEmail = ({ message, senderEmail}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio website</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md" >
              <Heading className='leading-tight'>Message Received from Contact Form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sender's Email: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default ContactFormEmail