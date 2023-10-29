import React, { Fragment ,useContext,useState} from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {FireBaseContext,AuthContext} from '../../store/Context'  



const Create = () => {

     const {firebase} = useContext(FireBaseContext)
     const {user}= useContext(AuthContext)

     const history=useHistory()
     const[name,setName]=useState('')
     const[category,setCategory]=useState('')
     const[price,setPrice]=useState('')
     const[image,setImage]=useState('')
     const[Customername,setCustomername]=useState('')
     const [phoneNo,setPhoneNo] =useState('')
     const [Address,setAddress]=useState('')
     const date=new Date()

const handleSubmit =()=>{

    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString(),
          Customername,
          phoneNo,
          Address

        })
        history.push('/')
      })
    })
}

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Product Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price}
              onChange={(e)=>setPrice(e.target.value)} id="fname" name="Price" />
            <br />

            <label htmlFor="Cname">Customer Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={Customername}
              onChange={(e)=>setCustomername(e.target.value)}
              id="Cname"
              name="Customername"
              defaultValue="john"
            />
            <br />

            <label htmlFor="Cname">Phone Number</label>
            <br />
            <input
              className="input"
              type="number"
              value={phoneNo}
              onChange={(e)=>setPhoneNo(e.target.value)}
              id="phoneNo"
              name="phoneNo"
              defaultValue=""
            />
            <br />

            <label htmlFor="Cname">Address</label>
            <br />
            <input
              className="input"
              type="text"
              value={Address}
              onChange={(e)=>setAddress(e.target.value)}
              id="Address"
              name="Address"
              defaultValue=""
            />
            <br />

        
          <br />
          <img alt="Posts"    width="200px" height="200px" src={image ? URL.createObjectURL(image):'' }></img>
        
            <br />
            <input  onChange={(e)=>{
              setImage(e.target.files[0])
            }}  type="file" />
            <br />
            <button onClick={handleSubmit}  className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
