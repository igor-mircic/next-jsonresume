import React from 'react';

import { format } from '../utils/dateTimeFormat';

export function Experience({ work }) {
  return (
    <>
      {!!work?.length && (
        <section className='section'>
          <h2 className='section-title text-xl mt-4 text-gray-500'>
            Experience
          </h2>
          <section id='work'>
            {work.map((item, i) => (
              <React.Fragment key={i}>
                {item.company && (
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
                      {item.company}
                    </h3>
                    <div className='icon date text-gray-600 text-sm absolute top-0 right-0'>
                      {item.startDate && (
                        <span className='startDate'>
                          {format(item.startDate)}{' '}
                        </span>
                      )}
                      {item.endDate ? (
                        <span className='endDate'>
                          - {format(item.endDate)}
                        </span>
                      ) : (
                        <span className='endDate'>- Present</span>
                      )}
                    </div>
                  </header>
                )}
                <div className='item pl-5'>
                  {item.position && (
                    <div className='position text-lg text-gray-600 font-normal'>
                      {item.position}
                    </div>
                  )}

                  {item.summary && (
                    <div className='summary my-4'>
                      <p className='text-gray-800 text-lg mt-4 whitespace-pre-line text-justify	'>
                        {item.summary}
                      </p>
                    </div>
                  )}
                  {!!item.highlights?.length && (
                    <ul className='highlights font-mono text-sm text-gray-600'>
                      {item.highlights.map((item, i) => (
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
