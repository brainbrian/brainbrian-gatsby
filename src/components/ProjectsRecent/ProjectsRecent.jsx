import * as React from 'react';

import { Project } from '../';
import { useProjects } from '../../hooks';

import * as Styles from './ProjectsRecent.module.scss';

export const ProjectsRecent = () => {
    const projects = useProjects();
    const projectNodes = projects.map((project) => (
        <Project {...project} key={project.id} />
    ));

    return (
        <div className="bg-page">
            <section className={Styles.ProjectsRecent}>
                <a className="header-bar" href="./projects">
                    <h2 className="header-bar__text">Recent Projects</h2>
                </a>
                {projectNodes}
            </section>
        </div>
    );
};
