import { NavLink } from "react-router-dom";
import FaveBtn from "./FaveBtn";
import styled from "styled-components";
import AddToPlanBtn from "./AddToPlanBtn";

export default function Card({ recipe }) {
  const { id, image, title, servings, readyInMinutes, summary } = recipe;

  // scroll to top when visiting the recipe details page
  function toTop() {
    window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <CardContainer>
      <FaveBtn recipe={recipe} />
      <AddToPlanBtn meal={recipe} />
      <StyledCard>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <CardDetails>
          <div>
            <p>Servings</p>
            <h4>{servings}</h4>
          </div>
          <div>
            <p>Duration</p>
            <h4>{readyInMinutes}min</h4>
          </div>
        </CardDetails>
        {/* .replace() is used to remove html tags from the text*/}
        <Description>{summary.replace(/<\/?[^>]+(>|$)/g, "")}</Description>
        <NavLink onClick={toTop} to={`/${id}`}>
          Go to recipe ➜
        </NavLink>
      </StyledCard>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  position: relative;
`;

const StyledCard = styled.li`
  list-style: none;
  margin: 0.75rem auto;
  width: 90%;
  background-color: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
  }

  h3,
  h4 {
    margin: 0;
    padding: 0.5rem 0;
  }
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-evenly;

  p {
    margin: 0;
  }
`;

const Description = styled.p`
  text-align: justify;
  margin: 0.75rem 0;
  padding: 0 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
