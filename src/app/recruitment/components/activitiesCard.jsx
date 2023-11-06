import Image from "next/image";
import styles from "@/app/recruitment/styles/activitiesCard.module.scss";

const ActivitesCard = () => {
  return (
    <div className={styles["second-box-body"]}>
      <Image
        src="/recruitment/internship-activities.png"
        alt="About Image"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles["second-box-division"]}>
        <div className={styles["second-box-div-inside"]}>
          <article className={styles["second-box-article"]}>
            <h1 className={styles["second-box-article-title"]}>
              What is Internship?
            </h1>
            <p className={styles["second-box-article-p"]}>
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ActivitesCard;
