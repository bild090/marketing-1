import { useState } from 'react';
import { send } from 'emailjs-com';

const SendEmail = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_inrna5d',
          'template_0vplsjg',
          toSend,
          'bk8Ze8VmN7yaG7jxK'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                name='from_name'
                placeholder='from name'
                value={toSend.from_name}
                onChange={handleChange}
            />
            <input
                type='text'
                name='to_name'
                placeholder='to name'
                value={toSend.to_name}
                onChange={handleChange}
            />
            <input
                type='text'
                name='message'
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange}
            />
            <input
                type='text'
                name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to}
                onChange={handleChange}
            />
            <button type='Submit'>Submit</button>
        </form>
    );
}

export default SendEmail;