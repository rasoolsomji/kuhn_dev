export default function Section({className, title, subtitle, children}) {
  const classes = ` w-full py-14 px-8 ${className}`
  return (
    <section className={classes}>
      <div className='container max-w-5xl'>
        <h2 className='text-4xl tracking-widest text-blue font-bold uppercase mb-8'>{title}</h2>
        {children}
      </div>
    </section>
  )
}
