"use server";
import { Resend } from "resend";
import {validateString} from '@/lib/utils'
const resend = new Resend(process.env.RESEND_API_KEY);

  export const SendEmail = async (formData: FormData) => {

    console.log("Running on Server");
    console.log(process.env.RESEND_API_KEY);
    const sendersEmail= formData.get("email")
   const sendersMessage=  formData.get("message");

if (!validateString(sendersEmail,50)){
    return {
error: "Invalid email"
    }
}
if (!validateString(sendersMessage,500)){
    return {
error: "Invalid message"
    }
}
 try{ await resend.emails.send({
    from: "CONTACT FORM <onboarding@resend.dev>",
    to: "sahilkhadayatework@gmail.com",
    reply_to: sendersEmail as string,
    subject: "Hello World",
    text: sendersMessage as string,
  });}
catch(err){
    console.log(err);
    return {
        error: err
    }
}
  };