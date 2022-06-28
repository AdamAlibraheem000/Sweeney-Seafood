import React, {useState, useEffect} from 'react'
import axios from 'axios';
import spinner from '../../imgs/spinner.gif'

function Update() {
  const[title, setTitle] = useState('');
  const[article, setArticle] = useState('');
  const[authorname, setAuthorName] = useState('');

  const [features, setFeatures] = useState([]);

  useEffect(()=> {
    axios.get('/articles')
    .then(res => setFeatures(res.data))
    .catch(error => console.log(error));
  })

  // Delete article by ID
  const deleteArticle = id  => {
    axios.delete(`/articles/${id}`)
    .then(res => console.log(res.data))
    setArticle(article.filter(elem => elem._id !== IDBCursor))
  }

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
<section className='update-list'>
       {!features.length ? (
       <img src={spinner} alt="loading"/>
       ) : (
    features.map((article, key) => (
        <div className='feature-border'>
        <p >{article.title}</p>
        <p >{article.article}</p>
        <p >
            {article.authorname}
        </p>
        <button onClick={() => deleteArticle(article._id)}>Delete</button>
        
        </div>
    )))}  
        </section>

</div>

  )
}

export default Update;