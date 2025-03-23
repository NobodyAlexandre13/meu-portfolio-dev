const textEspecialidade = document.querySelector(".texto_home");

//Animação de digitalização

/*function textLoad(){
    setTimeout(()=>{
        textEspecialidade.textContent = 'Desenvolvedor Web'
    }, 0);
    setTimeout(()=>{
        textEspecialidade.textContent = 'Desenvolvedor Mobile'
    }, 4000);
}
textLoad();
setInterval(textLoad, 8000)*/

//Funcionalidade do menu

const home = document.querySelector('.home_menu')
const sobre = document.querySelector('.sobre_menu')
const skills = document.querySelector('.skills_menu')
const projectos = document.querySelector('.project_menu')
const contacto = document.querySelector('.contact_menu')

const home_aba = document.querySelector('.home')
const sobre_aba = document.querySelector('.sobre')
const skills_aba = document.querySelector('.skills')
const contacto_aba = document.querySelector('.contacto')
const projeto_aba = document.querySelector('.projetos')

home.addEventListener('click', ()=>{
    home.classList.add('ativo_home')
    sobre.classList.remove('ativo_sobre')
    skills.classList.remove('ativo_skills')
    projectos.classList.remove('ativo_projetos')
    contacto.classList.remove('ativo_contacto')
    home_aba.style.display = 'flex'
    sobre_aba.style.display = 'none'
    skills_aba.style.display = 'none'
    contacto_aba.style.display = 'none'
    projeto_aba.style.display = 'none'
})
sobre.addEventListener('click', ()=>{
    sobre.classList.add('ativo_sobre')
    home.classList.remove('ativo_home')
    skills.classList.remove('ativo_skills')
    projectos.classList.remove('ativo_projetos')
    contacto.classList.remove('ativo_contacto')
    home_aba.style.display = 'none'
    sobre_aba.style.display = 'flex'
    skills_aba.style.display = 'none'
    contacto_aba.style.display = 'none'
    projeto_aba.style.display = 'none'
})
skills.addEventListener('click', ()=>{
    skills.classList.add('ativo_skills')
    sobre.classList.remove('ativo_sobre')
    home.classList.remove('ativo_home')
    projectos.classList.remove('ativo_projetos')
    contacto.classList.remove('ativo_contacto')
    home_aba.style.display = 'none'
    sobre_aba.style.display = 'none'
    skills_aba.style.display = 'flex'
    contacto_aba.style.display = 'none'
    projeto_aba.style.display = 'none'
})
projectos.addEventListener('click', ()=>{
    projectos.classList.add('ativo_projetos')
    skills.classList.remove('ativo_skills')
    sobre.classList.remove('ativo_sobre')
    home.classList.remove('ativo_home')
    contacto.classList.remove('ativo_contacto')
    home_aba.style.display = 'none'
    sobre_aba.style.display = 'none'
    skills_aba.style.display = 'none'
    contacto_aba.style.display = 'none'
    projeto_aba.style.display = 'flex'
})
contacto.addEventListener('click', ()=>{
    contacto.classList.add('ativo_contacto')
    projectos.classList.remove('ativo_projetos')
    skills.classList.remove('ativo_skills')
    sobre.classList.remove('ativo_sobre')
    home.classList.remove('ativo_home')
    home_aba.style.display = 'none'
    sobre_aba.style.display = 'none'
    skills_aba.style.display = 'none'
    contacto_aba.style.display = 'flex'
    projeto_aba.style.display = 'none'
})