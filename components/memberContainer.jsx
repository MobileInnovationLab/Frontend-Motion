import Image from "next/image"
import Link from "next/link"
import Skeleton from 'react-loading-skeleton';

import styles from '../styles/components/memberContainer.module.scss'

import { Tooltip, ChakraProvider } from "@chakra-ui/react";

export default function memberContainer({
  name,
  division,
  linkedin,
  facebook,
  insta,
  image,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={image}
          alt="member photo"
          layout="fill"
          objectFit="cover"
          className={styles["next-image"]}
        />
      </div>
      <h3>{name || <Skeleton width={150} />}</h3>
      <p>{division || <Skeleton width={100} />}</p>
      <div className={styles.social}>
        <a href={linkedin || ""} rel="noreferrer" target="_blank">
          <div className={styles.item}>
            <Tooltip style={{ fontFamily: "sans-serif" }} label="Linkedin">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.99999 0.360107C4.22819 0.360107 0.359985 4.22831 0.359985 9.00011C0.359985 13.7719 4.22819 17.6401 8.99999 17.6401C13.7718 17.6401 17.64 13.7719 17.64 9.00011C17.64 4.22831 13.7718 0.360107 8.99999 0.360107ZM6.88498 12.5812H5.13539V6.95081H6.88498V12.5812ZM5.99938 6.25961C5.44678 6.25961 5.08949 5.86811 5.08949 5.38391C5.08949 4.88981 5.45759 4.51001 6.02188 4.51001C6.58618 4.51001 6.93179 4.88981 6.94259 5.38391C6.94259 5.86811 6.58618 6.25961 5.99938 6.25961ZM13.275 12.5812H11.5254V9.46091C11.5254 8.73461 11.2716 8.24141 10.6389 8.24141C10.1556 8.24141 9.86849 8.57531 9.74159 8.89661C9.69479 9.01091 9.68309 9.17291 9.68309 9.33401V12.5803H7.93259V8.74631C7.93259 8.04341 7.91009 7.45571 7.88668 6.94991H9.40679L9.48689 7.73201H9.52199C9.75239 7.36481 10.3167 6.82301 11.2608 6.82301C12.4119 6.82301 13.275 7.59431 13.275 9.25211V12.5812Z" />
              </svg>
            </Tooltip>
          </div>
        </a>
        <a href={facebook || ""} rel="noreferrer" target="_blank">
          <div className={styles.item}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM9 4.5C11.475 4.5 13.5 6.525 13.5 9C13.5 11.25 11.8688 13.1625 9.61875 13.5V10.2937H10.6875L10.9125 9H9.675V8.15625C9.675 7.81875 9.84375 7.48125 10.4062 7.48125H10.9688V6.35625C10.9688 6.35625 10.4625 6.24375 9.95625 6.24375C8.94375 6.24375 8.26875 6.8625 8.26875 7.9875V9H7.14375V10.2937H8.26875V13.4437C6.13125 13.1062 4.5 11.25 4.5 9C4.5 6.525 6.525 4.5 9 4.5Z"
              />
            </svg>
          </div>
        </a>
        <a href={insta || ""} rel="noreferrer" target="_blank">
          <div className={styles.item}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 10.575C8.15625 10.575 7.425 9.9 7.425 9C7.425 8.15625 8.1 7.425 9 7.425C9.84375 7.425 10.575 8.1 10.575 9C10.575 9.84375 9.84375 10.575 9 10.575Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9125 5.175H7.0875C6.6375 5.23125 6.4125 5.2875 6.24375 5.34375C6.01875 5.4 5.85 5.5125 5.68125 5.68125C5.54772 5.81478 5.48463 5.94831 5.40837 6.10971C5.38828 6.15224 5.36721 6.19683 5.34375 6.24375C5.33505 6.26985 5.325 6.29731 5.31423 6.32673C5.25538 6.4875 5.175 6.70711 5.175 7.0875V10.9125C5.23125 11.3625 5.2875 11.5875 5.34375 11.7562C5.4 11.9812 5.5125 12.15 5.68125 12.3187C5.81478 12.4523 5.94831 12.5154 6.10971 12.5916C6.15228 12.6117 6.19679 12.6328 6.24375 12.6562C6.26986 12.665 6.29731 12.675 6.32673 12.6858C6.4875 12.7446 6.70711 12.825 7.0875 12.825H10.9125C11.3625 12.7687 11.5875 12.7125 11.7562 12.6562C11.9812 12.6 12.15 12.4875 12.3187 12.3187C12.4523 12.1852 12.5154 12.0517 12.5916 11.8903C12.6117 11.8477 12.6328 11.8032 12.6562 11.7562C12.665 11.7301 12.675 11.7027 12.6858 11.6733C12.7446 11.5125 12.825 11.2929 12.825 10.9125V7.0875C12.7687 6.6375 12.7125 6.4125 12.6562 6.24375C12.6 6.01875 12.4875 5.85 12.3187 5.68125C12.1852 5.54772 12.0517 5.48463 11.8903 5.40837C11.8478 5.38829 11.8031 5.36719 11.7562 5.34375C11.7301 5.33505 11.7027 5.325 11.6733 5.31423C11.5125 5.25538 11.2929 5.175 10.9125 5.175ZM9 6.58125C7.65 6.58125 6.58125 7.65 6.58125 9C6.58125 10.35 7.65 11.4187 9 11.4187C10.35 11.4187 11.4187 10.35 11.4187 9C11.4187 7.65 10.35 6.58125 9 6.58125ZM12.0375 6.525C12.0375 6.83566 11.7857 7.0875 11.475 7.0875C11.1643 7.0875 10.9125 6.83566 10.9125 6.525C10.9125 6.21434 11.1643 5.9625 11.475 5.9625C11.7857 5.9625 12.0375 6.21434 12.0375 6.525Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM7.0875 4.33125H10.9125C11.4187 4.3875 11.7562 4.44375 12.0375 4.55625C12.375 4.725 12.6 4.8375 12.8812 5.11875C13.1625 5.4 13.3313 5.68125 13.4438 5.9625C13.5563 6.24375 13.6687 6.58125 13.6687 7.0875V10.9125C13.6125 11.4187 13.5563 11.7562 13.4438 12.0375C13.275 12.375 13.1625 12.6 12.8812 12.8812C12.6 13.1625 12.3187 13.3312 12.0375 13.4437C11.7562 13.5562 11.4187 13.6687 10.9125 13.6687H7.0875C6.58125 13.6125 6.24375 13.5562 5.9625 13.4437C5.625 13.275 5.4 13.1625 5.11875 12.8812C4.8375 12.6 4.66875 12.3187 4.55625 12.0375C4.44375 11.7562 4.33125 11.4187 4.33125 10.9125V7.0875C4.3875 6.58125 4.44375 6.24375 4.55625 5.9625C4.725 5.625 4.8375 5.4 5.11875 5.11875C5.4 4.8375 5.68125 4.66875 5.9625 4.55625C6.24375 4.44375 6.58125 4.33125 7.0875 4.33125Z"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}