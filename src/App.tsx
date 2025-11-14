import { BrowserRouter, Routes, Route } from "react-router-dom"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import "./App.css"
import { Sidebar } from "./components/Sidebar"
import { Home } from "./views/Home"
import { About } from "./views/About"
import { Contact } from "./views/Contact"
import { Vaults } from "./views/Vaults"
import { PenguinParadise } from "./views/PenguinParadise"
import { NeonAirways } from "./views/NeonAirways"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const updateColorScheme = () => {
      const scheme = darkMediaQuery.matches ? "dark" : "light"
      document.documentElement.classList.remove("dark", "light")
      document.documentElement.classList.add(scheme)
    }

    updateColorScheme() // initialize on mount

    darkMediaQuery.addEventListener("change", updateColorScheme)

    return () => darkMediaQuery.removeEventListener("change", updateColorScheme)
  }, [])

  return (
    <BrowserRouter>
      <SidebarProvider>
        <Sidebar />
        <SidebarInset className="bg-transparent w-full">
          <SidebarGroupLabel className="md:hidden text-3xl font-bold mx-auto my-4">
            Neon Fiction: Games
          </SidebarGroupLabel>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vault" element={<Vaults />} />
            <Route path="/penguin-paradise" element={<PenguinParadise />} />
            <Route path="/neon-airways" element={<NeonAirways />} />
          </Routes>
        </SidebarInset>
        <div className="fixed top-2 left-2 md:hidden">
          <SidebarTrigger className="w-8 h-8" />
        </div>
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App
