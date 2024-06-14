import React from 'react'
import './App.css'

// Facebook Icon 
import { FaFacebookF } from "react-icons/fa";

// Twitter icon
import { FaXTwitter } from "react-icons/fa6";

// Instagram icon
import { FaInstagram } from "react-icons/fa";

// Linkedin icon
import { FaLinkedinIn } from "react-icons/fa";

// YouTube icon
import { FiYoutube } from "react-icons/fi";



const App = () => {

  return (


    <ul className="wrapper">

      {/* Facebook  */}

      <li className="icon facebook">

        <span className="tooltip">Facebook</span>

        <FaFacebookF />

      </li>


      {/* Twitter  */}

      <li class="icon twitter">

        <span className="tooltip">Twitter</span>

        <FaXTwitter />

      </li>


      {/* Instagram  */}
      <li className="icon instagram">

        <span className="tooltip">Instagram</span>

        <FaInstagram />

      </li>

    {/* LinkedIn */}
    <li className="icon linkedin">

    <span className="tooltip">Linkedin</span>

    <FaLinkedinIn/>

    </li>


    {/* YouTube */}
    <li className="icon youtube">

    <span className="tooltip">YouTube</span>
    
    <FiYoutube />

    </li>

    </ul>


  )
}

export default App