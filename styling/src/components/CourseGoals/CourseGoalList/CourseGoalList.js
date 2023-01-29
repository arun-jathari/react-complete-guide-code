import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styles from "./CourseGoalList.module.css";
const CourseGoalList = (props) => {
  return (
    <div className={`${styles["goal-list"]}`}>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </div>
  );
};
export default CourseGoalList;
