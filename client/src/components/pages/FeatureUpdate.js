import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { ADD_FEATURE } from "../../utils/mutations";

// const [addFeature] = useMutation(ADD_FEATURE);

const form = document.querySelector('.element-form');

// counter to add unique id name plus number
// idname ${i}
let i = 0;

function Login() {
  
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("")
    const [price, setPrice] = React.useState("")
    const formInput = document.querySelector(".task-form");
    

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
      //  Event listener to remove dynamic elements
       document.querySelector('#delete-item' + i).addEventListener("click", function(){
         let removeEl = this.parentElement;
        divCont.removeChild(removeEl);
       })


       i++;
      //  Clear form values
      setTitle('');
      setDesc('');
      setPrice('');
      
       
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
