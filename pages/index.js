import Head from 'next/head'
import WorkList from '../components/work_list'
import Work from '../components/work'
import Section from '../components/section'
import Project from '../components/project'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Head>
        <title>Fabio Kuhn - Software and Project Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-12 flex flex-col lg:flex-row justify-center items-center w-full bg-hunterGreen-dark text-white">
        <div className='w-48 h-48 rounded-full border-8 shadow-xl relative border-hunterGreen-light'>
          <img
            src="/images/fabiokuhn.jpg"
            alt="Fabio Kuhn"
            objectFit="cover"
            layout="fill"
            className = 'rounded-full'
          />
        </div>
        <div className='text-center md:text-left lg:ml-8 '>
          <h1 className="text-6xl font-bold tracking-widest">
            <div className=''>Fabio Kuhn</div>
          </h1>
          <p className="mt-3 text-2xl">
            <code className="block md:inline p-3 font-mono text-lg bg-hunterGreen-light md:rounded-md text-black">
            Software and Project Development
            </code>
          </p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <Section title='About me' className='bg-grey-light w-full'>
          <p className='text-lg'>
            Hi, I'm Fabio, a passionate full stack software developer with a wide range of professional experiences and skills.
            <br/>
            I've been working in the Software and digital Product development since over 15 years.
          </p>
        </Section>
        <Section title='My skillset'>
          <div className='text-left lg:w-1/2 mx-auto'>
            <p className='text-lg pb-8'>
              It's hard to list all the skills and things I do or did over the years. I selected some of the more important and interesting skills that I have real professional experiance with.
            </p>

            <p className='p-2'><span class='font-bold'>Back-end development:</span> Ruby on Rails, NodeJS, Java, Redis, Postgresql, MySQL, GraphQL, API design, Caching</p>
            <p className='p-2'><span class='font-bold'>Front-end development:</span> HTML (Slim, Haml), CSS (SCSS, Bootstrap, TailwindCSS), JavaScript (StimulusJS), Git, SEO, accessibility, responsive web design</p>
            <p className='p-2'><span class='font-bold'>Web hosting:</span> Heroku, AWS (S3, Cloudfront, etc), CI process setup, Monitoring, Sendgrid, etc</p>
            <p className='p-2'><span class='font-bold'>Libraries, Frameworks and Tools:</span> Core Ruby on Rails, Rspec, Cucumber, Git, Sidekiq, and many more</p>
            <p className='p-2'><span class='font-bold'>Methodologies:</span> ShapeUp, Scrum, Kanban, Scrumban, TDD, BDD, Post-Mortems, Retrospetives</p>
            <p className='p-2'><span class='font-bold'>Project development:</span> ODI and Jobs to be done, Prototyping, User stories, Lean and MVP, Design Sprints, Start-Up and Big enterprise experiance</p>
            <p className='p-2'><span class='font-bold'>Team lead:</span> Coaching, Hiring, 1on1s, Performance reviews, Managing a fully remote team</p>
          </div>
        </Section>
        <Section title='Some of the projects I worked on' className='bg-grey-light w-full'>
          <div className='w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-12'>
            <Project title='Giving Multiplier' img='/images/giving_multiplier.png' href='https://givingmultiplier.org'> Want to give more effectively but don't want to give up your favorite charity? Evidence based research suggests: do both! Divide your donation between your favorite charity and a highly effective charity recommended by experts.</Project>
            <Project title='Algrano' img='/images/algrano.png' href='https://www.algrano.com/en'>Algrano is a Swiss tech startup that changes the global trade of coffee. Using technology, Algrano has set an ambitious goal to revolutionise the centuries old coffee trade industry and make it more transparent. Through the Algrano online platform, coffee growers promote and sell their coffees straight to roasters in Europe</Project>
            <Project title='local.ch' img='/images/local_ch.png' href='https://www.local.ch'>local.ch is the swiss phone directory. Recently they switched their entire front-end to Ruby. It is one of the most visited websites in Switzerland.</Project>
            <Project title='Brotseiten' img='/images/brotseiten.jpg'>Brotseiten is a iOS App developed by Simplificator AG for the Swiss startup Brotseiten. The App lets readers subscribe to a weekly published edition of short stories by famous Swiss and German authors.</Project>
          </div>
        </Section>

        <Section title='My work experience'>
          <WorkList className='w-full'>
            <Work company='Algrano' title='Principal & Lead Engineer' date='2014 - now' img='images/algrano.jpg'>
              algrano is the first online community of coffee growers and roasters.

              <p className='pt-8 text-left'>
                <span className='font-bold'>My Role</span>

                <ul className='ml-4 list-disc'>
                  <li>Full-stack development with Ruby on Rails, JavaScript</li>
                  <li>Participate in the product development planning </li>
                  <li>Evaluation and maintenance of technologies</li>
                  <li>Software engineers and teachnical team leader</li>
                  <li>Support the product team in reaching the objectives</li>
                </ul>
              </p>
            </Work>
            <Work company='Simplificator' title='Software Engineer' date='2010 - 2013' img='images/simplificator.jpg'>
              Simplificator AG is a Swiss software agency and consultancy located in Zürich.<br/>
              Although it was one of the first full Ruby on Rails company in Switzerland it uses now different technologies to solve client needs in the most optimal way.

              <p className='pt-8 text-left'>
                <span className='font-bold'>My Role</span>

                <ul className='ml-4 list-disc'>
                  <li>Software Engineering - mainly with Ruby on Rails, RubyMotion, iOS and JavaScript</li>
                  <li>Specification and analysis of projects</li>
                  <li>Evaluation of technologies</li>
                  <li>Technical consultancy with clients</li>
                  <li>Testing and quality control</li>
                  <li>Bridge a fully remote team in a hybrid environment</li>
                </ul>
              </p>
            </Work>
            <Work company='WhinyByte' title='CEO and Software Engineer' date='2009 - 2014' img='images/whinybyte.jpg'>
              whinybyte was a small startup located in Basel. We built small customized websites for clients, consulted and worked on Ruby on Rails projects in need and developed our own projects like fahrschule.ch.
              <p className='pt-8 text-left'>
                <span className='font-bold'>My Role</span>

                <ul className='ml-4 list-disc'>
                  <li>Software Engineering - mainly with Ruby on Rails and JavaScript</li>
                  <li>Specification and analysis of projects</li>
                  <li>Web design, SEO and front-end development</li>
                  <li>Sales and marketing</li>
                  <li>Server Management</li>
                </ul>
              </p>
            </Work>
            <Work company='Coop' title='Software Developer' date='2004 - 2009' img='images/coop.jpg'>
              Coop is the second biggest retailer in Switzerland. I started my appreniceship there at age 17 and worked in different fields. First in first level IT support where I learned communication skills, then from building websites with Java up to low-level programming for internal transaction processing with ABAP.
              <p className='pt-8 text-left'>
                <span className='font-bold'>My Role</span>

                <ul className='ml-4 list-disc'>
                  <li>Internal first-level IT-Support</li>
                  <li>Java web evelopment</li>
                  <li>Web design for promotional pages</li>
                  <li>ABAP/SAP development</li>
                  <li>API and general interface design</li>
                </ul>
              </p>
            </Work>
          </WorkList>
        </Section>

        <Section title='Contact' className='bg-grey-light w-full'>
          <p className='pb-3'>
            <span className='p-4 mb-3 block'>Interested in having a conversation?<br/>Send me an email to</span>
            <code className="p-3 font-mono text-lg bg-hunterGreen-light rounded-md text-black">
              fabio@kuhn.dev
            </code>
            <br/>
            <a className='block my-5 hover:underline' rel='noopener noreferrer nofollow' target='_blank' href='https://www.linkedin.com/in/fabio-kuhn-647173a2/'> or check my LinkedIn Profile</a>
          </p>
        </Section>
      </main>

      <footer className="flex flex-wrap items-center justify-center w-full h-24 border-t px-8">
        <a
          className="hover:underline text-center"
          href="#"
        >
          Congratulations! You reached the end.
          <br/>
          Back to the top?
        </a>
        <small className='w-full text-center'>Ps. This website has no cookies and no JS tracking</small>
      </footer>
    </div>
  )
}
