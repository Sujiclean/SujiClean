
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav){
  toggle.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Demo form submission
function submitForm(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log('Pedido de orçamento (DEMO):', data);
  alert('Obrigado! Recebemos o seu pedido (demonstração).');
  e.target.reset();
  return false;
}
