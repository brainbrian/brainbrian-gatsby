import * as React from 'react';

import { Footer, Head, Header } from '../components';

const pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const ProjectsPage = () => (
    <>
        <Head />
        <Header />
        <main style={pageStyles}>
            <ul>
                <li>
                    <a href="https://www.rei.com/events">
                        <img
                            src="./images/projects/rei-events.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>REI Classes/Events and Adventures Team</h4>
                        <p>https://www.rei.com/events</p>
                    </a>
                    <div>
                        <p>
                            I work on the{' '}
                            <a href="https://www.rei.com/events">
                                Classes/Events
                            </a>{' '}
                            and{' '}
                            <a href="https://www.rei.com/adventures">
                                Adventures
                            </a>{' '}
                            team at REI. In my role I am the lead frontend
                            software engineer for the team. We work in a
                            continuous integrated environment with Docker, Java,
                            Jenkins and more. Currently I’m spending most of my
                            time updating our frontend systems to be written in
                            ES6 linting standards with{' '}
                            <a href="https://vuejs.org">Vue.js</a>. I use build
                            tools like{' '}
                            <a href="https://webpack.js.org">webpack</a> and
                            dependency management on the frontend is done via
                            our private NPM repository.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="https://joinmaidez.com">
                        <img
                            src="./images/projects/the-handmaids-tale.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Join Maidez – Hulu’s The Handmaid’s Tale</h4>
                        <p>https://joinmaidez.com</p>
                    </a>
                    <div>
                        <p>
                            Hulu’s{' '}
                            <a href="https://www.hulu.com/the-handmaids-tale">
                                The Handmaid’s Tale
                            </a>{' '}
                            is now airing. I built a single page application on
                            AWS using Lambda, S3, NodeJS, Webpack, React, Redux
                            and Babel to support their social campaign. This
                            application takes in a users code, grants them
                            access to a secret group and allows them to invite
                            up to 5 friends.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="https://www.starbucks.com/promo/starbucks-for-outlook">
                        <img
                            src="./images/projects/starbucks-outlook-addin.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Starbucks Outlook Add-in</h4>
                        <p>
                            https://www.starbucks.com/promo/starbucks-for-outlook
                        </p>
                    </a>
                    <div>
                        <p>
                            The Starbucks Outlook Add-In for Microsoft Outlook
                            is an application that allows users to send
                            Starbucks Gift Cards through their email with ease.
                            I led JavaScript development on this project. We
                            revamped an existing AngularJS code base, updated
                            features and provide support.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://starfoxzero.nintendo.com">
                        <img
                            src="./images/projects/nintendo-starfox-zero.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Nintendo: Star Fox Zero</h4>
                        <p>http://starfoxzero.nintendo.com</p>
                    </a>
                    <div>
                        <p>
                            Nintendo did a reboot of Star Fox for the Wii U.
                            With the Star Fox Zero website we tried to convey
                            the feel of Star Fox world online. Bringing in rich
                            character art and dynamic animations we brought this
                            reboot to life. Dynamic galaxy animations behind the
                            menu overlay using HTML5 canvas, complex scrolling
                            animations within the Lylat System and in depth
                            character and vehicle interactions all bring this
                            site to life. I was the lead interactive developer
                            on this project at{' '}
                            <a href="http://www.wearepop.com/" target="_blank">
                                POP
                            </a>
                            .
                        </p>
                    </div>
                </li>
                <li>
                    <a href="https://support.ubi.com">
                        <img
                            src="./images/projects/ubisoft-support.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Ubisoft: Customer Support Website</h4>
                        <p>https://support.ubi.com</p>
                    </a>
                    <div>
                        <p>
                            Ubisoft came to POP for a overhaul on their current
                            customer support website. This project was a little
                            different than normal. I lead the development team
                            at{' '}
                            <a href="http://www.wearepop.com/" target="_blank">
                                POP
                            </a>{' '}
                            in a co-development of the site with Ubisoft’s
                            backend team. We provided static site template files
                            with static JSON endpoints that Ubisoft then
                            integrated into their support backend system. This
                            was a great partnership between POP and Ubisoft, and
                            the result is one fantastic, responsive customer
                            support website.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://zelda.com/tri-force-heroes/">
                        <img
                            src="./images/projects/nintendo-zelda-tri-force-heros.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Nintedo: Zelda Tri Force Heroes</h4>
                        <p>http://zelda.com/tri-force-heroes/</p>
                    </a>
                    <div>
                        <p>
                            Zelda Tri Force Heroes is a game for the Nintendo
                            3DS. It has a unique multiplayer component we tried
                            to bring to life throughout this single page,
                            scrolling site. The user is taken through page
                            content by scrolling vertically or interacting with
                            the totem navigation when on desktop. The site comes
                            to life with interactive animations all done with
                            CSS and JavaScript. I was the lead interactive
                            developer on this project at{' '}
                            <a href="http://www.wearepop.com/" target="_blank">
                                POP
                            </a>
                            . We used Grunt as our front-end static build system
                            along with SCSS and CommonJS modules.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.lib-tech.com/snowboarding/snowboard-finder/">
                        <img
                            src="./images/projects/lib-tech-snowboard-finder.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Lib Tech: Snowboard Finder</h4>
                        <p>
                            http://www.lib-tech.com/snowboarding/snowboard-finder/
                        </p>
                    </a>
                    <div>
                        <p>
                            While at{' '}
                            <a href="http://www.mervinmfg.com/" target="_blank">
                                Mervin Mfg.
                            </a>{' '}
                            we were tasked with building a web application that
                            would take in user data and suggest snowboards based
                            on their body types and skill. Custom fields were
                            added to track specific board ratings based on
                            terrain and skill level. I built this application
                            with AngularJS and custom JSON output through
                            WordPress page templates.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.lib-tech.com">
                        <img
                            src="./images/projects/lib-tech-website.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Lib Technologies: Responsive E-commerce Website</h4>
                        <p>http://www.lib-tech.com</p>
                    </a>
                    <div>
                        <p>
                            The Lib Tech brand and e-commerce website is an
                            ever-evolving project I have lead development on
                            since 2012. Over that time we’ve reworked the entire
                            shopping experience to use Shopatron’s latest
                            JavaScript APIs and have one experience, both brand
                            and e-commerce within the same website. We’ve rolled
                            out responsive templates, product finding and
                            building applications, micro-site marketing
                            experiences, as well as focusing on SEO and browser
                            compatibility. I planned and built our build system
                            using Grunt.js, SASS and our own JavaScript design
                            patterns.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.lib-tech.com/snowboarding/jamie-lynn-20-year-anniversary/">
                        <img
                            src="./images/projects/lib-tech-jamie-lynn-20-year.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>
                            Lib Technologies: Jamie Lynn 20 Year Anniversary
                        </h4>
                        <p>
                            http://www.lib-tech.com/snowboarding/jamie-lynn-20-year-anniversary/
                        </p>
                    </a>
                    <div>
                        <p>
                            The 2014/2015 winter season was the 20 year
                            anniversary celebration of professional snowboarder
                            Jamie Lynn’s pro line with Lib Technologies. In
                            honor of his 20 years of pro-models with Lib Tech we
                            planned a marketing campaign around his career
                            history and products. We built a responsive,
                            scrolling website to showcase photos, products,
                            notable quotes from industry pros and a featured 20
                            year video. The website uses complex scrolling
                            techniques to preset a pleasing, focused look into
                            Jamie’s career with Lib Technologies.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.gnu.com">
                        <img
                            src="./images/projects/GNU-Website-2014.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>GNU Snowboards: Responsive E-commerce Website</h4>
                        <p>http://www.gnu.com</p>
                    </a>
                    <div>
                        <p>
                            The Mervin Mfg. web team&nbsp;rebuilt the GNU
                            Snowboards website for the 2014-2015 season. The
                            goal was not only to update the website to GNU’s
                            latest visuals, but also to introduce a new
                            responsive, easy-to-use website. We introduced new
                            features like product filtering and social mash-ups
                            to quickly provide users access to content they are
                            looking for. We improved bounce rates, time on the
                            site and transactions on all devices.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.lib-tech.com/diy">
                        <img
                            src="./images/projects/Lib-Tech-DIY-Snowboard-Builder.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Lib Technologies: DIY Snowboard Builder</h4>
                        <p>http://www.lib-tech.com/diy</p>
                    </a>
                    <div>
                        <p>
                            During the 2013-2014 snowboard season the Mervin
                            Mfg. web team was tasked with building an online
                            do-it-yourself snowboard builder. We are fortunate
                            at Lib Tech to build our snowboards in the USA at
                            our own factory in Sequim, WA. This allows us to do
                            experimental programs like the diy builder and scale
                            them based on their success. The web application
                            utilizes responsive web-design and Shopatron’s
                            Add-To-Cart API to allow users to design and order
                            their own custom one-of-a-kind snowboard delivered
                            right to their doorstep from any device. Users can
                            build their own snowboard while heading up a lift
                            for some pow turns!
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.mervin.com">
                        <img
                            src="./images/projects/mervin.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>
                            Mervin Manufacturing: Responsive Website Rebuild
                        </h4>
                        <p>http://www.mervin.com</p>
                    </a>
                    <div>
                        <p>
                            The Mervin Manufacturing website was a much needed
                            rebuild. I built the new WordPress template with the
                            assistance of another designer at Mervin. All of the
                            programming was completed by myself. This is the
                            first responsive site I have built for any of the
                            Mervin brands. It’s simple and easy to use. We will
                            be adding more features as time goes on.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.mashable.com/2011/08/18/starbucks-pumpkin-spice-latte-facebook/">
                        <img
                            src="./images/projects/starbucks-pumpkin-spice-latte.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>
                            Starbucks: Pumpkin Spice Latte Facebook Campaign
                        </h4>
                        <p>
                            http://www.mashable.com/2011/08/18/starbucks-pumpkin-spice-latte-facebook/
                        </p>
                    </a>
                    <div>
                        <p>
                            The Starbucks team at Blast Radius was tasked with
                            creating a campaign to reward a city with the most
                            excitement around the fall launch of pumpkin spice
                            latte. I was a lead in the conception and
                            development of the Facebook application that allowed
                            users to get PSL a week early in their city. The
                            city earning the most points would win. Facebook
                            users were given various tasks to complete in order
                            to receive points.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.frappuccino.com">
                        <img
                            src="./images/projects/frappuccino.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Starbucks: Frappuccino Brand Website</h4>
                        <p>http://www.frappuccino.com</p>
                    </a>
                    <div>
                        <p>
                            I helped concept, plan and build all things digital
                            surrounding the Frappuccino brand in 2011. On
                            frappuccino.com users could build drinks and an
                            accompanying poster to promote their drink. They
                            were then entered into a contest and awarded prizes
                            for the most liked drink. I also worked on various
                            paid media campaigns and the mobile website. I’m
                            currently working on the 2012 version of the
                            Frappuccino digital brand.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://mariosportsmix.nintendo.com">
                        <img
                            src="./images/projects/mario-sports-mix.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Nintendo: Mario Sports Mix</h4>
                        <p>http://mariosportsmix.nintendo.com</p>
                    </a>
                    <div>
                        <p>
                            While at POP, I was the lead interactive developer
                            on the Mario Sports Mix site. The site promoted the
                            upcoming game for the Nintendo Wii. We used 3D
                            animation and a lot of motion to bring the site to
                            life.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.target.com/history">
                        <img
                            src="./images/projects/target-timeline.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Target: Through The Years (Timeline)</h4>
                        <p>http://www.target.com/history</p>
                    </a>
                    <div>
                        <p>
                            Target came to POP with an ask to turn their history
                            page into a more interactive and engaging online
                            experience. The history page used to be one long
                            scrolling page of information. Target was very happy
                            with outcome of the new interactive version where
                            users can interact with individual points in
                            Target’s history and filter by different categories.
                            I was the Flash developer and animator on this
                            project. I also played an active roll in
                            brainstorming and planning the experience.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://brainbrian.com/projects/pokemon-platinum-installer.zip">
                        <img
                            src="./images/projects/pokemon.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>
                            Pokémon Platinum: Rotom Viewer Desktop Application
                        </h4>
                        <p>
                            http://brainbrian.com/projects/pokemon-platinum-installer.zip
                        </p>
                    </a>
                    <div>
                        <p>
                            Pokémon tasked POP with creating a fun gift for
                            Pokémon fans to unlock when they purchased a game
                            and found the code inside the packaging. Fans could
                            then go to&nbsp;
                            <a href="http://www.pokemonplatinum.com/#/rotom/">
                                pokemonplatinum.com/#/rotom/
                            </a>
                            &nbsp;with their code and download the Adobe AIR
                            Desktop application linked to above. I was the lead
                            developer on the project.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.animal-crossing.com">
                        <img
                            src="./images/projects/nintendo-animal-crossing-wii.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Nintendo: Animal Crossing Wii</h4>
                        <p>http://www.animal-crossing.com</p>
                    </a>
                    <div>
                        <p>
                            I’ve assisted in many nintendo projects while
                            working at POP, but Animal Crossing for the Wii was
                            the first project I played a lead roll in. All of
                            the Flash components were developed by myself.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.target.com/wherewework">
                        <img
                            src="./images/projects/target-where-we-work.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>Target: Where We Work</h4>
                        <p>http://www.target.com/wherewework</p>
                    </a>
                    <div>
                        <p>
                            This was my first project at POP and it was quite
                            successful. The interactive tour of Target’s
                            different workplaces is filled with rich photos,
                            text and video. I was the lead developer and
                            animator on the project.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://tv.msn.com/life/">
                        <img
                            src="./images/projects/msn-tv-discovery-life.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>MSN TV: Discovery Life</h4>
                        <p>http://tv.msn.com/life/</p>
                    </a>
                    <div>
                        <p>
                            I played the lead programming roll in heading up
                            POP’s first project with MSN TV. MSN came to us with
                            a clear vision on design for Discovery Life and I
                            comfortably executed on programming and animation.
                            MSN TV was thrilled with the delivery of the final
                            product and POP has since completed more projects
                            for them.
                        </p>
                    </div>
                </li>
                <li>
                    <a href="http://www.chefmd.com">
                        <img
                            src="./images/projects/chefmd.jpg"
                            width="920"
                            height="300"
                            alt=""
                        />
                        <h4>ChefMD: ChefMD Online</h4>
                        <p>http://www.chefmd.com</p>
                    </a>
                    <div>
                        <p>
                            ChefMD.com is a online site supporting the ChefMD
                            television segment appearing on Health Corner airing
                            on Lifetime. I brainstormed, planned and lead
                            development on the site. We built a custom CMS with
                            PHP and MySQL to support recipes, shopping lists,
                            videos, member registration, news and email lists.
                            The site also includes helpful tools like health
                            calculators and searching recipes by health
                            conditions.
                        </p>
                    </div>
                </li>
            </ul>
        </main>
        <Footer />
    </>
);

export default ProjectsPage;
