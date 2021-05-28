import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import ReadMoreReact from "read-more-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieCard.css";

function MovieCard({ newMovie }) {
    return (
        <div>
            <Card
                className="movieCard"
                style={{
                    width: "18rem",
                    borderRadius: "10px",
                    border: "2px solid red",
                    background: "rgb(194, 4, 4)",
                    height: "45rem",
                }}
            >
                <Card.Img
                    variant="top"
                    src={newMovie.PosterUrl}
                    alt="Movie poster"
                    width="150px"
                />
                <Card.Body>
                    <Card.Title>{newMovie.Title}</Card.Title>
                    <Card.Text>
                        <ReadMoreReact
                            text={newMovie.Description}
                            min={80}
                            ideal={100}
                            max={120}
                            readMoreText="Read more"
                        />
                    </Card.Text>
                </Card.Body>
                {newMovie.Rating === 5 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                ) : newMovie.Rating === 4 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                ) : newMovie.Rating === 3 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                ) : newMovie.Rating === 2 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                        <FaStar />
                    </span>
                ) : newMovie.Rating === 1 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                    </span>
                ) : (
                    newMovie.Rating + " stars "
                )}{" "}
                <Card.Body>
                    <Button variant="warning">Download</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;
