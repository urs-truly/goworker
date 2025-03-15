import styles from './Button.module.css'
 
export default function Button({children}:{children:React.ReactNode}) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      {children}
    </button>
  )
}