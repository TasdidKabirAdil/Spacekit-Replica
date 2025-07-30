import './App.css'
import Navbar from './Navbar'
import FaqItem from './FaqItems'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'
import { useInViewOnce } from './ScrollObserver'

function App () {
  const [ref1, isVisible1] = useInViewOnce()
  const [ref2, isVisible2] = useInViewOnce()
  const [ref3, isVisible3] = useInViewOnce()
  const [ref4, isVisible4] = useInViewOnce()
  const [ref5, isVisible5] = useInViewOnce()
  const [ref6, isVisible6] = useInViewOnce()
  const [ref7, isVisible7] = useInViewOnce()
  const [ref8, isVisible8] = useInViewOnce()
  const [ref9, isVisible9] = useInViewOnce()
  const [ref10, isVisible10] = useInViewOnce()
  const [ref11, isVisible11] = useInViewOnce()
  const [ref12, isVisible12] = useInViewOnce()
  const [ref13, isVisible13] = useInViewOnce()
  const [ref14, isVisible14] = useInViewOnce()

  return (
    <>
      <Navbar />
      <div className='hero'>
        <div className='hero-bg'>
          <img
            className='w-full h-screen object-cover'
            src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66eddcbf29d527e056d8dceb_Hero%20Background-p-2000.jpg'
            alt='Hero'
          />
        </div>

        <div
          ref={ref1}
          className={`transition-all duration-1200 ease-out ${
            isVisible1
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[50%]'
          } hero-content`}
        >
          <div className='hero-button'>
            <p className='text-sm text-center font-bold'>More Products</p>
            <div className='read-more-btn'>
              <p className='text-sm'>See More</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-arrow-right arrow-icon'
              >
                <line x1='5' y1='12' x2='19' y2='12'></line>
                <polyline points='12 5 19 12 12 19'></polyline>
              </svg>
            </div>
          </div>
          <p className='responsive-text'>
            Your Next Adventure <br /> Starts With Us
          </p>
        </div>
      </div>

      <div className='mid-section'>
        <div
          ref={ref2}
          className={`mid-header transition-all duration-500 ease-out ${
            isVisible2
              ? ' opacity-100 translate-y-0'
              : ' opacity-0 translate-y-[50%]'
          }`}
        >
          <p className='responsive-text-2'>
            Explore our curated collection of high-quality products
          </p>
          <div className='max-w-130'>
            <p className='text-[1rem]'>
              Whether you're looking for a stylish new bag, a captivating book,
              or a perfect mug for your morning brew, we've got you covered.
            </p>
          </div>
        </div>

        <div className='mid-cards'>
          <div
            ref={ref3}
            className={`card-container-1 transition-all duration-800 ease-out ${
              isVisible3 ? ' opacity-100' : ' opacity-0'
            }`}
          >
            <div className='card-1'>
              <img
                src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb851d1aa09dfee6fd19e_Space%20Kit%20Images%2003.jpg'
                alt='Product 1'
                className='w-full h-full object-cover inline-block'
              />
            </div>

            <div className='card-2'>
              <a href='#product'>
                <img
                  src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb85129b701ffed0ce721_Space%20Kit%20Images%2002.jpg'
                  alt='Product 2'
                  className='w-full h-full object-cover inline-block'
                />
                <div className='card-text'>
                  <p className='text-[1.5rem] sm:text-[2.5rem]'>
                    Lightweight, durable, and perfect for any journey with our
                    premium kits
                  </p>
                  <br />
                  <div className='see-more-btn'>
                    <p className='text-sm'>See Details</p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='15'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-arrow-right arrow-icon-2'
                    >
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                      <polyline points='12 5 19 12 12 19'></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div
            ref={ref4}
            className={`card-container-2 transition-all duration-800 ease-out ${
              isVisible4 ? ' opacity-100' : ' opacity-0'
            }`}
          >
            <div className='card-2'>
              <a href='#product'>
                <img
                  src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb851a463b40d98d4a7db_Space%20Kit%20Images%2004.jpg'
                  alt='Product 2'
                  className='w-full h-full object-cover inline-block'
                />
                <div className='card-text'>
                  <p className='text-[1.5rem] sm:text-[2.5rem] max-w-120'>
                    Tools to stay organized and on top of your goals every day
                  </p>
                  <br />
                  <div className='see-more-btn'>
                    <p className='text-sm'>Plan ahead</p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='15'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-arrow-right arrow-icon-2'
                    >
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                      <polyline points='12 5 19 12 12 19'></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <div className='card-3'>
              <img
                src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb851658dc7040c4b85f8_Space%20Kit%20Images%2005-p-800.jpg'
                alt='Product 1'
                className='w-full h-full object-cover inline-block'
              />
              <div className='card-button-container'>
                <button className='card-btn'>
                  <a href='#product' className='flex items-center'>
                    <span>Learn More</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='15'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-arrow-right arrow-icon-2'
                    >
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                      <polyline points='12 5 19 12 12 19'></polyline>
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='sticky-section'>
          <div className='sticky-component'>
            <img
              src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edab9023fe28f6f10de757_Space%20Kit%20Images%2006-p-1080.jpg'
              alt='Sticky Product'
              className='w-full h-full object-cover inline-block'
            />
          </div>
          <div className='sticky-content'>
            <div className='sticky-image'>
              <img
                src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edab90cf68b972fed9b17e_Space%20Kit%20Images%2001-p-1080.jpg'
                alt='Sticky Product'
                className='w-full h-full object-cover inline-block'
              />
            </div>

            <div className='content-holder'>
              <div className='sticky-text'>
                <p className='regular-vw'>IDEAL FOR QUIET EVENINGS</p>
                <p className='heading-vw mb-5'>Mindful Living in Every Page</p>
                <p className='regular-vw'>
                  Whether you're looking to reflect on your past, gain clarity
                  on your goals, or simply find a few moments of calm in your
                  busy day, this beautifully designed guide will inspire and
                  motivate. <br /> <br />
                  Let Journey Within be the companion that helps you navigate
                  life’s ups and downs with grace and mindfulness.
                </p>
              </div>
            </div>

            <div className='sticky-small-img'>
              <img
                src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edab91bb196a91861b27de_Space%20Kit%20Images%2007.jpg'
                alt='Sticky Product'
                className='w-full h-full object-cover inline-block'
              />
            </div>

            <div className='sticky-medium-img'>
              <img
                src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edab90b7154857f336bf24_Space%20Kit%20Images%2009-p-800.jpg'
                alt='Sticky Product'
                className='w-full h-full object-cover inline-block'
              />
            </div>

            <div className='content-holder'>
              <div className='sticky-text'>
                <p className='regular-vw'>QUALITY, SIMPLICITY, AND COMFORT</p>
                <p className='heading-vw mb-5'>
                  Simplicity Meets Sophistication
                </p>
                <p className='regular-vw'>
                  Designed for those who appreciate the finer things in life,
                  this mug combines functionality with sleek, modern design. Its
                  smooth ceramic surface is easy to clean and resistant to
                  stains, while the comfortable handle ensures a perfect grip
                  every time. <br /> <br />
                  Whether you're enjoying a quiet morning at home or a quick
                  break at the office, the Morning Brew Mug adds a touch of
                  sophistication to your daily routine.
                </p>
              </div>
            </div>

            <div className='sticky-small-img mb-[10vw]'>
              <img
                src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edab90c837bfdd2e6f4c36_Space%20Kit%20Images%2008.jpg'
                alt='Sticky Product'
                className='w-full h-full object-cover inline-block'
              />
            </div>
          </div>
        </div>

        <div className='shop-section'>
          <div
            ref={ref5}
            className={`shop-header transition-all duration-500 ease-out ${
              isVisible5
                ? ' opacity-100 translate-y-0'
                : ' opacity-0 translate-y-[100%]'
            }`}
          >
            <div className='text-center md:text-left'>
              <p className='text-[1.7rem] font-[500] mb-2'>OUR PRODUCTS</p>
              <p className='text-[1rem] text-gray-400'>All collections</p>
            </div>
            <button className='shop-btn'>Shop Now</button>
          </div>

          <div className='shop-content'>
            <div className='product'>
              <a href='#'>
                <div className='overflow-hidden'>
                  <img
                    src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb302e/66edac916430596b601f9fc1_Space%20Kit%20Images%2010.jpg'
                    alt='Product 1'
                    className='w-full object-cover inline-block'
                  />
                </div>
                <div className='product-desc'>
                  <div className='flex flex-col justify-center text-[.9rem]'>
                    <p className='font-medium'>EXPLORE BAGS</p>
                    <p>WHITE/BLACK</p>
                  </div>
                  <p className='flex block items-center'>$26</p>
                </div>
              </a>
            </div>

            <div className='product'>
              <a href='#'>
                <div className='overflow-hidden'>
                  <img
                    src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb302e/66edac98906bb4dacbd44651_Space%20Kit%20Images%2011.jpg'
                    alt='Product 2'
                    className='w-full h-full object-cover inline-block'
                  />
                </div>
                <div className='product-desc'>
                  <div className='flex flex-col justify-center text-[.9rem]'>
                    <p className='font-medium'>JOHNNY WITHIN BOOK</p>
                    <p>WHITE/ORANGE</p>
                  </div>
                  <p className='flex block items-center'>$12</p>
                </div>
              </a>
            </div>

            <div className='product'>
              <a href='#'>
                <div className='overflow-hidden'>
                  <img
                    src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb302e/66edaca06430596b601fad11_Space%20Kit%20Images%2012.jpg'
                    alt='Product 3'
                    className='w-full h-full object-cover inline-block'
                  />
                </div>
                <div className='product-desc'>
                  <div className='flex flex-col justify-center text-[.9rem]'>
                    <p className='font-medium'>MORNING BREW MUG</p>
                    <p>WHITE/ORANGE</p>
                  </div>
                  <p className='flex block items-center'>$32</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className='faq-section'>
          <div className='faq-container'>
            <h1
              ref={ref6}
              className={`transition-all duration-1200 ease-out ${
                isVisible6
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[50%]'
              } faq-header`}
            >
              Frequently asked questions
            </h1>
            <div className='faq-content'>
              <div ref={ref7}>
                <FaqItem
                  question="What's the quality of the product?"
                  answer='We prioritize quality in every item we sell. Our products are designed to be durable, functional, and stylish.'
                  isVisible={isVisible7}
                />
              </div>

              <div ref={ref8}>
                <FaqItem
                  question='Do you offer refunds?'
                  answer="Yes! If you're not 100% satisfied with your purchase, we offer a 30-day return policy on all products."
                  isVisible={isVisible8}
                />
              </div>

              <div ref={ref9}>
                <FaqItem
                  question='Do you ship internationally?'
                  answer='Absolutely. We offer worldwide shipping, so you can enjoy our products no matter where you are.'
                  isVisible={isVisible9}
                />
              </div>

              <div ref={ref10}>
                <FaqItem
                  question='How long will my order take to arrive?'
                  answer='Shipping times vary by location, but we aim to deliver within 5-10 business days for most orders.'
                  isVisible={isVisible10}
                />
              </div>

              <div ref={ref11}>
                <FaqItem
                  question='Are your products environmentally friendly?'
                  answer='We are committed to sustainability and use eco-friendly materials whenever possible in the production and packaging of our products.'
                  isVisible={isVisible11}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='px-5 lg:px-[2.5rem]'>
          <div className='flex flex-col justify-center items-center'>
            <img
              ref={ref12}
              src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66face70e9cfc8ce74be2c83_Logo%20Spacekit.svg'
              alt='Logo'
              className={`w-[10rem] mb-5 transition-all ease-out duration-800 ${
                isVisible12
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 -translate-y-12 scale-80'
              }`}
            />

            <div
              ref={ref13}
              className={`grid grid-cols-2 sm:grid-cols-4 max-w-[250px] sm:max-w-200 w-full my-10
              transition-all ease-out duration-800 ${
                isVisible13
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[50%]'
              }`}
            >
              <div className='flex flex-col items-center text-center gap-5 my-5'>
                <p className='text-[1.5rem] font-[400]'>Explore</p>
                <a
                  href='#'
                  className='text-gray-500 hover:-translate-y-[3px] hover:text-gray-900 transition-all duration-300'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:-translate-y-[3px] hover:text-gray-900 transition-all duration-300'
                >
                  Products
                </a>
              </div>
              <div className='flex flex-col items-center text-center gap-5 my-5'>
                <p className='text-[1.5rem] font-[400]'>Support</p>
                <a
                  href='#'
                  className='text-gray-500 hover:-translate-y-[3px] hover:text-gray-900 transition-all duration-300'
                >
                  FAQ
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:-translate-y-[3px] hover:text-gray-900 transition-all duration-300'
                >
                  Contact
                </a>
              </div>
              <div className='flex flex-col items-center text-center gap-5 my-5'>
                <p className='text-[1.5rem] font-[400]'>Others</p>
                <a
                  href='#'
                  className='text-gray-500 hover:-translate-y-[3px] hover:text-gray-900 transition-all duration-300'
                >
                  Style Guide
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:-translate-y-[3px] hover:text-gray-900 transition-all duration-300'
                >
                  Changelog
                </a>
              </div>
              <div className='flex flex-col items-center text-center gap-5 my-5'>
                <p className='text-[1.5rem] font-[400]'>Utility</p>
                <a
                  href='#'
                  className='text-gray-500 hover:-translate-y-[3px] hover:text-gray-900 transition-all duration-300'
                >
                  Instruction
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:-translate-y-[3px] hover:text-gray-900 transition-all duration-300'
                >
                  License
                </a>
              </div>
            </div>

            <div
              ref={ref14}
              className={`flex gap-6 mx-auto mb-20 max-w-fit w-full transition-all ease-out duration-800 ${
                isVisible14
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-full'
              }`}
            >
              <a
                href='#'
                className='w-10 h-10 flex justify-center items-center text-black hover:bg-[#e28e2a] rounded-[50%] hover:translate-y-[-3px] transition-all duration-300'
              >
                <FaTwitter size={17} />
              </a>
              <a
                href='#'
                className='w-10 h-10 flex justify-center items-center text-black hover:bg-[#e28e2a] rounded-[50%] hover:translate-y-[-3px] transition-all duration-300'
              >
                <FaFacebookF size={17} />
              </a>
              <a
                href='#'
                className='w-10 h-10 flex justify-center items-center text-black hover:bg-[#e28e2a] rounded-[50%] hover:translate-y-[-3px] transition-all duration-300'
              >
                <FaInstagram size={17} />
              </a>
              <a
                href='#'
                className='w-10 h-10 flex justify-center items-center text-black hover:bg-[#e28e2a] rounded-[50%] hover:translate-y-[-3px] transition-all duration-300'
              >
                <FaGithub size={17} />
              </a>
            </div>

            <div className='flex flex-col mx-auto my-10'>
              <div className='flex justify-center items-center text-center'>
                <a
                  href='#'
                  className='text-gray-500 text-[1rem] px-5 hover:text-black hover:translate-y-[-3px] transition-all duration-300'
                >
                  License
                </a>
                <div className='w-[1px] h-4 bg-gray-500 mx-2' />
                <a
                  href='#'
                  className='text-gray-500 text-[1rem] px-5 hover:text-black hover:translate-y-[-3px] transition-all duration-300'
                >
                  Style Guide
                </a>
                <div className='w-[1px] h-4 bg-gray-500 mx-2' />
                <a
                  href='#'
                  className='text-gray-500 text-[1rem] px-5 hover:text-black hover:translate-y-[-3px] transition-all duration-300'
                >
                  Customize
                </a>
              </div>
              <div className='flex flex-col sm:flex-row justify-center items-center text-center'>
                <p className='text-gray-500 text-[1rem] px-3 mt-2'>
                  Copyright ©
                </p>
                <a
                  href='#'
                  className='text-gray-500 text-[1rem] px-3 mt-2 hover:opacity-70 transition-all duration-300'
                >
                  Designed & Developed by&nbsp;
                  <span className='text-black'>Lucas Gusso</span>
                </a>
                <a
                  href='#'
                  className='text-gray-500 text-[1rem] px-3 mt-2 hover:opacity-70 transition-all duration-300'
                >
                  Powered by&nbsp;
                  <span className='text-black'>Webflow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
