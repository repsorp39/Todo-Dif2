/*
**switching between dark and light mode
*/
let wallpaper=document.querySelector('body');
let textColor=document.querySelector('.text-light');
let title=document.querySelector('.todolist__title');
let champSaisie=document.getElementById('champSaisie');
let contenu=document.querySelectorAll('.todo_content');
let switcher=document.getElementById("icon-switcher");

function lightToggler()
{
    switcher.src='images/icon-moon.svg';
    wallpaper.style.backgroundImage='url(images/bg-desktop-light.jpg)';
    wallpaper.classList.remove('bg-desaturate');
    wallpaper.classList.add('bg-light');
    textColor.classList.add('text-dark');
    textColor.classList.remove('text-light');
    title.style.color='white';
    champSaisie.style.color='black';
    champSaisie.classList.add('light_background');
    champSaisie.classList.remove('dark_background');

    for(c=0;c<contenu.length;c++)
    {
    contenu[c].classList.add('todo_content2');
    contenu[c].classList.remove('todo_content');

    }

}

function darkToggler()
{
    switcher.src='images/icon-sun.svg';
    wallpaper.style.backgroundImage='url(images/bg-desktop-dark.jpg)';
    wallpaper.classList.remove('bg-light');
    wallpaper.classList.add('bg-desaturate');
    textColor.classList.remove('text-dark');
    textColor.classList.add('text-light');
    champSaisie.style.color='white';
    champSaisie.classList.remove('light_background');
    champSaisie.classList.add('dark_background');

    for(c=0;c<contenu.length;c++)
    {
    contenu[c].classList.add('todo_content');
    contenu[c].classList.remove('todo_content2');

    }
}



/*
**
Adding of new todo tasks
**
*/

let oldTasks = document.querySelector('.todo-body');
let myTask = '';

function AddToDo()
{

    myTask=champSaisie.value;

    let newTask = `
    
    <div class="d-flex justify-content-between contenu  Border transition">
    <div class="d-flex">
       <div> <label class="mylabel py-3" ></label> </div>
        <input type="checkbox">
        <p class="mt-1 content"> ${myTask}</p>
    </div>
    <p><img src="images/icon-cross.svg" class="invisible icon"></p>
    </div>
    `;
    
    oldTasks.innerHTML = newTask + oldTasks.innerHTML;
    champSaisie.value = '';
    isCompleted();
    closeCompleted();
    deleteAchieved();
    clearAllCompleted();
    onlyShowCompleted();
    activate();
    allTasks();
}



/*
**
Reset remaining tasks on the todo
**
*/

let numberofItems = document.getElementById('numberItems');



function resetItems ()
{

    let taskNumber = document.querySelectorAll('.content');
    let count = 0;

    for(a=0;a<taskNumber.length;a++)
    {
     if( !taskNumber[a].classList.contains('asCompleted') )
{
    count++;
}
    }
    numberofItems.innerText = count;
}


/*
**
Marking todo as complete
**
*/ 

function isCompleted()
{
    let content = document.querySelectorAll('.content');
    let labelToCheck = document.querySelectorAll('.mylabel');

for( let i=0;i<labelToCheck.length;i++)
{
    
    
   labelToCheck[i].addEventListener('click' ,()=>
   {

    if( !labelToCheck[i].classList.contains('Completed') && !content[i].classList.contains('asCompleted'))
    {
    labelToCheck[i].classList.add('Completed');
    content[i].classList.add('asCompleted');
    resetItems();

    }
    else
    {
        labelToCheck[i].classList.remove ('Completed');
        content[i].classList.remove('asCompleted');
        resetItems();

    }

   })

}
}

/*
**
Possibility to clear completed to do task
**
*/
function closeCompleted()
{
    let mytasks = document.querySelectorAll('.Border');
    let closeIcon = document.querySelectorAll('.icon');

    for(let f=0 ; f<mytasks.length ; f++)
    {
        mytasks[f].addEventListener('mouseover' ,()=>
        {
            closeIcon[f].classList.remove('invisible');
        })
    }


    for(let f=0 ; f<mytasks.length ; f++)
    {
        mytasks[f].addEventListener('mouseout' ,()=>
        {
            closeIcon[f].classList.add('invisible');
        })
    }
}



/*
**
Delete achieve tasks
**
*/
function deleteAchieved()
{
    let taskNumber = document.querySelectorAll('.content');
    let mytasks = document.querySelectorAll('.Border');
    let closeIcon = document.querySelectorAll('.icon');

    for(let g=0 ;g<mytasks.length ; g++)

    {
        closeIcon[g].addEventListener('click' ,()=>
        {
            mytasks[g].classList.add('no-there');
            taskNumber[g].classList.add('asCompleted');
            resetItems();
        })
    }
}


let btnActive = document.getElementById('active');
let btnCompleted = document.getElementById('complete');
let btnClear = document.getElementById('clear');

let btnAll = document.getElementById('all');


/*
**
Clear all completed tasks
**
*/
function clearAllCompleted(){

    let taskNumber = document.querySelectorAll('.content');
    let mytasks = document.querySelectorAll('.Border');
  
       btnClear.addEventListener('click' , ()=>
       {

        for( let t=0;t<mytasks.length;t++)
        {
            
            if(mytasks[t].classList.contains('d-none'))
            {
            mytasks[t].classList.remove('d-none');
            }

            if(taskNumber[t].classList.contains('asCompleted'))
            {
                 mytasks[t].classList.add('no-there');
            
        }
        }

    btnAll.classList.remove('text-blue');
    btnActive.classList.remove('text-blue');
    btnCompleted.classList.remove('text-blue');
    btnClear.classList.add('text-blue');


       })
    
    }


    function onlyShowCompleted()
    {
    let taskNumber = document.querySelectorAll('.content');
    let mytasks = document.querySelectorAll('.Border');

    btnCompleted.addEventListener('click' ,()=>
    {
        for(let d=0;d<mytasks.length;d++)
        {
            if(mytasks[d].classList.contains('d-none'))
            {
                mytasks[d].classList.remove('d-none');
            }
            if(!taskNumber[d].classList.contains('asCompleted'))
            {
                mytasks[d].classList.add('d-none');
               
            }
        }

    btnAll.classList.remove('text-blue');
    btnActive.classList.remove('text-blue');
    btnCompleted.classList.add('text-blue');
    btnClear.classList.remove('text-blue');


    })
    }

    function activate()
    {
  
    let taskNumber = document.querySelectorAll('.content');
    let mytasks = document.querySelectorAll('.Border');
      btnActive.addEventListener('click' ,()=>
    {

    for( let k=0 ; k<mytasks.length ; k++)
    {
        if(taskNumber[k].classList.contains('asCompleted'))
        {
           mytasks[k].classList.add('d-none');
        }
        else{
            
                mytasks[k].classList.remove('d-none');
            
        }
        
    }
    btnAll.classList.remove('text-blue');
    btnActive.classList.add('text-blue');
    btnCompleted.classList.remove('text-blue');
    btnClear.classList.remove('text-blue');


    })
}


    

function allTasks()
{
   
    let mytasks = document.querySelectorAll('.Border');

    btnAll.addEventListener('click' ,()=>
    {
        for(let j=0;j<mytasks.length ; j++)
        {
            if(mytasks[j].classList.contains('d-none'))
            {
                mytasks[j].classList.remove('d-none');
            }
        }
        btnAll.classList.add('text-blue');
        btnActive.classList.remove('text-blue');
        btnCompleted.classList.remove('text-blue');
        btnClear.classList.remove('text-blue');


    })

}