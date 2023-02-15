import NewChat from "./NewChat"

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
            {/* NewChat */}
            <NewChat/>
            <div>
                {/* {modelSelection} */}
            </div>
            {/* Map through the chatRows */}
        </div>
      </div>
    </div>
  )
}

export default SideBar
