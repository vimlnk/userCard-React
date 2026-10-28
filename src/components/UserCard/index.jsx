import styles from "./UserCard.module.css";

function UserCard(props) {
  const {
    image,
    userName: { firstName: name, secondName: surname },
    isVerified,
    nickName,
    isMale,
    stats,
  } = props;
  const genderStyle = {
    color: isMale ? "blue" : "pink",
  };
  return (
    <article className={styles.container}>
      <img className={styles.profileImg} src={image} alt={name} />
      <h2 className={styles.userName}>
        {" "}
        {name} {surname} <span>{isVerified && "✓"}</span>
      </h2>
      <p className={styles.nick}>{nickName}</p>
      <p className={styles.isMale} style={genderStyle}>
        Стать: {isMale ? "Чоловіча" : "Жіноча"}{" "}
      </p>
      <div className={styles.state}>
        <p className={styles.post}>Постів: {stats.posts}</p>
        <p className={styles.followers}>Підписок: {stats.followers}</p>
        <p className={styles.following}>Підписників: {stats.following}</p>
      </div>
    </article>
  );
}

export default UserCard;
