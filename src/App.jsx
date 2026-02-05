import toast, { Toaster } from "react-hot-toast"

import { Footer } from "./components/Footer"
import { Pod } from "./components/Pod"
import logo from "./assets/logo.png"
import styles from "./app.module.css"
import neonHr from "./assets/hr.svg"
import PenguinIcon from "./assets/penguin.svg?react"
import VaultIcon from "./assets/vault.svg?react"
import FortunePaiGowIcon from "./assets/paigow.svg?react"
import StarstruckIcon from "./assets/alien.png"
import BictoryIcon from "./assets/bictory.svg?react"
import NeonAirwaysIcon from "./assets/airways.svg?react"
import HipsterHeightsIcon from "./assets/hipster.png"

const Icon = {
  "Penguin Paradise": PenguinIcon,
  Vault: VaultIcon,
  "Fortune Pai Gow": FortunePaiGowIcon,
  Starstruck: () => <img src={StarstruckIcon} alt="Starstruck" />,
  "Bictory!": BictoryIcon,
  "Neon Airways": NeonAirwaysIcon,
  "Hipster Heights": () => (
    <img src={HipsterHeightsIcon} alt="Hipster Heights" />
  ),
}

function App() {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="Neon Fiction" className={styles.logo} />
        <div className={styles.horizontalLine} />
      </div>

      <div className={styles.podsContainer}>
        {pods
          .filter((pod) => pod.status !== "coming soon")
          .map((pod) => (
            <Pod key={pod.title} {...pod} Icon={Icon[pod.title]} />
          ))}
      </div>

      <img src={neonHr} alt="Neon Fiction" className={styles.neonHr} />

      <div className={styles.podsContainer}>
        {pods
          .filter((pod) => pod.status === "coming soon")
          .map((pod) => (
            <Pod key={pod.title} {...pod} Icon={Icon[pod.title]} />
          ))}
      </div>

      <Footer />
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Neon Fiction Games
      </footer>
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
    title: "Vault",
    description:
      "A high-stakes dice game of risk and reward! Roll the dice to build your pot, but beware of rolling a 7! Bank your points to keep them safe in the Vault, or push your luck to maximize your score. Will you play it safe or risk it all?",
    color: "#CED314",
    devicesNeeded: "1 master",
    playersNeeded: "2+",
    timeNeeded: "10-20 min",
    onClick: () => window.open("https://vault.neonfiction.games/", "_blank"),
    status: "live",
  },
  {
    title: "Fortune Pai Gow",
    description:
      "Fortune Pai Gow Poker blends the ancient Chinese game of Pai Gow with classic poker action. The real thrill comes from the optional Fortune Bonus side bet, which pays out big based on your best seven-card poker ranking, adding exciting high-payout potential to this relaxed casino favorite.",
    color: "#EE7631",
    devicesNeeded: "1 master & 1+ devices",
    playersNeeded: "1+",
    timeNeeded: "30+ min",
    onClick: () => window.open("https://paigow.neonfiction.games/", "_blank"),
    status: "beta",
  },
  {
    title: "Penguin Paradise",
    description:
      "Penguin-fueled chaos on ice! Race to the finish line in this fast-paced party game. Set in the icy wonderland of Penguin Paradise, players must bet wisely, avoid going too fast, and be the first to the end. Grab you winter coat and get ready to race!",
    color: "#863bff",
    devicesNeeded: "1 master",
    playersNeeded: "2+",
    timeNeeded: "30 min",
    onClick: () => window.open("https://ppracing.neonfiction.games/", "_blank"),
    status: "beta",
  },
  {
    title: "Starstruck",
    description:
      "A social strategy game of cosmic survival! Stranded in deep space, you must navigate alliances, betrayals, and unpredictable events. Will you work with your crew or blindside them to be the last one standing? Trust no one in the void—only the strongest strategist survives.",
    color: "#00E932",
    devicesNeeded: "1 master & 8 devices",
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
          icon: <img src={StarstruckIcon} alt="Starstruck" />,
          style: toastStyles,
        },
      )
    },
    status: "coming soon",
  },
  {
    title: "Bictory!",
    description:
      "A tactical duel of hidden ranks and battlefield strategy! Command your forces in a head-to-head clash where information is your greatest weapon. Bluff, deduce, and outmaneuver your opponent to capture their flag. Will you lead your army to glory?",
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
          icon: <BictoryIcon />,
          style: toastStyles,
        },
      )
    },
    status: "coming soon",
  },
  {
    title: "Hipster Heights",
    description:
      "A fast-paced card game of urban evolution and ruthless real estate. Collect properties, charge rent, and gentrify neighborhoods with artisanal coffee shops and vintage boutiques. Steal sets, force deals, and become the ultimate developer in this satirical race to renovate the block.",
    color: "#F036E6",
    devicesNeeded: "1 master & 2+ devices",
    playersNeeded: "2+",
    timeNeeded: "15 min",
    onClick: () => {
      toast(
        () => (
          <div style={{ textAlign: "left" }}>
            <strong>Coming soon!</strong>
            <p>
              Hipster Heights is getting some final touches. Beta version coming
              soon!
            </p>
          </div>
        ),
        {
          icon: <img src={HipsterHeightsIcon} alt="Hipster Heights" />,
          style: toastStyles,
        },
      )
    },
    status: "coming soon",
  },
  {
    title: "Neon Airways",
    description:
      "Take to the skies as an airline tycoon! Build your global network across a shifting map of colorful regions. Trade assets, forge alliances, and manipulate the Sky Market Index. Adapt to the changing world and outmaneuver your rivals to become the ultimate ruler of the clouds.",
    color: "#4B6DE7",
    devicesNeeded: "1 master & 3+ devices",
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
          icon: <NeonAirwaysIcon />,
          style: toastStyles,
        },
      ),
    status: "coming soon",
  },
]
