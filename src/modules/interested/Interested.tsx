
type Props = {}

export default function 
({}: Props) {
  return (
      <div className='mb-12'>
        <p className='text-gray-700 text-lg mb-6'>
          <span className='font-bold text-black'>Besides my work as a programmer</span>, I spend most of my free time watching movies and listening to music, and playing sports.
        </p>
        <p className='text-gray-600 italic text-lg mb-8'>
            In addition, I enjoy drinking coffee and watching movies for entertainment!!.
        </p>
        <p className='text-gray-600 italic text-lg mb-9'>
          <span className='font-bold text-black'>I love sports , especially football</span> . Let's take a look at a picture of my favorite team:
        </p>

        {/* Image */}
        <div className='mb-8'>
          <img 
            src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop' 
            alt='Working with passion'
            className='rounded-lg shadow-lg w-full max-w-2xl'
          />
        </div>

        {/* Closing Message */}
        <p className='text-gray-700 text-lg'>
          I would be <span className='font-bold text-black'>very happy</span> if I could become a member and contribute my strength to your company. Thank you for considering my application!
        </p>
      </div>
  )
}