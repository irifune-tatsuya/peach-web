import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>404</dt>
        <dd className={styles.text}>ページが見つかりませんでした</dd>
      </dl>
    </div>
  );
};

export default NotFound;
