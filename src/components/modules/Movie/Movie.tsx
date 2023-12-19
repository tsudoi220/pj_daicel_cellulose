import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { PlayButton } from "~/components/parts/PlayButton";
import "./Movie.scss";

type MovieProps = ComponentProp;

const Movie = ({
  classNames,
}: MovieProps): JSX.Element | null => {
  return (
    <div className={"movie" + (classNames ? ` ${classNames}` : "")} >
      <figure className="movie_item">
        {/* <video src="/cellulose/movie/concept_movie.mp4" autoPlay muted playsInline loop></video> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/y4J-WBTKgzc?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=y4J-WBTKgzc" title="2023_TV-CM_「マイクロ産業革命」篇" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </figure>
      <div className="movie_body">
        <div className="movie_inner">
          <h1 className="movie_heading">
            <picture>
              <source srcSet="/cellulose/images/movie_heading_sp.svg" media="(max-width: 767px)" />
              <img src="/cellulose/images/movie_heading_pc.svg" alt="ダイセルのセルロース" />
            </picture>
          </h1>
          <PlayButton classNames="movie_button" label="Concept Movie" data-modal-button="open" aria-controls="modal-concept-movie" aria-expanded="false" />
        </div>
      </div>
      <div className="movie_scroll"></div>
    </div>
  );
};

export { Movie };
