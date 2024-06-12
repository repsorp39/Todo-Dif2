/*
**switching between dark and light mode
*/

let change = document.querySelector('.light_toggler');
let isDark = true;
let addButton = document.getElementById('toAdd');

change.addEventListener('click' ,()=>
{
    if(isDark)
    {
    lightToggler();
    isDark=false;
    }
    else
    {
        darkToggler();
        isDark=true;
    }

})


/*
**
Adding of new todo tasks
**
*/

addButton.addEventListener('click' ,()=>
{
    if(champSaisie.value.trim() !== '')
    {
    AddToDo();
    }
    resetItems();
   
})

/*
**
Marking todo as complete
**
*/
isCompleted();
closeCompleted();

/*
**
Delete achieve tasks
**
*/

deleteAchieved();

/*
**
Clear all completed tasks
**
*/
clearAllCompleted();

onlyShowCompleted();
activate();
allTasks();