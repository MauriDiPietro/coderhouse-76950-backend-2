import twilio from 'twilio'

export const twilioClient = twilio(process.env.SID, process.env.TOKEN)