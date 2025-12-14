import styles from "./pod.module.css"
import PenguinIcon from "../assets/penguin.svg?react"
import VaultIcon from "../assets/vault.svg?react"
import StarstruckIcon from "../assets/alien.png"
import BictoryIcon from "../assets/bictory.svg?react"
import NeonAirwaysIcon from "../assets/airways.svg?react"

export const Pod = ({
  title,
  description,
  color,
  devicesNeeded,
  playersNeeded,
  timeNeeded,
  onClick,
}) => {
  const Icon = {
    "Penguin Paradise": PenguinIcon,
    Vault: VaultIcon,
    Starstruck: () => <img src={StarstruckIcon} alt="Starstruck" />,
    "Bictory!": BictoryIcon,
    "Neon Airways": NeonAirwaysIcon,
  }
  const IconComponent = Icon[title]
  return (
    <div className={styles.pod} style={{ borderColor: color, color }}>
      <div className={styles.hero} style={{ borderColor: color }}>
        <IconComponent />
      </div>

      <h3 className={styles.title} style={{ borderColor: color }}>
        {title}
      </h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.info}>
        <div className={styles.infoItem} style={{ borderColor: color }}>
          <p className={styles.infoItemText}>Devices</p>
          <p className={styles.infoItemText}>{devicesNeeded}</p>
        </div>
        <div className={styles.infoItem} style={{ borderColor: color }}>
          <p className={styles.infoItemText}>Players</p>
          <p className={styles.infoItemText}>{playersNeeded}</p>
        </div>
        <div className={styles.infoItem} style={{ borderColor: color }}>
          <p className={styles.infoItemText}>Time</p>
          <p className={styles.infoItemText}>{timeNeeded}</p>
        </div>
      </div>

      <button
        className={styles.button}
        onClick={onClick}
        style={{ background: color }}
      >
        Play
      </button>
    </div>
  )
}
