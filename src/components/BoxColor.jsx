function IdCard ({r, g, b}) {   
    r = Math.floor(Math.random() * (255 - 0) + 0)
    g = Math.floor(Math.random() * (255 - 0) + 0)
    b = Math.floor(Math.random() * (255 - 0) + 0)

    const divStyle = {
        background: `rgb(${r}, ${g}, ${b})`,
      };
    return (
    <div>
    <div class="iteration4" style={divStyle}>rgb({r}, {g}, {b})</div>
       
    </div>
    );
  }
  
  export default IdCard;