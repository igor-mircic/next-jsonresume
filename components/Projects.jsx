import React from 'react';

import { format } from '../utils/dateTimeFormat';

export function Projects({ projects }) {
  return (
    <>
      {!!projects?.length && (
        <section className='section'>
          <h2 className='section-title text-xl mt-4 text-gray-500'>Projects</h2>
          <section id='work'>
            {projects.map((item, i) => (
              <React.Fragment key={i}>
                {item.name && (
                  <header className='relative'>
                    <h3
                      className={`name text-xl mt-6 font-semibold border-l-4 pl-4 ${
                        [
                          `border-purple-600`,
                          `border-purple-300`,
                          `border-purple-100`,
                          `border-purple-50`,
                        ][i < 4 ? i : 4]
                      }`}
                    >
                      {item.name}
                    </h3>
                    {item.url && (
                      <div className='icon website text-sm absolute top-0 right-0'>
                        <a href={item.url} className='text-purple-600	'>
                          {item.url}
                        </a>
                      </div>
                    )}
                  </header>
                )}
                <div className='item pl-5'>
                  {item.description && (
                    <div className='summary my-4'>
                      <p className='text-gray-800 text-lg mt-4 whitespace-pre-line text-justify	'>
                        {item.description}
                      </p>
                    </div>
                  )}
                  {!!item.keywords?.length && (
                    <ul className='keywords'>
                      {item.keywords.map((item, i) => (
                        <li
                          className='mr-1 mb-1 text-sm bg-gray-100 p-1.5 rounded border-gray-300 border border-l-0 border-t-0 inline-block'
                          key={i}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </React.Fragment>
            ))}
          </section>
        </section>
      )}
    </>
  );
}
