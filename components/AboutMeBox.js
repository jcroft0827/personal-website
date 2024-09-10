export default function AboutMeBox({ children }) {
  return (
    <div 
        className=" flex flex-col items-center justify-center text-center w-full h-56 p-5 rounded-md shadow-lg md:w-80 md:h-80"
    >
        {children}
    </div>
  )
}
