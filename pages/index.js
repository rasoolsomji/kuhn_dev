import Head from "next/head";
import WorkList from "../components/work_list";
import Work from "../components/work";
import Section from "../components/section";
import Project from "../components/project";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Head>
        <title>Kuhn.dev - Software and Project Development - Fabio Kuhn</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header className="container py-12 flex flex-col lg:flex-row justify-center items-center w-full text-gray-800">
        <div className="w-48 h-48">
          <img
            src="/images/kuhn logo.svg"
            alt="Fabio Kuhn"
            objectFit="cover"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="text-center lg:text-left lg:ml-8 flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
            <div className="text-blue">KUHN.DEV</div>
          </h1>
          <p className="md:text-xl tracking-widest block uppercase md:inline md:rounded-md text-red">
            Building effective digital solutions
          </p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <Section title="About me" className="bg-grey-light-rotated-left">
          <div className="mb-12 mx-auto w-48 h-48 rounded-full border-8 shadow-xl relative border-blue">
            <img
              src="/images/fabiokuhn.jpg"
              alt="Fabio Kuhn"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <p className="text-lg text-left pb-2">
            Hi, I'm Fabio, a passionate full-stack software developer with a
            wide range of professional experiences and skills. I've been working
            in the software and digital product industry for more than 15 years.
          </p>
          <p className="text-lg text-left">
            I'm using my skills and talent to have a bigger impact on the world
            by working on projects in the area of{" "}
            <a
              rel="noopener noreferrer nofollow"
              target="_blank"
              href="https://www.effectivealtruism.org/"
            >
              Effective Altruism
            </a>
            .
          </p>
        </Section>
        <Section title="Services">
          <div className="text-left mx-auto">
            <h3 className="text-xl pb-1">Software Development</h3>
            <p className="text-xl pb-8">
              Custom application development in both new and legacy projects.
              Experienced in the full stack of a web application – from
              databases to backend to frontend – or any part of them.
            </p>
            <h3 className="text-xl pb-1">System Design</h3>
            <p className="text-xl pb-8">
              A crucial part of your product development process is figuring out
              the optimal system design. Defining the architecture, modules,
              interfaces, and data for a system to satisfy your specific
              requirements.
            </p>

            <h3 className="text-xl pb-1">Consulting</h3>
            <p className="text-xl pb-4">
              You are starting a new project and lack certain skills or can you
              use support in an existing team?
            </p>
            <div className="pl-6">
              <h4 className="font-body text-lg pb-1 underline">
                Software Development, Deployment and Operations
              </h4>
              <p className="text-xl pb-4">
                Transform your development into a continuous success of
                delivering high quality. Writing maintainable code, balance
                velocity with risks and ensure high uptime.
              </p>
              <h4 className="font-body text-lg pb-1 underline">
                Development methodologies and team setup
              </h4>
              <p className="text-xl pb-4">
                Key part of creating valuable outcomes is to optimize your
                processes around the product development. Ensuring involvement
                of key stakeholders and identifying constraints to figure out
                clear structures and reasonable processes.
              </p>
              <h4 className="font-body text-lg pb-1 underline">
                Product planning
              </h4>
              <p className="text-xl pb-4">
                What objectives to prioritize and how to reach key metric goals?
                I can help you figure out the path from your vision to an
                understandable strategy that leads to concrete actions.
              </p>
              <h4 className="font-body text-lg pb-1 underline">Hiring</h4>
              <p className="text-xl pb-8">
                Grow your business and hire the right people by getting a second
                opinion on a candidate.
              </p>
            </div>

            <h3 className="text-xl pb-1">Coaching</h3>
            <p className="text-xl pb-8">
              You’ve learned the craft but still feel a bit unsure of the
              practice? Or maybe you hired a new programmer and want them to get
              started on the right foot? I’ll help you get up to speed with
              virtual or in-person pair programming and async code reviews.
            </p>
          </div>
        </Section>
        <Section title="My skillset">
          <div className="text-left mx-auto">
            <p className="text-lg pb-8">
              It's hard to list all the skills and things I do or did over the
              past years. I selected some of the more important and interesting
              skills and tools for which I have professional experiences with.
            </p>

            <p className="p-2">
              <span class="font-bold">Back-end development:</span> Ruby on
              Rails, NodeJS, Java, Redis, Postgresql, MySQL, GraphQL, API
              design, Caching
            </p>
            <p className="p-2">
              <span class="font-bold">Front-end development:</span> HTML (Slim,
              Haml), CSS (SCSS, Bootstrap, TailwindCSS), JavaScript (StimulusJS,
              NextJS), Git, SEO, accessibility, responsive web design
            </p>
            <p className="p-2">
              <span class="font-bold">Web hosting:</span> Heroku, AWS (S3,
              Cloudfront, etc), CI process setup, Monitoring, Sendgrid, etc
            </p>
            <p className="p-2">
              <span class="font-bold">Libraries, Frameworks and Tools:</span>{" "}
              Core Ruby on Rails, Rspec, Cucumber, Git, Sidekiq, and many more
            </p>
            <p className="p-2">
              <span class="font-bold">Methodologies:</span> ShapeUp, Scrum,
              Kanban, Scrumban, TDD, BDD, Post-Mortems, Retrospectives
            </p>
            <p className="p-2">
              <span class="font-bold">Project development:</span> ODI and Jobs
              to be done, Prototyping, User stories, Lean and MVP, Design
              Sprints, Start-Up and Big enterprise experience
            </p>
            <p className="p-2">
              <span class="font-bold">Team lead:</span> Coaching, Hiring, 1on1s,
              Performance reviews, Managing a fully remote team
            </p>
          </div>
        </Section>
        <Section
          title="Some of the projects I worked on"
          className="bg-grey-light-rotated-right"
        >
          <div className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-12">
            <Project
              title="Giving Multiplier"
              img="/images/giving_multiplier.png"
              href="https://givingmultiplier.org"
            >
              {" "}
              Want to give more effectively but don't want to give up your
              favorite charity? Evidence based research suggests: do both!
              Divide your donation between your favorite charity and a highly
              effective charity recommended by experts.
            </Project>
            <Project
              title="Algrano"
              img="/images/algrano.png"
              href="https://www.algrano.com/en"
            >
              Algrano is a Swiss tech startup that changes the global trade of
              coffee. Using technology, Algrano has set an ambitious goal to
              revolutionise the centuries old coffee trade industry and make it
              more transparent. Through the Algrano online platform, coffee
              growers promote and sell their coffees straight to roasters in
              Europe
            </Project>
            <Project
              title="local.ch"
              img="/images/local_ch.png"
              href="https://www.local.ch"
            >
              local.ch is the swiss phone directory. Recently they switched
              their entire front-end to Ruby. It is one of the most visited
              websites in Switzerland.
            </Project>
            <Project title="Brotseiten" img="/images/brotseiten.jpg">
              Brotseiten is a iOS App developed by Simplificator AG for the
              Swiss startup Brotseiten. The App lets readers subscribe to a
              weekly published edition of short stories by famous Swiss and
              German authors.
            </Project>
          </div>
        </Section>

        <Section title="My work experience">
          <WorkList className="w-full">
            <Work
              company="kuhn.dev"
              title="Full-Stack Engineer & Consultant"
              date="2021 - now"
              img="images/kuhn.png"
            >
              Self-employed and working as a contractor on various projects in
              the field of{" "}
              <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="https://www.effectivealtruism.org/"
              >
                Effective Altrusim
              </a>
              . Some clients include
              <ul className="text-left ml-8 list-disc">
                <li>
                  <a
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    href="https://funds.effectivealtruism.org/"
                  >
                    EA Funds
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    href="https://www.givingwhatwecan.org/"
                  >
                    Giving What We Can
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    href="https://givingmultiplier.org/"
                  >
                    Giving Multiplier
                  </a>
                </li>
              </ul>
              <p className="pt-8 text-left">
                <span className="font-bold">My Role</span>

                <ul className="ml-8 list-disc">
                  <li>
                    Full-stack development with RoR, Next.js, GraphQL,
                    Postgresql
                  </li>
                  <li>Participate in the product development planning</li>
                  <li>Evaluation and maintenance of technologies</li>
                </ul>
              </p>
            </Work>
            <Work
              company="Algrano"
              title="Principal & Lead Engineer"
              date="2014 - 2021"
              img="images/algrano.jpg"
            >
              algrano is the first online community of coffee growers and
              roasters.
              <p className="pt-8 text-left">
                <span className="font-bold">My Role</span>

                <ul className="ml-8 list-disc">
                  <li>Full-stack development with Ruby on Rails, JavaScript</li>
                  <li>Participate in the product development planning </li>
                  <li>Evaluation and maintenance of technologies</li>
                  <li>Software engineers and teachnical team leader</li>
                  <li>Support the product team in reaching the objectives</li>
                </ul>
              </p>
            </Work>
            <Work
              company="Simplificator"
              title="Software Engineer"
              date="2010 - 2013"
              img="images/simplificator.jpg"
            >
              Simplificator AG is a Swiss software agency and consultancy
              located in Zürich.
              <br />
              Although it was one of the first full Ruby on Rails company in
              Switzerland it uses now different technologies to solve client
              needs in the most optimal way.
              <p className="pt-8 text-left">
                <span className="font-bold">My Role</span>

                <ul className="ml-8 list-disc">
                  <li>
                    Software Engineering - mainly with Ruby on Rails,
                    RubyMotion, iOS and JavaScript
                  </li>
                  <li>Specification and analysis of projects</li>
                  <li>Evaluation of technologies</li>
                  <li>Technical consultancy with clients</li>
                  <li>Testing and quality control</li>
                  <li>Bridge a fully remote team in a hybrid environment</li>
                </ul>
              </p>
            </Work>
            <Work
              company="WhinyByte"
              title="CEO and Software Engineer"
              date="2009 - 2014"
              img="images/whinybyte.jpg"
            >
              whinybyte was a small startup located in Basel. We built small
              customized websites for clients, consulted and worked on Ruby on
              Rails projects in need and developed our own projects like
              fahrschule.ch.
              <p className="pt-8 text-left">
                <span className="font-bold">My Role</span>

                <ul className="ml-8 list-disc">
                  <li>
                    Software Engineering - mainly with Ruby on Rails and
                    JavaScript
                  </li>
                  <li>Specification and analysis of projects</li>
                  <li>Web design, SEO and front-end development</li>
                  <li>Sales and marketing</li>
                  <li>Server Management</li>
                </ul>
              </p>
            </Work>
            <Work
              company="Coop"
              title="Software Developer"
              date="2004 - 2009"
              img="images/coop.jpg"
            >
              Coop is the second biggest retailer in Switzerland. I started my
              apprenticeship there at age 17 and worked in different fields.
              First in first level IT support where I learned communication
              skills, then from building websites with Java up to low-level
              programming for internal transaction processing with ABAP.
              <p className="pt-8 text-left">
                <span className="font-bold">My Role</span>

                <ul className="ml-8 list-disc">
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

        <Section title="Contact" className="bg-grey-light-rotated-left w-full">
          <p className="pb-3">
            <span className="p-4 mb-3 block">
              Interested in having a conversation?
              <br />
              Send me an email to
            </span>
            <code className="p-3 font-mono text-lg bg-green-light rounded-md text-black">
              fabio@kuhn.dev
            </code>
            <br />
            <a
              className="block my-5 hover:underline"
              rel="noopener noreferrer nofollow"
              target="_blank"
              href="https://www.linkedin.com/in/fabio-kuhn-647173a2/"
            >
              {" "}
              or check my LinkedIn Profile
            </a>
          </p>
        </Section>
      </main>

      <footer className="flex flex-wrap items-center justify-center w-full h-24 mt-8 px-8">
        <a className="hover:underline text-center" href="#">
          Congratulations! You reached the end.
          <br />
          Back to the top?
        </a>
        <small className="w-full text-center">
          Note: This website has no cookies and no JS tracking
        </small>
      </footer>
    </div>
  );
}
