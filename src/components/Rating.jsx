function Rating ({children}) {   
 let rate = Math.floor(children)
 let newRate ="";
 let emptyRate = "";
for (let i = 0; i < rate; i++) {
    newRate += "★"
}
for (let i = 0; i < 5 - rate; i++) {
    emptyRate += "☆"
}
    return (
    <div class="iteration2">
        <p>{newRate}{emptyRate}</p>
    </div>
    );
  }
  
  export default Rating;