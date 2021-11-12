import * as React from 'react';
import {
  FaGithub, FaAddressCard, FaMedium, FaLinkedin,
} from 'react-icons/fa';

 function Accounts () {
  return (
    <nav className="navItems">
      <div className="level-item has-text-centered">
        <div>
          <a href="https://github.com/MehdiLebenz" className="">
            <FaGithub style={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '32px',
              color: 'black',
            }}
            />
          </a>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a href="mailto:mehdilebenz@gmail.com" className="">
            <FaAddressCard style={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '32px',
              color: 'black',
            }}
            />
          </a>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a href="https://medium.com/@mehdilebenz" className="">
            {' '}
            <FaMedium style={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '32px',
              color: 'black',
            }}
            />
            {' '}
          </a>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a
            href="https://www.linkedin.com/in/mehdi-benzarti-307bb2121"
            className=""
          >
            <FaLinkedin style={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '32px',
              color: 'black',
            }}
            />
          </a>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div />
      </div>
    </nav>
  );
};
export default Accounts;
