import * as React from 'react'; 


const Fotter = () => {
    return (
        <div
        style={{
          marginTop: `2rem`,
          position : 'absolute',
          left: 0,
          width: '100%',
          color: 'black',
          textAlign: 'center',
       
        }}
      >
        © {new Date().getFullYear()}, Built with love by
        {` `}
        <a href="mailto:mehdilebenz@gmail.com">Mehdi Benzarti</a>
      </div>
    )
}

export default Fotter;