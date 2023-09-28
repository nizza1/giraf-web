import nodemailer from 'nodemailer';


const email = process.env.EMAIL;
const AppPassword= process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: AppPassword
    }
});

export const mailOptions = {
    from : email,
    to : 'nizardjassim@gmail.com',
};

/* to : 'services@giraf-pm.com', */