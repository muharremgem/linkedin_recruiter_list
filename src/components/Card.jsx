import { Button } from "react-bootstrap";

const Card = ({ data }) => {
  return (
    <div className="container" style={{ backgroundColor: "greenyellow" }}>
      {data.map((item) => {
        const {
          FirstName,
          LastName,
          Country,
          Company,
          Position,
          Years,
          Linkedin,
        } = item;
        return (
          <div className="content" key={LastName}>
            <h2>
              First Name: {FirstName} {LastName}
            </h2>

            <h3>Country : {Country}</h3>
            <h2>Company : {Company}</h2>
            <h2>Positon : {Position}</h2>
            <h2>Years : {Years}</h2>
            <Button variant="outline-primary">
              <a
                href={Linkedin}
                target="_blank"
                style={{ textDecoration: "none", textColor: "white" }}
              >
                Linkedin Connect 🔗{" "}
              </a>
            </Button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
