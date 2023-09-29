
import { Link, useRouteError } from 'react-router-dom';

import errorImag from '../../../public/Error/error.gif'

const ErrorPages = () => {
    
    const { error} = useRouteError()
    console.log(error.message)
    
    return (
        <section className='h-screen text-gray-900 bg-gray-100 '>
        <div className='px-5 mx-auto my-8 '>
          <div className=''>
          <img className='w-1/2 mx-auto h-1/5 rounded-xl'   src={errorImag} alt="" />
          </div>
          
          <div className='absolute text-center bottom-1 left-96'>
            <p className='mb-8 text-2xl font-semibold md:text-3xl'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg'
            >
              Go Home
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPages;