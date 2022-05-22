import { Link } from 'react-router-dom'
import { useState } from 'react';

const ContactButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <Link to="/contact" className="flat-button">
      CONTACT ME
    </Link>
  )
}

export default ContactButton;