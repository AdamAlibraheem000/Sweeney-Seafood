import React, { useState } from "react";
import Auth from "../../utils/auth";
import { useQuery } from '@apollo/client';
import { QUERY_FEATURES } from '../../utils/queries';
import { useMutation } from "@apollo/client";
import { ADD_FEATURE } from "../../utils/mutations";



const Update = () => {
  const [formState, setFormState] = useState({
    title: "",
    desc: "",
    price: "",
  });
  const [addFeature, { error }] = useMutation(ADD_FEATURE);

  // state update
  const handleChange = (event) => {
    const { name, desc, value } = event.target;
    console.log(event.target)

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addFeature({
        variables: { ...formState },
      });

     
    } catch (e) {
      console.error(e);
    }
  };
  
    // const [title, setTitle] = React.useState("");
    // const [desc, setDesc] = React.useState("")
    // const [price, setPrice] = React.useState("")
    // const formInput = document.querySelector(".task-form");
    

    // const divCont = document.getElementById("data-elements");

    // function handleSubmit (e) {
    //     e.preventDefault();
    //     addElements(title, desc, price);

    // }

   

    // const addElements = async (title, desc, price) => {
    //     let titleValue = title;
    //     let descValue = desc;
    //     let priceValue = price;
        

    //     //  Clear form values
    //   setTitle('');
    //   setDesc('');
    //   setPrice('');
        
    //    }
    


       
      
      
       
    

    // Query database for features
    const { data } = useQuery(QUERY_FEATURES)
    const features = data?.features || [];


    
    
  return (
    <>
    <div className="update-grid">
      <div className="update-form">
        <h4>Add Feature:</h4>
        <div className="update-flex">
            
          <form className="task-form" onSubmit={handleFormSubmit}>
          <div>
            <input
              placeholder="Add Title"
              name="title"
              type="text"
              id="title"
              value={formState.title}
              onChange={handleChange}
            />
            </div>
            <div>
            <input
              placeholder="Add Description"
              name="desc"
              type="text"
              id="description"
              value={formState.desc}
              onChange={handleChange}
            />
            </div>
            <div>
            <input
              placeholder="Add Price"
              name="price"
              type="text"
              id="price"
              value={formState.price}
              onChange={handleChange}
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
                            <button>Delete Me</button>
                        </div>
                    
                ))}
        </div>
      </div>
    </>
  );
}

export default Update;
