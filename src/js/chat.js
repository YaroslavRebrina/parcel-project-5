import { environment } from '../env-vars/vars';
import { openModal } from './modal-chat';

export const askChat = async ({ prompt }) => {
  const response = await fetch(`${environment.apiUrl}/generate`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ prompt: prompt }), // body data type must match "Content-Type" header
  });

  const parsedResponse = await response.json();
  openModal({ text: parsedResponse });
  return;
};
