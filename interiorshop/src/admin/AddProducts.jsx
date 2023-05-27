import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { db, storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import '../admin_styles/add_products.css';

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);
  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const docRef = await collection(db, 'products');
      const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
      uploadTask.on(
        () => {
          toast.error('Image Not Uploaded!');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
          await addDoc(docRef, {
            title: enterTitle,
            ShortDesc: enterShortDesc,
            Description: enterDescription,
            category: enterCategory,
            price: enterPrice,
            imgUrl: downloadURL,
          });

        });
        toast('Product Successfully Added!');
        navigate('dashboard/all-products'); 
      })
    } catch (error) {
      toast.error('Product Not Added!');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-3 fs-4">Add Products</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className="form_group_add">
                <span>Product title</span>
                <input
                  type="text"
                  placeholder="Romantica Chair"
                  value={enterTitle}
                  onChange={(e) => setEnterTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form_group_add">
                <span>Short Description</span>
                <input
                  type="text"
                  placeholder="lorem....."
                  value={enterShortDesc}
                  onChange={(e) => setEnterShortDesc(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form_group_add">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Description"
                  value={enterDescription}
                  onChange={(e) => setEnterDescription(e.target.value)}
                  required
                />
              </FormGroup>
              <div className="d-flex align-item-center-justify-content-between gap-5">
                <FormGroup className="form_group_add w-50">
                  <span>Price</span>
                  <input
                    type="number"
                    placeholder="100USD"
                    value={enterPrice}
                    onChange={(e) => setEnterPrice(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form_group_add w-50">
                  <span>Category</span>
                  <select
                    className="w-100 p-2"
                    value={enterCategory}
                    onChange={(e) => setEnterCategory(e.target.value)}
                    required
                  >
                    <option value="chair">Chair</option>
                    <option value="table">Table</option>
                  </select>
                </FormGroup>
              </div>
              <div>
                <FormGroup className="form_group_add">
                  <span>Product Image</span>
                  <input type="file" onChange={(e) => setEnterProductImg(e.target.files[0])} required />
                </FormGroup>
              </div>
              <button className="add_btn" type="submit">
                Add Product
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;