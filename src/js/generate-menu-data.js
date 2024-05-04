import { askChat } from './chat';

const thElements = document.querySelectorAll('th');

// Add event listener to each <th> element
thElements.forEach(th => {
  th.addEventListener('click', e => {
    e.stopPropagation();

    const response = askChat({ prompt: th.innerText });

    return;
  });
});
