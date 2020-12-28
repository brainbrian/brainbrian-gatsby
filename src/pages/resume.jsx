import * as React from 'react';

import { Footer, Head, Header } from '../components';

const ResumePage = () => (
    <>
        <Head
            title="Brian Behrens | Resume | Los Angeles Software Engineer"
            description="This is the personal resume of Brian Behrens."
        >
            <script
                async
                defer
                src="https://buttons.github.io/buttons.js"
            ></script>
        </Head>
        <Header />
        <main className="content">
            <p>
                I’m Brian Behrens, a developer living in Venice, CA. I have been
                building interactive projects professionally since 2003. The
                bulk of my career has been centered around websites, social
                campaigns and web– based applications. I have focused heavily on
                interaction design, web standards, usability, animation, video,
                e-commerce and application architecture. My passion for
                technology is ever-evolving and I enjoy new challenges. Behind
                it all, I’m a problem solver who likes telling stories. In my
                free time you’ll find me surfing, snowboarding, skateboarding,
                taking photos or appreciating live music.
            </p>
            <p>
                <a
                    className="github-button"
                    href="https://github.com/brainbrian"
                    data-color-scheme="no-preference: light; light: light; dark: light;"
                    data-size="large"
                    aria-label="Follow @brainbrian on GitHub"
                >
                    Follow @brainbrian
                </a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/brianbehrens">
                    <img
                        loading="lazy"
                        src="https://static.licdn.com/scds/common/u/img/webpromo/btn_viewmy_160x25.png"
                        alt="View Brian Behrens's profile on LinkedIn"
                        width="160"
                        height="25"
                        border="0"
                    />
                </a>
            </p>
            <h2 className="header-bar">Experience</h2>
            <h3>Principal Engineer (IV), VideoAmp</h3>
            <p>
                Santa Monica, CA | 2018 – Present
                <br />I work on the DesignOps team. We focus on developing and
                building out our design system used on internal products. We are
                in the process of open-sourcing our design system. We work with
                TypeScript, React and Node on all of our projects.
            </p>
            <h3>Software Engineer – Front End, REI</h3>
            <p>
                Kent, WA | 2017 – 2018
                <br />
                Lead front end software engineer for the Classes/Events and
                Adventures team. Work in a continuous integrated environment
                with Docker, Java, Jenkins and more. Spend most of my time
                updating our front end systems to be written in ES6 linting
                standards with Vue.js components. Use build tools like webpack
                and dependency management on the front end is done via our
                private NPM repository. Unit test our shared modules with Mocha
                and Chai.
            </p>
            <h3>Senior Interactive Developer, POP</h3>
            <p>
                Seattle, WA | 2015&nbsp;– 2017
                <br />
                Second time working at POP. Previously wrote a large amount of
                ActionScript 3, building applications and animations for various
                clients. This time I focused heavily on JavaScript. Used Node.js
                on almost every project integrating Grunt, Gulp or webpack for
                build tools. Used frameworks/libraries like React, Angular,
                GreenSock, jQuery, ScrollMagic and many others. Created
                animations in both CSS and JavaScript. Led various server
                integrations, API and database development, Docker configuration
                and other backend duties. Developed within Node.js, Apache, .NET
                and AWS environments.
            </p>
            <h3>Senior Web Developer, Mervin Manufacturing</h3>
            <p>
                Seattle, WA | 2012 –&nbsp;2015
                <br />
                Led a team in development efforts and made key decisions in
                e-commerce infrastructure, hosting architecture and build
                systems. Developed new applications for users to find and
                customize products. Developed responsive WordPress templates for
                all brand sites. Researched new technologies like Angular and
                implemented them in production builds. Planned marketing and
                social initiatives. Implemented new management communication and
                analytic tools for team efficiencies. Set up source control
                infrastructure. Evaluated analytics and made informed
                online-business decisions.
            </p>
            <h3>Senior Interface Developer, Blast Radius</h3>
            <p>
                Seattle, WA | 2011 – 2012
                <br />
                Managed a team of developers executing marketing initiatives for
                Starbucks. Brainstormed and planned technical execution on
                Frappuccino, Pumpkin Spice Latte and Starbucks Holiday. Planned
                timelines and feature specifications for technical execution.
                Utilized JIRA for iteration planning. Programmed MVC based Flash
                experiences for Starbucks Holiday and Frappuccino using
                ActionScript 3 and PureMVC.
            </p>
            <h3>Senior Interactive Developer, POP</h3>
            <p>
                Seattle, WA | 2008 – 2011
                <br />
                Built Flash based experiences for corporate clients such as
                Target, Nintendo, Amazon, Xbox and more. Led development
                planning efforts and execution.
            </p>
            <h3>Multimedia Developer, Marx Creative</h3>
            <p>
                Milwaukee, WI | 2006 – 2008
                <br />
                Web development (HTML, CSS, Javascript, Ajax, Flash, XML, PHP
                and MySQL), DVD production, In-store Media Creation
            </p>
            <h3>Freelance Web Development</h3>
            <p>
                2006 – Present
                <br />
                Web-design and Programming (HTML, CSS, Javascript, Flash, XML,
                PHP and MySQL), Custom CMS Application Development
            </p>
            <h3>Multimedia Developer, WIN Media Inc.</h3>
            <p>
                Burlington, WI | 2003 – 2006
                <br />
                Project Management, CD-ROM Development, Web Development (HTML,
                CSS, Javascript, Flash, PHP and MySQL), DVD Production, Live
                Event Video Production, Commercial Productions
            </p>
            <h3>Production Assistant, Milwaukee Public Television</h3>
            <p>
                Milwaukee, WI | 2002 – 2003
                <br />
                Floor Director, Camera, Make-up, TelePrompTer, Switcher,
                Lighting, Audio
            </p>
            <h3>
                Co-Producer, Milwaukee Bucks “Bucks Buddy” Half-time Segment
            </h3>
            <p>
                Milwaukee, WI | 2003
                <br />I Produced, Shot, and Edited a 30 second half-time segment
                for the “Bucks Buddy” program with partner, Brad Manderscheid.
                The segment aired on the WB during a Bucks half-time show.
            </p>
            <h3>Executive Producer, MPTV’s “Letters to Santa”</h3>
            <p>
                Milwaukee, WI | 2002
                <br />I oversaw all aspects of production in the 7 Part
                Children’s Series aired on Milwaukee Public Television.
            </p>

            <h2 className="header-bar">Awards</h2>
            <h3>Target – Best of the Bullseye: Collaboration</h3>
            <p>
                Seattle, WA | 2008
                <br />
                The team at POP on the Target account was awarded a Best of the
                Bullseye award by Target Corporate for collaboration.
            </p>
            <h3>Freddie Award</h3>
            <p>
                Milwaukee, WI | 2007
                <br />
                International Health and Medical Media Awards for Best Web Site
                <br />
                Working at Marx Creative, I helped produce and maintain
                chefmd.com. I set up the databases, created/implemented designs,
                and maintained the site since I started at Marx Creative in
                2006.
            </p>
            <h3>Best Director Award</h3>
            <p>
                Milwaukee, WI | 2003
                <br />
                Milwaukee Public Television Student Operations
                <br />I was awarded best director for a half hour long feature
                titled “Let’s Be Frank”. I was the director, producer,
                cinematographer, and editor for this feature.
            </p>

            <h2 className="header-bar">Education</h2>
            <h3>Milwaukee Area Technical College</h3>
            <p>
                Milwaukee, WI | 2001 – 2005
                <br />
                Associates Degree in Television &amp; Video Production
                <br />
                Associates Degree in Visual Communications
            </p>

            <h2 className="header-bar">Skills</h2>
            <p>
                HTML, CSS, JavaScript, Node.js, React, Vue.js, Angular, webpack,
                Gulp, Grunt, Preprocessors, Babel, PHP, MySQL, NoSQL, Source
                Control (Git &amp; SVN), WordPress, JSON, XML, Social APIs, JS
                Libraries (jQuery, Underscore, GreenSock), Agile Methodology,
                Adobe Creative Cloud, Project Estimation/Planning, Managing
                Development Teams, Video and Photography
            </p>
        </main>
        <Footer />
    </>
);

export default ResumePage;
