import { twilioClient } from "../services/sms.service.js"

export const sendSms = async (req,res,next) => {
    try {
        const { body, dest } = req.body
    const message = {
        body,
        from: process.env.SMS,
        to: dest
    }

    await twilioClient.messages.create(message)
    res.json({status: 'success'})
} catch (error) {
    
}}