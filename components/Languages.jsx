import React from "react";

export function Languages({ languages }) {
  return (
    <>
      {!!languages?.length && (
        <section className="section">
          <h2 className="section-title">Languages</h2>
          <section id="languages">
            {languages.map((item, i) => (
              <React.Fragment key={i}>
                <div className="item">
                  {item.language && (
                    <div className="language">{item.language}</div>
                  )}
                  {item.fluency && (
                    <div className="fluency">
                      <em>{item.fluency}</em>
                    </div>
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