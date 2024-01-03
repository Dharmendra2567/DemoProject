import React from 'react';

const TryBuild = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row bg-danger'>
          <div className='col-sm-12 col-md-9 col-lg-12'>
            <p>this is first row</p>
          </div>
        </div>
        <div className='row bg-success'>
          <div className='col-lg-12 p-0 position-relative'>
            <img
              src='https://www.shutterstock.com/image-vector/concept-computer-programming-developing-software-600nw-2149658841.jpg'
              className='w-100'
              alt='Programming'
            />
            <div className='overlay-text design text-dark text-center position-absolute top-50 start-50 translate-middle'>
              <p>Computer Engineering</p>
              <p style={{ fontSize: '17px' }}>142,755 Computer engineers follow this.</p>
            </div>
          </div>
        </div>
        <div className='row bg-primary'>
          <div className='col-sm-12 col-md-9 col-lg-12'>
            <p>this is third row</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TryBuild;
