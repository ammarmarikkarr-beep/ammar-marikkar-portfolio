import './About.css'

export default function About() {

  return (

    <section className="about" id="about">

      <div className="container">

        <h2 className="section-title">
          About Me
        </h2>


        <div className="title-line"></div>



        <div className="about-container">


          {/* LEFT SIDE */}

          <div className="about-left">


            {/* Journey */}

            <div className="about-card">

              <h3>
                <span className="about-icon">💡</span>
                My Journey
              </h3>


              <p>
                With over 3 years of experience in digital marketing and content creation,
                I help brands build their online presence through creative strategies,
                data-driven campaigns, and engaging content.

                <br /><br />

                From developing brand identities to executing digital campaigns,
                I combine creativity and analytics to deliver measurable results.
              </p>

            </div>





            {/* Values */}

            <div className="about-card">

              <h3>
                <span className="about-icon">♥</span>
                My Values
              </h3>


              <p>
                I believe in creativity, consistency, and data-driven decision making.
                Every project is an opportunity to create meaningful connections
                between brands and audiences while delivering real business growth.
              </p>


            </div>







            {/* Specialties */}

            <div className="about-card">


              <h3>
                <span className="about-icon">★</span>
                My Specialties
              </h3>



              <ul>

                <li>
                  Search Engine Optimization (SEO)
                </li>


                <li>
                  Social Media Marketing & Strategy
                </li>


                <li>
                  Content Creation & Marketing
                </li>


                <li>
                  Digital Advertising (Google Ads & Meta Ads)
                </li>


                <li>
                  Brand Strategy
                </li>


                <li>
                  Analytics & Performance Reporting
                </li>


              </ul>


            </div>



          </div>







          {/* RIGHT SIDE */}


          <div className="stats-card">


            <div className="stat">

              <h2>
                15+
              </h2>

              <p>
                Projects Completed
              </p>

            </div>





            <div className="stat">

              <h2>
                10+
              </h2>

              <p>
                Happy Clients
              </p>

            </div>






            <div className="stat">

              <h2>
                3+
              </h2>

              <p>
                Years Experience
              </p>

            </div>






            <div className="stat">

              <h2>
                70%
              </h2>

              <p>
                Average Growth
              </p>

            </div>



          </div>



        </div>


      </div>


    </section>

  )

}
