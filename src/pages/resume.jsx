import * as React from 'react';

import { Footer, Head, Header, ProfileHeader } from '../components';

const ResumePage = () => (
    <>
        <Head
            title="Resume | Brian Behrens | Los Angeles Software Engineer"
            description="The personal resume of Brian Behrens, web developer and software engineer."
        >
            <script
                async
                defer
                src="https://buttons.github.io/buttons.js"
            ></script>
        </Head>
        <Header />
        <main className="content">
            <ProfileHeader>
                <p>
                    I’m Brian Behrens, a developer living in Los Angeles, CA. I
                    have been building interactive projects professionally since
                    2003. The bulk of my career has been centered around
                    websites, social campaigns, and web-based applications. I
                    have focused heavily on interaction design, web standards,
                    usability, animation, video, e-commerce, and application
                    architecture. My passion for technology is ever-evolving and
                    I enjoy new challenges. Behind it all, I’m a problem solver
                    who likes telling stories. In my free time, you’ll find me
                    surfing, taking photos, exploring code, and/or spending time
                    with my wife and dogs.
                </p>
            </ProfileHeader>
            <h2 className="header-bar">Experience</h2>
            <div className="limit-text-width">
                <h3>Principal Engineer (IV), VideoAmp</h3>
                <h4>Santa Monica, CA | 2018 – Present</h4>
                <p>
                    Starting at VideoAmp on the DesignOps team, we focused on
                    building our design system. This was built using TypeScript,
                    React, Jest, Cypress, Percy, Codecov, D3 and more. I have
                    since transitioned to a principal role, working as a
                    full-stack engineer delivering features and shared code in
                    both our front and backend services using Node.js,
                    TypeScript, React, hapi, Postgres, Snowflake and various AWS
                    services like SQS and SNS. I help lead guild meetings and
                    mentor other engineers.
                </p>
                <h3>Software Engineer – Front End, REI</h3>
                <h4>Kent, WA | 2017 – 2018</h4>
                <p>
                    Lead front end software engineer for the Classes/Events and
                    Adventures team. Work in a continuous integrated environment
                    with Docker, Java, Jenkins and more. Spend most of my time
                    updating our front end systems to be written in ES6 linting
                    standards with Vue.js components. Use build tools like
                    webpack and dependency management on the front end is done
                    via our private NPM repository. Unit test our shared modules
                    with Mocha and Chai.
                </p>
                <h3>Senior Interactive Developer, POP</h3>
                <h4>Seattle, WA | 2015 – 2017</h4>
                <p>
                    Second time working at POP. Previously wrote a large amount
                    of ActionScript 3, building applications and animations for
                    various clients. This time I focused heavily on JavaScript.
                    Used Node.js on almost every project integrating Grunt, Gulp
                    or webpack for build tools. Used frameworks/libraries like
                    React, Angular, GreenSock, jQuery, ScrollMagic and many
                    others. Created animations in both CSS and JavaScript. Led
                    various server integrations, API and database development,
                    Docker configuration and other backend duties. Developed
                    within Node.js, Apache, .NET and AWS environments.
                </p>
                <h3>Senior Web Developer, Mervin Manufacturing</h3>
                <h4>Seattle, WA | 2012 – 2015</h4>
                <p>
                    Led a team in development efforts and made key decisions in
                    e-commerce infrastructure, hosting architecture and build
                    systems. Developed new applications for users to find and
                    customize products. Developed responsive WordPress templates
                    for all brand sites. Researched new technologies like
                    Angular and implemented them in production builds. Planned
                    marketing and social initiatives. Implemented new management
                    communication and analytic tools for team efficiencies. Set
                    up source control infrastructure. Evaluated analytics and
                    made informed online-business decisions.
                </p>
                <h3>Senior Interface Developer, Blast Radius</h3>
                <h4>Seattle, WA | 2011 – 2012</h4>
                <p>
                    Managed a team of developers executing marketing initiatives
                    for Starbucks. Brainstormed and planned technical execution
                    on Frappuccino, Pumpkin Spice Latte and Starbucks Holiday.
                    Planned timelines and feature specifications for technical
                    execution. Utilized JIRA for iteration planning. Programmed
                    MVC based Flash experiences for Starbucks Holiday and
                    Frappuccino using ActionScript 3 and PureMVC.
                </p>
                <h3>Senior Interactive Developer, POP</h3>
                <h4>Seattle, WA | 2008 – 2011</h4>
                <p>
                    Built Flash based experiences for corporate clients such as
                    Target, Nintendo, Amazon, Xbox and more. Led development
                    planning efforts and execution.
                </p>
                <h3>Multimedia Developer, Marx Creative</h3>
                <h4>Milwaukee, WI | 2006 – 2008</h4>
                <p>
                    = Web development (HTML, CSS, Javascript, Ajax, Flash, XML,
                    PHP and MySQL), DVD production, In-store Media Creation
                </p>
                <h3>Freelance Web Development</h3>
                <h4>2006 – Present</h4>
                <p>
                    Web-design and Programming (HTML, CSS, Javascript, Flash,
                    XML, PHP and MySQL), Custom CMS Application Development
                </p>
                <h3>Multimedia Developer, WIN Media Inc.</h3>
                <h4>Burlington, WI | 2003 – 2006</h4>
                <p>
                    Project Management, CD-ROM Development, Web Development
                    (HTML, CSS, Javascript, Flash, PHP and MySQL), DVD
                    Production, Live Event Video Production, Commercial
                    Productions
                </p>
                <h3>Production Assistant, Milwaukee Public Television</h3>
                <h4>Milwaukee, WI | 2002 – 2003</h4>
                <p>
                    Floor Director, Camera, Make-up, TelePrompTer, Switcher,
                    Lighting, Audio
                </p>
                <h3>
                    Co-Producer, Milwaukee Bucks “Bucks Buddy” Half-time Segment
                </h3>
                <h4>Milwaukee, WI | 2003</h4>
                <p>
                    I Produced, Shot, and Edited a 30 second half-time segment
                    for the “Bucks Buddy” program with partner, Brad
                    Manderscheid. The segment aired on the WB during a Bucks
                    half-time show.
                </p>
                <h3>Executive Producer, MPTV’s “Letters to Santa”</h3>
                <h4>Milwaukee, WI | 2002</h4>
                <p>
                    I oversaw all aspects of production in the 7 Part Children’s
                    Series aired on Milwaukee Public Television.
                </p>
            </div>
            <h2 className="header-bar">Awards</h2>
            <div className="limit-text-width">
                <h3>Target – Best of the Bullseye: Collaboration</h3>
                <h4>Seattle, WA | 2008</h4>
                <p>
                    The team at POP on the Target account was awarded a Best of
                    the Bullseye award by Target Corporate for collaboration.
                </p>
                <h3>Freddie Award</h3>
                <h4>Milwaukee, WI | 2007</h4>
                <p>
                    International Health and Medical Media Awards for Best Web
                    Site
                    <br />
                    Working at Marx Creative, I helped produce and maintain
                    chefmd.com. I set up the databases, created/implemented
                    designs, and maintained the site since I started at Marx
                    Creative in 2006.
                </p>
                <h3>Best Director Award</h3>
                <h4>Milwaukee, WI | 2003</h4>
                <p>
                    Milwaukee Public Television Student Operations
                    <br />I was awarded best director for a half hour long
                    feature titled “Let’s Be Frank”. I was the director,
                    producer, cinematographer, and editor for this feature.
                </p>
            </div>
            <h2 className="header-bar">Education</h2>
            <div className="limit-text-width">
                <h3>Milwaukee Area Technical College</h3>
                <h4>Milwaukee, WI | 2001 – 2003</h4>
                <p>Associates Degree in Television &amp; Video Production</p>
                <h3>Milwaukee Area Technical College</h3>
                <h4>Milwaukee, WI | 2003 – 2005</h4>
                <p>Associates Degree in Visual Communications</p>
            </div>
            <h2 className="header-bar">Skills</h2>
            <div className="limit-text-width">
                <p>
                    HTML, CSS, JavaScript, TypeScript, Node.js, React, build
                    webpack, Jenkins, Preprocessors, Babel, Vue.js, Angular,
                    PHP, MySQL, NoSQL, Source Control (Git &amp; SVN),
                    WordPress, JSON, XML, Social APIs, JS Libraries (Underscore,
                    GreenSock, Jest, Cypress, jQuery), Agile Methodology, Adobe
                    Creative Cloud, Project Estimation/Planning, Managing
                    Development Teams, Video Production and Photography
                </p>
            </div>
        </main>
        <Footer />
    </>
);

export default ResumePage;
