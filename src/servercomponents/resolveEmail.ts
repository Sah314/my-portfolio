"use server";
import { Resend } from "resend";
import ContactFormEmail from "../../email/contact-form-email";
import {validateString} from '@/lib/utils'
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);

  export const SendEmail = async (formData: FormData) => {
    let data;
    console.log("Running on Server");
    console.log(process.env.RESEND_API_KEY);
    const senderEmail= formData.get("email")
   const sendersMessage=  formData.get("message");

if (!validateString(senderEmail,50)){
    return {
error: "Invalid email"
    }
}
if (!validateString(sendersMessage,500)){
    return {
error: "Invalid message"
    }
}

// try{ 
data=await resend.emails.send({
    from: "CONTACT FORM <onboarding@resend.dev>",
    to: "sahilkhadayatework@gmail.com",
    reply_to: senderEmail as string,
    subject: "Enquiry from contact Form",
    react: React.createElement(ContactFormEmail, {
        message: sendersMessage as string, senderEmail: senderEmail as string
    }) 
  })
//}
// catch(err:unknown){ 
//     console.log(err)
//    return {
//     error:getErrorMessage(err)
//    }
// }
return {data};
  };