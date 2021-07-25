export default function Section({className, title, subtitle, children}) {
  const classes = `py-14 px-8 ${className}`
  return (
    <section className={classes}>
      <div className='container'>
        <h2 className='text-4xl tracking-widest text-hunterGreen font-bold uppercase mb-8'>{title}</h2>
        {children}
      </div>
    </section>
  )
}
