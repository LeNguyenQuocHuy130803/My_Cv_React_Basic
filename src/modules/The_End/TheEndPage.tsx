export default function TheEndPage() {
  return (
    <div className='mt-6 md:mt-12'>
      {/* Separator Line */}
      <div className='border-t-2 border-gray-300 my-8'></div>

      {/* Title */}
      <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-8'>The End</h1>

      {/* Thank You Message */}
      <div className='mb-12'>
        <p className='text-gray-700 text-base md:text-lg mb-6'>
          Finally, I want to send my <span className='font-bold text-black'>gratitude</span> for taking your time to review my CV.
        </p>
        <p className='text-gray-600 italic text-base md:text-lg mb-8 md:mb-12'>
          "You're a flower on earth, let's make your life beautiful and meaningful!"
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
        <p className='text-gray-700 text-base md:text-lg'>
          I would be <span className='font-bold text-black'>very happy</span> if I could become a member and contribute my strength to your company. Thank you for considering my application!
        </p>
      </div>
    </div>
  );
}
