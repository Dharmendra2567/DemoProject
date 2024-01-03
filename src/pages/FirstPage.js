import React from 'react';
import Navbar from '../components/Navbar';
import Posts from '../components/Posts';

const FirstPage = () => {
  return (
    <>
      <div className='container-fluid position-relative'>
        <div className='row '>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <img src="./images/ATGWorld(Logo).png" style={{ height: '45px' }} />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 '>
            <form class="d-flex" role="search">
              <input class="form-control mt-1 " style={{ borderRadius: '40px' }} type="search" placeholder="Search" aria-label="Search" />
              {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center'>
            <p className='m-auto'>Create account.<a href='#' className='text-decoration-none'><b>It's free</b></a><i class="bi bi-caret-down-fill"></i></p>
          </div>
        </div>
        <div className='row ' >
          <div class=" col-12 col-lg-12 p-0 position-relative" >
            <img src='https://ies.ed.gov/ncer/images/carousel/ncerCarousel1.jpg' className='w-100' />
            <div className='overlay-text design position-absolute translate-middle '>
              <p >Computer Engineering<br /><h6>142,755 Computer engineers follow this.</h6></p>
            </div>
          </div>
        </div>
        <div className='row ' style={{ marginLeft: '100px', marginRight: '100px' }}>
          <Navbar />
          <div className='col-lg-7 col-md-9 col-sm-12 bg-light p-0 '>
            <Posts/>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-4 bg-light '>
            <div className='card border-0 ' style={{ marginLeft: '90px' }}>
              <div className='d-flex justify-content-between' style={{ borderBottom: '2px solid #bbbdbe' }}>
                <div className='d-flex mt-2'>
                  <i className='bi bi-geo-alt'></i>
                  <p className='card-title mx-3'>Noida, India</p>
                </div>
                <div className='mt-2'>
                  <p className=''><i className='bi bi-pencil-fill'></i></p>
                </div>
              </div>
              <div className='mt-5 d-flex'>
              <i className="bi bi-exclamation-circle"></i>
                <p className='custom-font ms-2'>Your location will help us serve better and extend a personalised experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
