import React from 'react'
import{}from 'react-icons/fa';
import 'CreatePost.css';

const CreatePost = () => {
  return (
    <div className='create-post-page'>
        <Navbar/>

        <div className='create-post-container'>
            <header className='form-header'>
                <h1>create new post</h1>
                <p>share your thoughts</p>
            </header>

            <div className='post-form-card'>
                <form>
                    <div className='form-group'>
                        <label>Post Title</label>
                        <div className='input-wrapper'>
                            <FaHeading className='input-icon'/>
                            <input
                            type='text'
                            name='title'
                            className='form-control'
                            placeholder='enter a catchy title'
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Author Name</label>
                        <div className='input-wrapper'>
                            <FaUser className='input-icon'/>
                            <input
                                type='text'
                                name='author'
                                className='form-control'
                                placeholder="your Name"
                                />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea
                            name='description'
                            className='form-control'
                            placeholder="what's On Your Mind? write your story here"
                            ></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Cover Image</label>
                        <div className='image-source-tabs'>
                            <button type='button' className='tab-btn active'>
                                Image URL
                            </button>
                            <button type='button' className='tab-btn'>
                                Upload File
                            </button>
                        </div>
                        <div className='input-wrapper'>
                            <FaLink className='input-icon'/>
                            <input 
                                type='url'
                                name='imageUrl'
                                className='form-control'
                                placeholder='paste image URL here '
                                />
                        </div>
                        <div className='image-upload-area'>
                            <FaCloudUploadAlt className='upload-icon'/>
                            <p>Click to upload image from your device</p>
                        </div>
                        <div className='image-preview-container'>
                            <img
                                src=''
                                alt='Preview'
                                className='image-preview'
                            />
                            <button type='button' className='remove-image-btn'>
                                <FaTimes/>
                            </button>
                        </div>
                    </div>
                    <div className='form-actions-row'>
                        <button type='submit' className='submit-btn'>
                            <FaRegPaperPlane/> Publish Post
                        </button>
                        <button type='button' className='cancel-btn'>
                            click Here
                        </button>
                    </div>
                </form>
            </div>
            </div>      
    </div>
  )
}

export default CreatePost
