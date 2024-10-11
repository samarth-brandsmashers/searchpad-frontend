import { Container, Input } from 'postcss';
import styles from '../../../styles/GaphicsDesign/GraphicsTool.module.css';

const GraphicsTool = () => {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.container}>
        <header className={styles.header}>
        <h1 className={styles.title}>
          Design engaging presentations effortlessly with AI
        </h1>
      </header>
        
        <h1 className={styles.prompt}>Prompt</h1>
        <div className={styles.promtSection}>
          <p>A modern slide highlighting the company's mission, vision, and core values, featuring clean icons and bold headings.</p>
        </div>

        <div className={styles.regenerate}>
          <p className={styles.para}>Regenerate copy</p>
        </div>
  
        </div>
      </div>
    )
}
export default  GraphicsTool;