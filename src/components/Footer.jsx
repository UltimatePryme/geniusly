import React from 'react'

function Footer() {
  return (
    <section className=' bg-cool-purple'>
        <div className=' container mx-auto sm:mx-auto grid sm:grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 px-40 items-top py-36'>
            <div >
                <h2 className=' text-2xl font-poppins font-bold pb-5'>Support</h2>
                <p>
                    Help center<br/>
                    Pricing<br/>
                    Education.com For Schools<br/>
                    Get a Quote<br/>
                    Give Gift<br/>
                    Redeem Gift<br/>
                    Site Map<br/>
                    Contact Us<br/>
                </p>            
            </div>
            <div>
                <h2 className=' text-2xl font-poppins font-bold pb-5'>Connect</h2>
                <p>
                    Blog<br/>
                    Tell us what you think
                </p>
            </div>
            <div>
                <h2 className=' text-2xl font-poppins font-bold pb-5'>About</h2>
                <p>
                    Company<br/>
                    Careers<br/>
                    Press<br/>
                    Reviews<br/>
                    Privacy Policy<br/>
                    COPPA Privacy Policy<br/>
                    Terms of Service
                </p>
            </div>
        </div>
    </section>
  )
}

export default Footer