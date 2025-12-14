import toast, { Toaster } from "react-hot-toast"

import { Footer } from "./components/Footer"
import { Pod } from "./components/Pod"
import logo from "./assets/logo.png"
import styles from "./app.module.css"
import penguinParadiseIcon from "./assets/penguin.svg"
import starstruckIcon from "./assets/alien.png"
import bictoryIcon from "./assets/bictory.svg"
import neonAirwaysIcon from "./assets/airways.svg"

function App() {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="Neon Fiction" className={styles.logo} />
        <div className={styles.horizontalLine} />
      </div>

      {pods.map((pod) => (
        <Pod key={pod.title} {...pod} />
      ))}

      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  )
}

export default App

const toastStyles = {
  borderRadius: "10px",
  background: "#333",
  color: "#fff",
}

const pods = [
  {
    title: "Penguin Paradise",
    description:
      "Penguin-fueled chaos on ice! Race to the finish line in this fast-paced party game. Set in the icy wonderland of Penguin Paradise, players must bet wisely, avoid going too fast, and be the first to the end. Grab you winter coat and get ready to race!",
    color: "#863bff",
    devicesNeeded: "1 master",
    playersNeeded: "2+",
    timeNeeded: "30 min",
    onClick: () => {
      toast(
        () => (
          <div style={{ textAlign: "left" }}>
            <strong>Coming soon!</strong>
            <p>Penguin Paradise is finished and pending release.</p>
          </div>
        ),
        {
          icon: <img src={penguinParadiseIcon} alt="Penguin Paradise" />,
          style: toastStyles,
        }
      )
    },
  },
  {
    title: "Vault",
    description:
      "A high-stakes dice game of risk and reward! Roll the dice to build your pot, but beware of rolling a 7! Bank your points to keep them safe in the Vault, or push your luck to maximize your score. Will you play it safe or risk it all?",
    color: "#CED314",
    devicesNeeded: "1 master",
    playersNeeded: "2+",
    timeNeeded: "10-20 min",
    onClick: () => window.open("https://vault.jamesonb.com/", "_blank"),
  },
  {
    title: "Starstruck",
    description:
      "A social strategy game of cosmic survival! Stranded in deep space, you must navigate alliances, betrayals, and unpredictable events. Will you work with your crew or blindside them to be the last one standing? Trust no one in the void—only the strongest strategist survives.",
    color: "#00E932",
    devicesNeeded: "1 master + 8 devices",
    playersNeeded: "8",
    timeNeeded: "2-3 hours",
    onClick: () => {
      toast(
        () => (
          <div style={{ textAlign: "left" }}>
            <strong>Coming soon!</strong>
            <p>Starstruck is in active development.</p>
          </div>
        ),
        {
          icon: <img src={starstruckIcon} alt="Starstruck" />,
          style: toastStyles,
        }
      )
    },
  },
  {
    title: "Bictory!",
    description: "Description of Bictory! goes here.",
    color: "#FF6400",
    devicesNeeded: "2 devices",
    playersNeeded: "2",
    timeNeeded: "20-30 min",
    onClick: () => {
      toast(
        () => (
          <div style={{ textAlign: "left" }}>
            <strong>Coming soon!</strong>
            <p>Bictory! is in research and design.</p>
          </div>
        ),
        {
          icon: <img src={bictoryIcon} alt="Bictory!" />,
          style: toastStyles,
        }
      )
    },
  },
  {
    title: "Neon Airways",
    description: "Description of Neon Airways goes here.",
    color: "#4B6DE7",
    devicesNeeded: "1 master + 3+ devices",
    playersNeeded: "3+",
    timeNeeded: "1 hour",
    onClick: () =>
      toast(
        () => (
          <div style={{ textAlign: "left" }}>
            <strong>Coming soon!</strong>
            <p>Neon Airways is one of our next ambitious projects.</p>
            <br />
            <p>Stay tuned for updates and announcements.</p>
          </div>
        ),
        {
          icon: <img src={neonAirwaysIcon} alt="Neon Airways" />,
          style: toastStyles,
        }
      ),
  },
]
