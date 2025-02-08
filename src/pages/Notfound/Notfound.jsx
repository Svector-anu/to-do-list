import React from 'react'
import { Link} from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      This  page doesnt exit. <Link to ="/">Go to Home</Link>
    </div>
  )
}

export default Notfound
