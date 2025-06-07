
const Achive = (props) => {

  return (
    <>
      
        <div className="col-6">
          <div className="achieve-item p-4  ">
            <div className="achieve-icon d-flex align-items-center justify-content-center">
              <i className={`${props.icon}`} />
            </div>
            <h3 className="mt-4 achive-tital">{props.title}</h3>
            <p>
              {props.desc}
            </p>
          </div>
        </div>

    </>
  )
}

export default Achive;