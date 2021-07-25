export default function WorkList({ children }) {
  return (
    <div className='w-full lg:w-4/5 mx-auto flex flex-col mt-12 relative mb-8'>
      <span class="absolute inset-y-0 left-1/3 ml-10 w-0.5 bg-hunterGreen-dark hidden md:block"></span>
      {children}
    </div>
  )
}
