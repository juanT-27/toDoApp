
const d= document;
let project=[]
let proOutput= d.querySelector(".proyectsOutput");


function showHide(obj){
 let $obj= d.querySelector(obj);
    $obj.classList.toggle("hidden")
}


function addProyect(e,pro){
    e.preventDefault()
                                                        
    let $project =d.querySelector(pro).value
    let taskId= Math.floor(Math.random()*100)

  objPrototype = {id:`${taskId}`, projectName:`${$project}`, tasks:[]}
    project.push(objPrototype)
   
   

    d.querySelector(".proyectForm").reset()
    
    showHide(".modal")

    showingProyects() 
   
}

function showingProyects(){

   proOutput.innerHTML="";
    let frag= d.createDocumentFragment()
   
    project.forEach(el=> {

    let article = d.createElement("article");
    article.setAttribute("id", `${el.id}`)
    article.classList.add("proyectBox")

    let $proyectBox= d.createElement("div")
    $proyectBox.setAttribute("class", "proyectBox_title")
    $proyectBox.innerHTML=` <p class="bigText "> ${el.projectName} </p>`

    let $btnToAdd = d.createElement("a")
    $btnToAdd.setAttribute("href","#formtasks")
    $btnToAdd.setAttribute("id", `${el.id}`)
    $btnToAdd.setAttribute("class", "darkBtn")
    $btnToAdd.classList.add("btnAdd")
    $btnToAdd.textContent= "Add +"


    $btnToAdd.addEventListener("click",(e)=> {
      formToTask(el.id, ".formNewTask" );
     })
    
    $proyectBox.appendChild($btnToAdd)
    article.appendChild($proyectBox)
    frag.appendChild(article)
    proOutput.appendChild(frag)
 

    });

}

function formToTask(id, form ){
  showHide(form)

  let $id= id
  let $taskForm= d.querySelector(form)
 

  $taskForm.reset()

  let submitTask = d.querySelector("#submitTask").addEventListener("click", (e)=>{
    addTask(e, $id, "#newtask", "#newTaskDes")
    $taskForm.reset()
    
  })
 
}

let found;

function addTask (e, $id, task, desc){
  e.preventDefault()
  
  let taskInput = d.querySelector(task).value
  let desInput = d.querySelector(desc).value

  let tasksId= Math.floor(Math.random()* 100)

  found= project.findIndex((el)=> el.id === $id  )
  project[found].tasks.push({ id: tasksId, taskTitle: taskInput, taskDesc:desInput})


  
  console.log(project[found])
  
  
 
}

function showingTask (article){

let fragment = d.createDocumentFragment()
let $article= d.getElementById(article)

project.forEach(el => {
  console.log(el)
//   let taskBoxes= d.createElement("div");
//   taskBoxes.setAttribute("class", "taskBoxes");

//   let taskCheck = d.createElement("form");
//   taskCheck.setAttribute("class", "taskCheck");

//  taskCheck.innerHTML= ` <div class="taskToDo">
//  <input
//    type="checkbox"
//    name="checkbox"
//    id=""
//    class="checkBoxTask"
//  />
//  <label for="checkbox  " class="midText label">${el.tasks.titleTask}</label>
// </div>
// <div class="description">
//  <p>
//    ${el.tasks.des}
//  </p>
// </div>`;
// taskBoxes.appendChild(taskCheck)
// fragment.appendChild(taskBoxes)
//  $article.appendChild(fragment)
});


}

 

document.addEventListener("click",(e)=>{
    if(e.target.matches("#navMenu")){
        showHide(".leftMenu")
    }

    if(e.target.matches("#callingForm")){
        showHide(".modal")
    }

    if(e.target.matches("#formClose")){
        showHide(".modal")
    }

    if(e.target.matches(".formTaskClose")){
      showHide(".formNewTask")
  }

    if(e.target.matches("#submit")){
        addProyect(e,"#proyectName","#taskTitle","#desc")
    }

    if(e.target.matches(".showProyect")){
        showingProyects(e)
    }

   

 

})

d.addEventListener("DOMContentLoaded", e=>{

})
 
