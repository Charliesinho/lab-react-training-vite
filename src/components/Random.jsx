function Random ({min, max}) {   
    let result = Math.floor(Math.random() * (max - min) + min)
        return (
        <div class="iteration2">    
           <p>{result}</p>
        </div>
        );
      }
      
      export default Random;