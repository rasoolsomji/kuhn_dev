import styles from './Project.module.scss'

export default function Project({href, img, title, children}) {
  var link_title = <div><span className='block sm:hidden'>{title}</span><span className='hidden sm:block'>{href}</span></div>;
  var link;
  if (href) {
    link = <a rel='noopener noreferrer nofollow' target='_blank' href={href || '#'}>{link_title}</a>;
  } else {
    link = <span>{title}</span>;
  }
  return (
    <div className={styles.project}>
      <a href='#0' className={styles.project__hover} aria-labelledby={title}></a>
      <div className={styles.project__title}>
        <div class="rounded-full h-4 w-4 bg-red-400 flex mr-3"></div>
        <div class="rounded-full h-4 w-4 bg-yellow-400 flex mr-3"></div>
        <div class="rounded-full h-4 w-4 bg-green-400 flex mr-3"></div>
        <div class="flex-auto px-2 py-1 ml-5 mr-1 rounded-md bg-white text-xs">
        { link }
        </div>
      </div>
      <img src={img} alt='' />

      <div className={styles.project__overlay}>
        <h3 id={title} aria-hidden='true'>{title}</h3>
        <div className={styles.project__body}>
          <p>
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}


