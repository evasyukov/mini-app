import { useState } from "react"
import Button from "./Button"
import AppOne from "./app/AppOne"
import TabsSection from "./TabsSection"
import HomeSection from "./HomeSection"
import AppTwo from "./app/appTwo/AppTwo"

function App() {
  const [tab, setTab] = useState("home")

  return (
    <>
      <div className="menu">
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "home" && <HomeSection />}
        {tab === 'appOne' && <AppOne/>}
        {tab === 'appOne' && <AppTwo/>}


      </div>
    </>
  )
}

export default App
