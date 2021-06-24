
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Skills() {

    return (
        <section id="skills">
            <div className="bg-gray-100 container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                        Compétences &amp; Téchnologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        {/* add description here */}
                    </p>
                </div>
                <Accordion>
                    {skills.map((skill, index) => (
                        <Card>
                            <Card.Header >
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey={index + ''} >
                                    <span className="title-font font-medium text-white bg-blue-400 rounded flex p-4 h-full items-center">
                                        {skill.title}
                                    </span>
                                </Accordion.Toggle>
                            </Card.Header>


                            <Accordion.Collapse eventKey={index + ''}>
                                <Card.Body>
                                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
                                        {
                                            skill.list.map((skill) => (
                                                <div key={skill} className="p-2 sm:w-1/2 w-full">
                                                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                                        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                                        <span className="title-font font-medium text-white">
                                                            {skill}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}