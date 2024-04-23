import React, { useState } from "react"
import "../TopPart/TopPart.css"

function TopPart() {
  const storedAnswers = JSON.parse(localStorage.getItem("answers")) || []
  const mirroredAnswers = storedAnswers
    .filter((item) => item !== "")
    .slice(0, 3)
    .reverse()

  const [visibility, setVisibility] = useState(false)

  const showHistory = () => {
    setVisibility((prevVisibility) => !prevVisibility)
  }

  const renderedAnswers = mirroredAnswers.map((item, index) => (
    <span key={index}>{item}</span>
  ))

  function toggleMode() {
    const switchButton = document.getElementById("flexSwitchCheckDefault")
    const sun = document.querySelector(".fa-sun")
    const moon = document.querySelector(".fa-moon")
    const body = document.body
    if (switchButton.checked) {
      moon.style.opacity = 0.6
      sun.style.opacity = 1
      switchButton.checked = false
      body.classList.remove("dark")
    } else {
      moon.style.opacity = 1
      sun.style.opacity = 0.6
      switchButton.checked = true
      body.classList.add("dark")
    }
  }

  return (
    <div id="top-part">
      <div style={{ position: "relative", visibility: "hidden" }}>
        <div className={`history ${visibility ? "visible" : "hidden"}`}>
          {renderedAnswers}
        </div>
      </div>
      <div id="mode">
        <div className="form-check form-switch">
          <input
            disabled
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
          ></label>
          <i className="fa-regular fa-moon" onClick={toggleMode}></i>
          <i className="fa-regular fa-sun" onClick={toggleMode}></i>
        </div>
      </div>
      <div id="history-icon">
        <i className="fa-solid fa-clock-rotate-left" onClick={showHistory}></i>
      </div>
    </div>
  )
}

export default TopPart
