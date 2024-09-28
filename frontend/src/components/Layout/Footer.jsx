import { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Sundaram.</div>
<div>
  <Link to={'https://github.com/sundaram-rai'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://www.linkedin.com/in/sundaram-rai-a9b195222'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
</div>
      
    </footer>
  )
}

export default Footer