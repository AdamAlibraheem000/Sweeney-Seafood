import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

const form = document.querySelector('.element-form');

let i = 0;

function Login() {
  
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("")
    const [price, setPrice] = React.useState("")
    

    const divCont = document.getElementById("data-elements");

    function handleSubmit (e) {
        e.preventDefault();
        addElements(title, desc, price);

    }

    function removeElement(e){
      if(e.target.parentElement.classList.contains("delete-item")){
        console.log(e.target);
      }
    }

    function addElements(title, desc, price){
        let titleValue = title;
        // let descValue = desc;
        // let priceValue = price;

        
        let newDiv = document.createElement('div');
        
       
        let newBtn = document.createElement('button');
        newBtn.className = "delete-item";
        newBtn.id = `delete-item${i}`;
        newBtn.textContent = "DeleteMe";
        newDiv.append(titleValue," ",newBtn);

       divCont.append(newDiv);
       document.querySelector('#delete-item' + i).addEventListener("click", function(){
         let removeEl = this.parentElement;
        //  console.log(removeEl);
        divCont.removeChild(removeEl);
       })

       i++;
       
    }

    

    
  
    
  

  return (
    <>
    <div className="update-grid">
      <div className="update-form">
        <h4>Add Feature:</h4>
        <div className="update-flex">
            
          <form className="task-form" onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Add Title"
              name="title"
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            </div>
            <div>
            <input
              placeholder="Add Description"
              name="Desc"
              type="text"
              id="description"
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
            </div>
            <div>
            <input
              placeholder="Add Price"
              name="price"
              type="text"
              id="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            </div>
            <div>
            <button type="submit" >Submit</button>
            </div>
          </form>
          
        </div>
      </div>
        <div id="data-elements" >
            {/* Dynamic items go here */}
        </div>
      </div>
    </>
  );
}

export default Login;
