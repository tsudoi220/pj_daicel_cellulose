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
        <video src="/cellulose/movie/concept_movie.mp4"></video>
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
