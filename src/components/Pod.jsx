import styles from "./pod.module.css"

export const Pod = ({
  title,
  description,
  color,
  devicesNeeded,
  playersNeeded,
  timeNeeded,
  onClick,
  buttonText,
  Icon,
}) => {
  return (
    <div className={styles.pod} style={{ borderColor: color, color }}>
      <div className={styles.hero} style={{ borderColor: color }}>
        {Icon && <Icon />}
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
        onClick={() => onClick(Icon)}
        style={{ background: color }}
      >
        {buttonText}
      </button>
    </div>
  )
}
