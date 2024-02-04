import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className='lg:col-span-7 place-self-center'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                    Hello, I'm Zuriel
                </h1>
                <p className='text-[#ADB7BE] text-lg lg:text-lg'>
                    I'm a full-stack developer with a 
                    passion for building beautiful and 
                    functional web applications.
                </p>
            </div>
            <div className='lg:col-span-5'>

            </div>
        </div>
    </section>
  );
}

export default HeroSection
