import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';
function Notfound() {
  return (
    <div>
      <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/auth" className="bg-green-900 hover:bg-green-800 w-40 text-white p-3 rounded-full disabled:bg-green-900 disabled:opacity-50">Back Home</Link>}
  />
    </div>
  )
}

export default Notfound
