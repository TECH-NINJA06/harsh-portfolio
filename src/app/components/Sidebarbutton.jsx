const Sidebarbutton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)} className=' w-6 h-6 rounded-full bg-transparent border-none fixed top-3 left-3'>

    </button>
  )
}

export default Sidebarbutton