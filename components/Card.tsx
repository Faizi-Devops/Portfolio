import Image from 'next/image';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

const Card = () => {
  return (
    <div>
      <div className="card pt-4" style={{ width: "18rem", backgroundColor: "lightblue", border: "none" }}>
        <div className='text-center'>
          <Image
            src='/Faizan.png'
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>

        <div className="card-body">
          <h2 className="card-title text-center chagingfont">Faizan Ali</h2>
          <p className="card-text text-center pt-2">MERN Stack | React, Next JS, Node JS, Javascript Developer</p>
          <div className='text-center'>
            <span>
            <a href="https://www.facebook.com/profile.php?id=100055953143294" target="_blank" rel="noopener noreferrer">
            <FaFacebookF style={{ marginRight: "20px" }} />
              </a>
              
              <FaTwitter style={{ marginRight: "20px" }} />
              <a href="https://www.linkedin.com/in/faizan-ali-29b61b243/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn style={{ marginRight: "20px" }} />
              </a>
              <a href="https://github.com/Faizi-Devops" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ marginRight: "20px" }} />
              </a>
              
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
