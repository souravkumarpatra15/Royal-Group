import styles from './StatCard.module.css';

/**
 * StatCard Props:
 * - value: string  e.g. "2M+"
 * - label: string  e.g. "Sq.Ft. Developed"
 */
export default function StatCard({ value, label }) {
  return (
    <div className={styles.card}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
