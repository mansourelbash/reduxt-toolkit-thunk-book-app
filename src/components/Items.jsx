import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import './Items'

const Items = () => {
  const [books, setBooks] = useState(null);
  const [EditField, setEditField]= useState(false);
  const [selectedItem, setSelectedItem]= useState(null);
  const [addButton, setaddButton]= useState(true);


  const title = useRef();
  const price = useRef();
  const description = useRef();


  const handleSubmit = (e) =>{
    e.preventDefault()
    const bookItem = {
      id: Math.random().toString(36).slice(2),
      title: title.current.value,
      price: price.current.value,
      description: description.current.value
    }
    insertItem(bookItem)
  }
  const insertItem = (item) =>{  
    if (!title.current.value || !price.current.value || !description.current.value) {
      console.error('Please fill all required fields.');
      return;
    } 
  axios.post('http://localhost:9000/items',{
    id: item.id,
    title: item.title,
    price: item.price,
    description: item.description
  }).then((res)=>{
    setBooks((prev) => [...prev , {...item, id: res.data.id}]);
    title.current.value = ''
    price.current.value = ''
    description.current.value = ''
    handleChange()
  })
  
  }
  const updateItem = (id) =>{
    setEditField(true)
    const filterdData = books.filter((item)=>item.id === id)
    title.current.value = filterdData[0].title
    price.current.value = filterdData[0].price
    description.current.value = filterdData[0].description
    setSelectedItem(filterdData[0].id);
  }
  const deleteItem = (id) =>{
    const deletedItem = books.filter((item)=>item.id !== id)
    axios.delete(`http://localhost:9000/items/${id}`).then(()=>{
      setBooks(deletedItem)
    })

  }
  const editItem = () =>{
    if (!title.current.value || !price.current.value || !description.current.value) {
      console.error('Please fill all required fields.');
      return;
    } 
    axios.put(`http://localhost:9000/items/${selectedItem}`,{
      id: selectedItem,
      title: title.current.value,
      price: price.current.value,
      description: description.current.value
    }).then((res)=>
    setBooks((prev)=>{
      const index = prev.findIndex((item)=>item.id ===selectedItem)
      if(index === -1){
        return prev;
      }
      else{
        const updatedItem = [...prev]
        updatedItem[index] = { ...res.data,id:selectedItem}
        return updatedItem
      }

    })
    )

    title.current.value = ""
    price.current.value = ""
    description.current.value = ""
  }

  const handleChange = (e) => {
    console.log(!title.current.value)
    console.log(!price.current.value)
    console.log(!description.current.value)

    if (!title.current.value || !price.current.value || !description.current.value){
      setaddButton(true);
    }else{
      setaddButton(false);
    }
  }

  const fetchBooks = () => {
    axios.get('http://localhost:9000/items')
      .then((res) => {
        setBooks(res.data); // Update the books state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  return (
    <div style={{ textAlign: 'lett' }}>

      <div className="row">
        <div className="col">
        {books && books.map((item) => {
        return (
          <div key={item.id} style={{ marginTop: '14px', border: '1px solid #f00', padding: '20px', textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
            <span>Title: {item.title}</span>
            <span>Price: {item.price}</span>
            <span>Description: {item.description}</span>
            <div>
            <button onClick={()=>updateItem(item.id)}>Edit</button>
            <button onClick={()=>deleteItem(item.id)}>Delete</button>
            </div>
          </div>
        );
      })}
        </div>
        <div className="col">
          <div className="form">
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" ref={title} onChange={handleChange} className="form-control" id="title" aria-describedby="title" />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" ref={price} onChange={handleChange} className="form-control" id="price" />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" ref={description} onChange={handleChange} className="form-control" id="description" aria-describedby="description" />
              </div>
              {EditField ? (
              <button type="button" onClick={editItem} className="btn btn-primary">Edit</button>

              ): (
                <button type="submit" disabled={addButton} className="btn btn-primary">Add +</button>
              )}
            </form>

          </div>

        </div>

      </div>



    </div>
  );
};

export default Items;
