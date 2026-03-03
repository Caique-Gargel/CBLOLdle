import React, { useState } from "react";
import styles from "./AutoCompleteInput.module.css"

const AutoCompleteInput = ({suggestions,inputValue,setInputValue,submit,id}) => {
  

 
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
  const value = e.target.value;
  setInputValue(value);
  
  if (value.length > 0) {
    const filtered = suggestions
      .filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      )
      .sort((a, b) => {
        const aStarts = a.toLowerCase().startsWith(value.toLowerCase());
        const bStarts = b.toLowerCase().startsWith(value.toLowerCase());
        
        // Se um começa e o outro não, quem começa vem primeiro
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        
        // Se ambos começam ou ambos não começam, ordena alfabeticamente
        return a.localeCompare(b);
      });
    
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  } else {
    setShowSuggestions(false);
  }
};

  const handleClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    submit(suggestion)
    
  };
  function loadImg(img){
      try {
        return require(`../../imgPlayers/${img}.png`);
    } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
            throw e;
        }
        return require("../../imgPlayers/unknow.png");
    }
  }

  return (
    <div className={styles.autoinput}>
      <input
        id={id}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Digite para buscar..."
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
      />
      {showSuggestions && (
        <ul>
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleClick(suggestion)}  
                
              >
                <img src={loadImg(suggestion)} alt={suggestion} />
                {suggestion}
              </li>
            ))
          ) : (
            <li style={{ padding: "10px", color: "#999" }}>Nenhuma sugestão encontrada</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteInput;