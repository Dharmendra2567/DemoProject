import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='row mt-5'>
                <div className='navbar navbar-expand-lg '>
                    <div className='container-fluid'>
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <Link to="#" className='nav-link active'>All Posts(32)</Link>
                            </li>
                            <li className='nav-item'>
                                <li>
                                    <Link to='#' className='nav-link'>Article</Link>
                                </li>
                            </li>
                            <li className='nav-item'>
                                <li>
                                    <Link to='#' className='nav-link'>Education</Link>
                                </li>
                            </li>
                            <li className='nav-item'>
                                <li>
                                    <Link to='/#' className='nav-link'>Job</Link>
                                </li>
                            </li>
                        </ul>
                        <div className='col-md-6 col-lg-4'>
                            <div className=' p-0 d-flex justify-content-end'>
                                 <div className='dropdown bg-light'>
                                    <a class="nav-link dropdown-toggle p-2 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Create a post
                                    </a>
                                    <div className='dropdown-menu'>
                                        <li><a href='#'>public</a></li>
                                    </div>
                                </div>
                                <button className='btn btn-primary ms-4'><i className='bi bi-people-fill'></i> Join Group</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Navbar