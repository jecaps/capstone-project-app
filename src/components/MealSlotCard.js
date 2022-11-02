import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

export default function MealSlotCard({ recipe, slot, sched }) {
  const { title, image, id } = recipe;
  const { mealSchedule, setMealSchedule, setRecipeDetail } =
    useContext(RecipeContext);
  const navigate = useNavigate();

  function deleteSlotHandler() {
    const newMealSchedule = { ...mealSchedule };
    delete newMealSchedule[sched][slot];
    setMealSchedule(newMealSchedule);
  }

  return (
    <SlotCard
      onClick={() => {
        navigate(`/${id}`);
        setRecipeDetail(recipe);
      }}
    >
      <img src={image} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p>for</p>
        <h2>{slot.toUpperCase()}</h2>
      </div>
      <div className="buttons">
        <EditBtn />
        <DeleteBtn clickHandler={deleteSlotHandler} />
      </div>
    </SlotCard>
  );
}

const SlotCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 16px;
  width: 90%;

  img {
    width: 100%;
    filter: blur(3px);
    border-radius: 16px;
  }

  .info {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #eafffd;
    width: 100%;
    height: 100%;

    h2,
    h3,
    p {
      margin: 0;
      text-align: center;
    }
  }

  .buttons {
    display: flex;
    gap: 10px;
    position: absolute;
    right: 10px;
    top: 10px;

    button {
      all: unset;
    }

    svg {
      fill: white;
      width: 15px;
    }
  }
`;
