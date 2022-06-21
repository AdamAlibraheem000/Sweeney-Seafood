import React, { useState } from "react";
import Auth from "../../utils/auth";
import { useQuery } from '@apollo/client';
import { QUERY_FEATURES } from '../../utils/queries';

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

    const addElements = async (title, desc, price) => {
        let titleValue = title;
        let descValue = desc;
        let priceValue = price;

      //   try {
      //      await features.create(titleValue, descValue,priceValue);
      // } catch (e) {
      //     console.error(e);
      // }

        
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

    const { data } = useQuery(QUERY_FEATURES)
    const features = data?.features || [];


    function removeItem(e){
      e.removeChild();
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
            {features &&
                features.map(feature => (
                    
                        <div key={feature._id}>
                            
                            <h5  >{feature.title}</h5>
                            <p  >{feature.description}</p>
                            <p  >${feature.price}</p>
                            <button onClick={removeItem}>Delete Me</button>
                        </div>
                    
                ))}
        </div>
      </div>
    </>
  );
}

export default Login;
