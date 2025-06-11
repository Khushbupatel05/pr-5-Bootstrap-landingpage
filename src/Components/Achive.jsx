
  const Achive = ({ icon, title, desc }) => {

    return (
      <>       
          <div className="col-sm-6 ">
            <div className="achieve-item p-4">
              <div className="achieve-icon d-flex align-items-center justify-content-center">
                <i className={icon}></i>
              </div>
              <h3 className="py-4 achive-tital">{title}</h3>
              <p className="description">
                {desc}  
              </p>
            </div>
          </div>

      </>
    )
  }

  export default Achive;