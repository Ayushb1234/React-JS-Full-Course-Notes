import React from "react";

function About(){

    const skills = ["Python","AI","C++","javascript","Machine"];

    return (

        <div>

            {skills.map((skill, index) => {

                if (skill === "Machine Learning") {
                    console.log("AI Skill");
                }

                return (
                    <h2 key={index}>
                        {index + 1}: {skill}
                    </h2>
                );

            })}


        </div>

    );
}

export default About;