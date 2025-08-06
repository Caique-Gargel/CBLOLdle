import React, { useState,useRef } from "react";
import styles from "./AutoCompleteRoles.module.css"

const AutoCompleteRoles = ({suggestions,inputValue,setInputValue,submit,id}) => {
  

 
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const ulRef = useRef(null);
  const handleChange = (e) => {
   
    const value = e.target.value;
    setInputValue(value);
    
    if (value.length > 0) {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    submit(suggestion,id)
    
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
        onBlur={e => {
          // Verifica se o novo foco está dentro da ul de sugestões
          if (ulRef.current && ulRef.current.contains(e.relatedTarget)) {
            return;
            // Não faz nada, pois o foco foi para dentro da ul
            
          }
          setShowSuggestions(false);
        }}
        onFocus={(e) => {
        const value = e.target.value;
        if(value.length > 0)  
          setShowSuggestions(true);
        }} 
      />
      {showSuggestions && (
        <ul ref={ulRef}>
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                tabIndex={0}
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

export default AutoCompleteRoles;