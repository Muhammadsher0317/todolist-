const plan=[{
    id:1,
    title:"ertaga erta turish",
    isDone:false
},
{
    id:2,
    title:"kitob o'qish",
    isDone:true
}]
const form=document.querySelector("form");
const ol =document.querySelector("ol");
const firstinput=document.querySelector(".firstinput");
const writedata=(data)=>{
data.forEach((item)=>{
    ol.innerHTML+=`<div class="row">
                    <input class="lastinput" type="radio">
                    <li>${item.title}</li>
                    <button class="secondbutton">del <i class="fa-solid fa-trash-can"></i></button>
                </div>`
})

}
form.addEventListener(("submit") ,(e)=>{
e.preventDefault()
const obj={
    id: Math.floor(Math.random()*9999),
    title:firstinput.value,
    isDone:false
}
plan.push(obj);
writedata(plan);
firstinput.value=""
})
writedata(plan)
