
const Achive = (props) => {

  return (
    <>
      <div className='achive-content '>
                <div className="row">
                  <div className="col-sm-6  ">
                    <div className="achieve-item h-100 p-4 rounded-2 bg-white">
                      <div className="achieve-icon   d-flex align-items-center justify-content-center">
                        <i className={`${props.icon}`} />
                      </div>
                      <h3 className="mt-4 achive-tital">{props.title}</h3>
                      <p>
                        {props.desc}
                     </p>
                 </div>
                </div>
            </div>
        </div>        
    </>
  )
}

export default Achive;