import React from "react";

import Head from "next/head";

import { Header } from "./../components/Header";
import { Location } from "./../components/Location";
import { Contact } from "./../components/Contact";
import { Profiles } from "./../components/Profiles";
import { Summary } from "./../components/Summary";
import { Experience } from "./../components/Experience";
import { Education } from "./../components/Education";
import { Volunteer } from "./../components/Volunteer";
import { Awards } from "./../components/Awards";
import { Publications } from "./../components/Publications";
import { Skills } from "./../components/Skills";
import { Languages } from "./../components/Languages";
import { Interests } from "./../components/Interests";
import { References } from "./../components/References";

import data from "../data/resume.json"

export default function Home() {
  if (!Object.keys(data).length) {
    return null;
  }

  const {
    basics: {
      name,
      label,
      image,
      summary,
      website,
      email,
      phone,
      location,
      profiles,
    },
    education,
    references,
    skills,
    languages,
    awards,
    publications,
    work,
    volunteer,
    interests,
  } = data;

  return (
    <>
      <Head>
        <title>
          {name}, {label}
        </title>
      </Head>

      <section id="resume" className="max-w-screen-md	container mx-auto my-8">
        <Header image={image} name={name} label={label} />

        <section id="basics" className="mt-8 text-sm">
          <Location location={location} />

          <Contact website={website} email={email} phone={phone} />

          <Profiles profiles={profiles} />
        </section>

        <Summary summary={summary} />

        <Experience work={work} />

        <Education education={education} />

        <Volunteer volunteer={volunteer} />

        <Awards awards={awards} />

        <Publications publications={publications} />

        <Skills skills={skills} />

        <Languages languages={languages} />

        <Interests interests={interests} />

        <References references={references} />
      </section>
    </>
  );
}