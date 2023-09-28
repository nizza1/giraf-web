
/* require('dotenv').config()
const PASSWORD = process.env.password */

import { mailOptions, transporter } from "/config/nodemailer";

/* sollte SMTP stattdessen Port 587 nutzen  */

  const handler = async(req, res) => {

    if (req.method === 'POST'){
      const data = req.body;

      if (!data.name) {
        return res.status(400).json({ message: 'Name is required' });
      }
      if (!data.email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      // Add more validation rules as needed
  
      try {
        await transporter.sendMail({
            ...mailOptions,
            subject: 'my website',
            text: data.message,
            html: `<h3>E-Mail : ${data.email}</h3> 
            <h3>phone : ${data.phone}</h3> 
            <h3>Name : ${data.name}</h3>
            <h3> message :<br>  <br> ${data.message}</h3>`
          })
  
        return res.status(200).json({success:true , message: 'Your message has been sent' });
      } catch (error) {
        console.error(error);
        return res.status(400).json({success:false , message: error.message});
      }
    }
  
    return res.status(405).json({ message: 'Method not allowed' });
      
    }
  
   export default handler