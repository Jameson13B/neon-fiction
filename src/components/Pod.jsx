import styles from "./pod.module.css"
import penguinParadiseIcon from "../assets/penguin.svg"
import vaultIcon from "../assets/vault.svg"
import starstruckIcon from "../assets/alien.png"
import bictoryIcon from "../assets/bictory.svg"
import neonAirwaysIcon from "../assets/airways.svg"

export const Pod = ({
  title,
  description,
  color,
  devicesNeeded,
  playersNeeded,
  timeNeeded,
  onClick,
}) => {
  const iconSrc = {
    "Penguin Paradise": penguinParadiseIcon,
    Vault: vaultIcon,
    Starstruck: starstruckIcon,
    "Bictory!": bictoryIcon,
    "Neon Airways": neonAirwaysIcon,
  }
  return (
    <div className={styles.pod} style={{ borderColor: color, color }}>
      <div className={styles.hero} style={{ borderColor: color }}>
        <img src={iconSrc[title]} alt={title} />
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
