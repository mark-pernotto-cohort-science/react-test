import "./App.css";

function App() {
  let data = [];

  const getPopulationData = () => {
    fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
    )
      .then((response) => response.json())
      .then((result) => {
        data = result.data;
        updateDOM();
      });
  };

  const updateDOM = () => {
    const dataContainer = document.getElementById(
      "data-container",
    );
    if (data.length > 0) {
      dataContainer.innerHTML = `
        <div>
          ${data.map((item) => {
            return item.Population;
          })}
        </div>
      `;
    }
  };

  return (
    <div className="App">
      <div id="data-container"></div>
      <button onClick={getPopulationData}>
        Get Population Data
      </button>
    </div>
  );
}

export default App;
