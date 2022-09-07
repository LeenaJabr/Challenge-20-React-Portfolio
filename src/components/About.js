import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Full Stack Web Developer, Biomedical Engineer, and PMP Certified with 3+ years of hands-on experience designing, developing, and implementing applications, solutions, and pharmaceutical operations using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-Stack Developer.
                            </p>
                            <p className='slide-in-bottom'>
                            I am currently in my final week of earning my certificate in Full Stack Web Development from the University of Texas- Austin. As a Biomedical Engineer transitioning towards Full Stack Web Development, teamwork, communication, trust, support, leadership, and a positive fast-paced working environment – all equally important have heavily impacted my journey and transition towards a well-rounded developer.<br></br>
                                
                            </p>
                            <p className='slide-in-bottom'>
                                <br></br>
                                The technology I've worked on : <span className="text-red ls-2"> HTML 5 | CSS3 | JavaScript | jQuery | Bootstrap | Express.js | React.js | Node.js | Database Theory | MongoDB | MySQL | NoSQL | SQL | Command Line | Git | Heroku | Computer Science | PMP Certified </span>
                            </p>
                            <p className='slide-in-bottom'>
                                Graduation Date: Sep 2022
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About