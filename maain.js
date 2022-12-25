const ROOT = document.getElementById("root")
const btnModal = document.createElement("button")
ROOT.append(btnModal)
btnModal.textContent = "show modal 1 "
btnModal.style.cssText = `
background-color: white;
color: black;
font-size: 1rem;
margin: 0  auto;
margin-left: 20px;
display: block;
padding: 8px 10px;
border-bottom: 5px;
border: none;
cursor: pointer;
border-radius: 5px;
transform: translateY(32px);

`

btnModal.addEventListener("mouseover", () => {
    btnModal.style.backgroundColor = "red"
})
btnModal.addEventListener("mouseout", () => {
    btnModal.style.backgroundColor = "white"
})

const modal = document.createElement("div")
modal.style.cssText =`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000060;
dispaly: flex; 
justify-content: center;
align-items: center;
`

const modalx = document.createElement("div")
modalx.style.cssText = `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 600px;
height: 150px;
background-color: white;
padding: 20px;
font-size: 1.5rem;
position: relative;
`

modalx.textContent = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni exercitationem minima ad. Eius qui error omnis sapiente! Ullam, hic. Nemo?"

modal.append(modalx)
btnModal.addEventListener("click", () => {
    console.log("clicked");
    ROOT.append(modal)
 })

 const xModal = document.createElement ("button")
 xModal.textContent = "X"
 modalx.append(xModal)
 xModal.style.cssText = `
 position: absolute; 
top: 0;
right: 0;
background-color: red;
width: 30px;
height: 30px; 
border: nonde;

 `



xModal.addEventListener("click", () =>{
    modal.remove()
})
modal.addEventListener("click", () => {
    modal.remove()
})






const ROOK = document.getElementById("rook")
const  btn =  document.createElement("button")
ROOK.append(btn)
btn.textContent = "show modal 2"
btn.style.cssText = `
background-color: white;
color: black;
font-size: 1rem;
margin: 0  auto;
margin-left: 20px;
display: block;
padding: 8px 10px;
border-bottom: 5px;
border: none;
cursor: pointer;
transform: translateY(-34px) translateX(271px);
border-radius: 5px;
`

btn.addEventListener("mouseover", () =>{
    btn.style.backgroundColor = "red"
})
btn.addEventListener("mouseout", () =>{
    btn.style.backgroundColor = "white"
})




const rik = document.createElement("div")
rik.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000060;
dispaly: flex; 
justify-content: center;
align-items: center;
`


const  rikModal = document.createElement("div")
rikModal.style.cssText = `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 600px;
height: 150px;
background-color: white;
padding: 20px;
font-size: 1.5rem;
position: relative;
`

rikModal.textContent = "статус души, очи, ты убила меня градом, ты просто улыбнись мне, тебя не разлюбить!"

rik.append(rikModal)
btn.addEventListener("click", () => {
    console.log("clicked");
    ROOK.append(rik)
})

const del = document.createElement("button")
del.textContent = "X"
rikModal.append(del)
del.style.cssText = `
position: absolute; 
top: 0;
right: 0;
background-color: red;
width: 30px;
height: 30px; 
border: nonde;
`


del.addEventListener("click", () => {
    rik.remove()
})
rik.addEventListener("click", () => {
    rik.remove()
})


const ROOL = document.getElementById("rool")
const btnmetho = document.createElement("button")
ROOT.append(btnmetho)
btnmetho.textContent = "show modal 3 "
btnmetho.style.cssText = `
    background-color: white;
    color: black;
    font-size: 1rem;
    margin: 0  auto;
    margin-left: 20px;
    display: block;
    padding: 8px 10px;
    border-bottom: 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transform: translateX(538px);
`
btnmetho.addEventListener("mouseover", () =>{
    btnmetho.style.backgroundColor = "red"
})
btnmetho.addEventListener("mouseout", () =>{
    btnmetho.style.backgroundColor = "white"
})

const metho = document.createElement("div")
metho.style.cssText =`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000060;
dispaly: flex; 
justify-content: center;
align-items: center;
`

const methoModal = document.createElement("div")
methoModal.style.cssText = `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 600px;
height: 150px;
background-color: white;
padding: 20px;
font-size: 1.5rem;
position: relative;
`


methoModal.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, cum?"

metho.append(methoModal)
btnmetho.addEventListener("click", () => {
    console.log("clicked");
    ROOL.append(metho)
    
   
 })


 const delci = document.createElement("button")
 delci.textContent = "x"
 methoModal.append(delci)
delci.style.cssText = `
position: absolute; 
top: 0;
right: 0;
background-color: red;
width: 30px;
height: 30px; 
border: nonde;
`



delci.addEventListener("click", () => {
    metho.remove()
})






