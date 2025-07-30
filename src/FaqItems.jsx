import { useState, useEffect, useRef } from 'react'
import './App.css'

const FaqItem = ({ question, answer, isVisible = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const [maxHeight, setMaxHeight] = useState('0px')

  useEffect(() => {
    if (ref.current) {
      setMaxHeight(isOpen ? `${ref.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  return (
    <div
      className={`transition-all ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDuration: '800ms',
      }}
    >
      <div
        className={`question ${isOpen ? 'bg-white' : 'bg-none'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='question-header'>
          <p>{question}</p>
          <svg
            className={`arrow-icon-3 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='6 9 12 15 18 9'></polyline>
          </svg>
        </div>

        <div
          ref={ref}
          style={{
            maxHeight,
            transition: 'max-height 0.5s ease',
            overflow: 'hidden',
          }}
          className='px-5 text-gray-600'
        >
          <p className='pt-5 pb-4 max-w-[60vw]'>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqItem
