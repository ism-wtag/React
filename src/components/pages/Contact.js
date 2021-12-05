import React from 'react';

const Contact = () => {
  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Contact</h1>
        <form>
          <div class='form-group'>
            <label for='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              class='form-control'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
            <small id='emailHelp' class='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class='form-group' className='py-4'>
            <label for='exampleInputPassword1'>Password</label>
            <input
              type='password'
              class='form-control'
              placeholder='Password'
            />
          </div>
          <div class='form-check'>
            <input type='checkbox' class='form-check-input' />
            <label class='form-check-label' for='exampleCheck1'>
              Check me out
            </label>
          </div>
          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
