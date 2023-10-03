import { useState, useEffect } from 'react'
import Rating from '../Rating'
import StarIcon from '../svg/StarIcon.tsx'
import IllustrationThankYou from '../svg/IllustrationThankYou.tsx'

type IRatingStars = JSX.Element[];

export default function InterativeRating() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [rating, setRating] = useState<IRatingStars>([]);
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    setRating([1,2,3,4,5].map(item => {
      if (currentRating === item) {
        return <Rating key={item} rating={item} setRating={setCurrentRating} currentRating/> 
      }
      return <Rating key={item} rating={item} setRating={setCurrentRating}/> 
    }))
  }, [currentRating])

  return (
    <div className="w-[22rem] h-[24rem] px-7 py-5 rounded-2xl bg-card">
      { !isSubmited
        ? <>
          <div className="w-12 h-12 flex justify-center items-center rounded-full bg-rating/10"><StarIcon /></div>
          <div className="py-6">
            <h1 className="text-white font-content font-bold text-2xl pb-4">How did we do?</h1>
            <p className="font-content text-rating text-sm">
              Please let us know how we did with your support request. All feedback is appreciated 
              to help us improve our offering!
            </p>
          </div>
          <div className="flex justify-between items-center">
            { rating }
          </div>
          <button
            onClick={() => setIsSubmited(true)}
            className="
              w-full h-12 mt-8 rounded-full uppercase text-white font-bold tracking-wide bg-button
              hover:bg-white hover:text-button
            ">
            submit
          </button>
        </>
        : <>
          <div className="flex justify-center my-6"><IllustrationThankYou /></div>
          <div className="flex justify-center">
            <p className="inline bg-rating/10 text-center text-button rounded-full py-2 px-3">You selected {currentRating} out of 5</p>
          </div>
          <div>
            <h2 className="text-center text-white font-bold text-2xl mt-6 mb-3">Thank you!</h2>
            <p className="text-rating text-sm text-center">
              We appreciate you taking the time to give a rating. If you ever need more support, 
              don’t hesitate to get in touch!
            </p>
          </div>
          
        </>
      }
    </div>
  )
}