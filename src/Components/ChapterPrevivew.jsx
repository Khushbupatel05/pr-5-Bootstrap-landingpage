
import Sectionheading from './Sectionheading';


const ChapterPrevivew = () => {
    const title = "Chapter Preview";
    const des = "Read some chapter free.";
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className=" col-sm-12">
                        <div className="text-center ">
                            <Sectionheading title={title} des={des} />
                        </div>
                    </div>
                    <div className="row gap-5">
                        <div className='d-flex'>
                            <div className="">
                                <div className='preview'>
                                    <img src="./image/1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className='preview'>
                                    <img src="./image/2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className='preview'>
                                    <img src="./image/3.jpg" alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className='preview'>
                                    <img src="./image/4.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ChapterPrevivew;