import { transporter } from "../services/email.service.js";
import { template } from "../utils/template-email.js";
import hbs from "nodemailer-express-handlebars";

export const sendGmail = async (req, res, next) => {
  try {
    const { dest, name } = req.body;
    const emailConfig = {
      from: process.env.EMAIL,
      to: dest,
      subject: "Bienvenido/a",
      // html: `<h1>Hola ${name}</h1>`,
      html: template(name),
      attachments: [
        {
          path: `${process.cwd()}/src/attachments/example.txt`,
          filename: `resumen-cuenta-${name.toLowerCase()}.txt`,
        },
      ],
    };
    await transporter.sendMail(emailConfig);
    res.json({ status: "success" });
  } catch (error) {
    next(error);
  }
};

const hbsConfig = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: `${process.cwd()}/src/views/partials`,
    defaultLayout: false,
  },
  viewPath: `${process.cwd()}/src/views`,
  extName: ".handlebars",
};

export const sendGmailHbs = async (req, res, next) => {
  try {
    const { dest, name } = req.body;
    transporter.use("compile", hbs(hbsConfig));
    const emailConfig = {
      from: process.env.EMAIL,
      to: dest,
      subject: "Bienvenido/a",
      // html: `<h1>Hola ${name}</h1>`,
      template: "email",
      context: {
        title: "Bienvenido/a a Coderhouse",
        name,
      },
      attachments: [
        {
          path: `${process.cwd()}/src/attachments/example.txt`,
          filename: `resumen-cuenta-${name.toLowerCase()}.txt`,
        },
      ],
    };
    await transporter.sendMail(emailConfig);
    res.json({ status: "success" });
  } catch (error) {
    next(error);
  }
};
