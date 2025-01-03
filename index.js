const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

  const newHeader=document.createElement('h1');
  newHeader.id="victory"

 newHeader.innerHTML="Ryley Watson is the champion";
 document.body.appendChild(newHeader);
 