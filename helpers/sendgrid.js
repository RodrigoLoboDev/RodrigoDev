import sgMail from '@sendgrid/mail';

export const sendEmail = async (subject, text) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'rolobo2812@gmail.com',
    from: 'r.o.d.r.y-18@hotmail.com',
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    // console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};