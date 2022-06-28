import React, {useState} from 'react'
import axios from 'axios';

function Update() {
  const[title, setTitle] = useState('');
  const[article, setArticle] = useState('');
  const[authorname, setAuthorName] = useState('');

  const changeOnClick = e => {
    e.preventDefault();

    // Get Values from form
    const articles ={
      title,
      article,
      authorname
    }

    // Clear form values
    setTitle('')
    setArticle('')
    setAuthorName('')

    // Send to database
    axios.post("/articles/add", articles)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }



  return (
      <div className="update-container">
      <section className='update-form-styling'>
        <h1>Add New Feature</h1>
    <form  onSubmit={changeOnClick} encType='multipart/form-data'>
  <div className="form-group">
    <label htmlFor="authorname">Author Name</label>
    <input 
    type="text"
    value={authorname} 
    className="form-control"  
    placeholder="Auther Name"
    onChange={e => setAuthorName(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input 
    type="text" 
    value={title}
    className="form-control" 
    placeholder="Enter Title"
    onChange={e => setTitle(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor='article'>Article</label>
    <textarea 
    className="form-control" 
    rows="3"
    value={article}
    onChange={e => setArticle(e.target.value)}
    ></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Post Article</button>
</form>
</section>
</div>

  )
}

export default Update;