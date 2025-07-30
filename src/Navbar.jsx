import './Navbar.css'
import { useEffect, useState } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { useInViewOnce } from './ScrollObserver'

export default function Navbar () {
  const [hidden, setHidden] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isExpanded, setIsExpanded] = useState(false)

  const [ref, isVisible] = useInViewOnce()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setPrevScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY])

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setIsExpanded(false) // Collapse menu on desktop resize
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isExpanded ? 'hidden' : 'auto'
  }, [isExpanded])

  return (
    <>
      <div className={`nav-container ${hidden ? 'scrollHidden' : ''}`}>
        <div ref={ref} className={`navigation transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
          <div className='w-full flex justify-between items-center'>
            <div className='logo'>
              <img
                src='https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66face70e9cfc8ce74be2c83_Logo%20Spacekit.svg'
                alt='Logo'
                className='h-8'
              />
            </div>
            {!isMobile ? (
              <nav className='flex items-center space-x-7'>
                <a href='#home' className='navlink'>
                  <div>Home</div>
                </a>
                <a href='#product' className='navlink'>
                  <div>Products</div>
                </a>
                <a href='#faq' className='navlink'>
                  <div>FAQ</div>
                </a>
                <a href='#contact' className='navlink'>
                  <button className='contact-button'>Contact Us</button>
                </a>
              </nav>
            ) : (
              <div
                className={`btn-container ${isExpanded ? 'bg-gray-200' : ''}`}
              >
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={'text-2xl p-2'}
                >
                  <MdOutlineMenu />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`menu-container ${
          isExpanded ? 'isExpanded' : 'notExpanded'
        }`}
      >
        <div className='nav-menu'>
          <nav className='flex-col flex items-center gap-3 text-[1rem]'>
            <a href='#home' className='navlink'>
              <div>Home</div>
            </a>
            <a href='#product' className='navlink'>
              <div>Products</div>
            </a>
            <a href='#faq' className='navlink'>
              <div>FAQ</div>
            </a>
            <a href='#contact' className='navlink'>
              <button className='contact-button'>Contact Us</button>
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}
