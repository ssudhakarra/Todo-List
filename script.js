let arr=[

    "i want to eat food @ 10am",
    "i want to attend class @ 3.00pm",
    "i want to meet balayya @12am",

];

function display(){
    let trs="";
    for(let i in arr){
         trs+=`
         <tr>
          <td>${arr[i]}</td>
           <td>
             <button onclick="deleteTask(${i});" class="btn">Delete</button>
              </td>
               <td>
               <button onclick="editTask(${i});">Edit</button>
               </td>
                </tr>
        `
    }
    let table=`
     <table border="1px" class="tab">
     ${trs}
      </table>
      `
      
       document.getElementById("ref").innerHTML=table;
}


display();


function deleteTask(index){
     let res=confirm("want to delete?");
     if(res==false){
         return;
        }
         arr.splice(index,1);
         display();
        }


function addTask(e){
     e.preventDefault();
     let textBox=document.getElementById("textBox");
     let enteredTask=textBox.value;
     // validate
     if(enteredTask.trim()==""){
        alert("please enter task");
         return;
        }
        arr.push(enteredTask);
         display();
         textBox.value="";
}
function editTask(i){
     let enteredTask=prompt("enter task");
     if(enteredTask.trim()==""){
         alert("please enter task");
         return;
         }
         let res=confirm("want to update?");
         if(res==false){
             return;
            }
            arr[i]=enteredTask;
             display();
        }
             
        
            





       


        

    
   