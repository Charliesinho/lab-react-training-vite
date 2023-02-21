function Greetings ({lang, children}) {   
if (lang === "de") {
    return (
    <div class="iteration2">    
        <h3>Hallo {children}</h3>
    </div>
    );
}
if (lang === "fr") {
    return (
    <div class="iteration2">    
        <h3>Bonjour {children}</h3>
    </div>
    );
}
  }
  
  export default Greetings;