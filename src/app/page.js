"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          style={{ width: '100%', height: 'auto' }}
          src="/header.svg"
          alt="header"
          width={0}
          height={0}
          priority
        />
      </div>
      <div>
        <a href="https://github.com/markurei">
          <Image
            style={{ width: '100%', height: 'auto', marginTop: -10, marginBottom: -5 }}
            src="/github_3.svg"
            alt="github"
            width={0}
            height={0}
            priority
          />
        </a>
      </div>
      <div>
        <Image
          style={{ width: '100%', height: 'auto' }}
          src="/body_1.svg"
          alt="body 1"
          width={0}
          height={0}
          priority
        />
      </div>
      <div>
        <a href="https://play.google.com/store/apps/details?id=com.spingine.xeleqt.tracker&hl=en_US">
          <Image
            style={{ width: '100%', height: 'auto', marginTop: -12, marginBottom: -5 }}
            src="/playstore_3.svg"
            alt="playstore"
            width={0}
            height={0}
            priority
          />
        </a>
      </div>
      <div>
        <Image
          style={{ width: '100%', height: 'auto' }} 
          src="/body_2.svg"
          alt="body 2"
          width={0}
          height={0}
          priority
        />
      </div>
      <div>
        <a href="mailto:someone@markagan07@gmail.com">
          <Image
            style={{ width: '100%', height: 'auto', marginTop: -12, marginBottom: -5 }}
            src="/gmail_1.svg"
            alt="gmail"
            width={0}
            height={0}
            priority
          />
        </a>
      </div>
      <div>
        <a href="https://ph.linkedin.com/in/mark-rey-agan">
          <Image
            style={{ width: '100%', height: 'auto', marginTop: -5 }}
            src="/linkedin_1.svg"
            alt="linkedin"
            width={0}
            height={0}
            priority
          />
        </a>
      </div>
      {/* <div style={{ width: '100%', height: 'auto', backgroundColor: '#313542', marginTop: -5, maxWidth: '1080px', paddingTop: 4}}>
        <a href="https://ph.linkedin.com/in/mark-rey-agan" style={{ marginLeft: 0 }}>
          <Image
            src="/linkedin_link.svg"
            alt="linkedin"
            width={width * 0.23}
            height={23}
            priority
          />
        </a>
      </div> */}
      <div>
        <Image
          style={{ width: '100%', height: 'auto',marginTop: -7 }}
          src="/footer.svg"
          alt="footer"
          width={0}
          height={0}
          priority
        />
      </div>
    </main>
  );
}
