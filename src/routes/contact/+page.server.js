import { render } from 'svelte-email';
import Contact from '$lib/emails/contact.svelte';
import nodemailer from 'nodemailer';
import toast from 'svelte-5-french-toast';

export const actions = {
    sendMail: async ({}) => {
        toast.success("mail sent");
    }
};

// const transporter = nodemailer.createTransport({
// 	host: 'smtp.ethereal.email',
// 	port: 587,
// 	secure: false
// });

// const emailHtml = render({
// 	component: Contact,
// 	props: {
// 		name: 'Svelte'
// 	}
// });

// const options = {
// 	from: 'you@example.com',
// 	to: 'user@gmail.com',
// 	subject: 'hello world',
// 	html: emailHtml
// };

// transporter.sendMail(options);