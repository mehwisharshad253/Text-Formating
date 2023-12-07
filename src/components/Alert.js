import React from 'react'

function Alert(props) {

    const capitlize=(word)=>{
        let newtext=word.toLowerCase();
       return  newtext.charAt(0).toUpperCase() + newtext.slice(1);
    }

  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitlize(props.alert.type)}:</strong>{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert