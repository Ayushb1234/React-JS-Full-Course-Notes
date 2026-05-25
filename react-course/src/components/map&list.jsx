import React, { useState } from "react";

function Skill() {

    const [skills, setSkills] = useState([
        "React",
        "Python",
        "Machine Learning",
        "Node.js"
    ]);

    const [name, setName] = useState("");

    function addSkill() {

        if (name.trim() !== "") {

            setSkills([...skills, name]);

            setName("");
        }
    }

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

            <input
                type="text"
                value={name}
                placeholder="Enter Skill"
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={addSkill}>
                ADD
            </button>

        </div>
    );
}

export default Skill;