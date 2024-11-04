import { sendEmail } from "@/helpers/sendgrid";

export default async (req, res) => {
    const { nombre, email, mensaje } = req.body

    const suject = `${nombre} te ha enviado un mensaje`;
    const text = `Correo: <${email}> \nMensaje: ${mensaje}`
  
    try {
      await sendEmail(suject, text);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
