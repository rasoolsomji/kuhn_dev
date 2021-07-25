import styles from './Project.module.scss'

export default function Project({href, img, title, children}) {
  return (
    <div className={styles.project}>
      <a href={href} rel='noopener noreferrer nofollow' target='_blank' aria-labelledby={title}></a>
      <div className={styles.project__title}>
        <div class="rounded-full h-4 w-4 bg-red-400 flex mr-3"></div>
        <div class="rounded-full h-4 w-4 bg-yellow-400 flex mr-3"></div>
        <div class="rounded-full h-4 w-4 bg-green-400 flex mr-3"></div>
        <div class="flex-auto px-2 py-1 ml-5 mr-1 rounded-md bg-white text-xs">
          {href || title}
        </div>
      </div>
      <img src={img} alt='' />

      <div className={styles.project__overlay}>
        <h3 id={title} aria-hidden='true'>{title}</h3>
        <div className={styles.project__body}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  )
}


