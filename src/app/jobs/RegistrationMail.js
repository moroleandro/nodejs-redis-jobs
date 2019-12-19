import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
      const { user } = data;
  
      await Mail.sendMail({
        from: 'Queue Test <queue@queuetest.com.br>',
        to: `${user.name} <${user.email}>`,
        subject: 'Subscribe news',
        html: `Olá, ${user.name},<br>Seja bem-vindo ao sistema de filas de @moroleandro :D`
      });
    },
  };