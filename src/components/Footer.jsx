import styles from "./footer.module.css"

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3 className={styles.title}>About us</h3>
      <p className={styles.description}>
        Neon Fiction is cooked up by two Salt Lake City brothers—lifelong
        gamers, one slinging code as a software engineer, the other crafting
        pixel-perfect worlds as a design engineer.
        <br />
        <br />
        It all started with Vault, our breakout banger that got everyone hooked.
        Now we're dropping Penguin Paradise (get ready for penguin-fueled chaos
        on ice!), going full throttle on Starstruck (trust us, it's going to be
        galactic), plotting epic wins in Bictory!, and conquering the skies with
        Neon Airways. We live for those electric multiplayer moments that turn
        regular nights into absolute legends.
        <br />
        <br />
        Oh, and we're secretly building a tabletop projector that beams the game
        right onto your table for mind-melting hybrid magic. Game night just
        leveled up—come play!
      </p>
    </div>
  )
}
