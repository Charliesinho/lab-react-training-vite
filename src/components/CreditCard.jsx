function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {   

    const divStyle = {
        background: `${bgColor}`,
        color: `${color}`,
      };
let numberShort = "";
for (let i = number.length - 1; i >= number.length - 4; i--) {
numberShort = `${number[i]}${numberShort}`
}
    return (
    <div class="iteration5">
        <div style={divStyle} class="iteration5in">
            <h4 class="textRight">{type}</h4>
            <h4>•••• •••• •••• {numberShort}</h4>
            <span class="textLeft">{expirationMonth}</span>
            <span class="textLeft">/{expirationYear}</span>
            <span class="textRight">{bank}</span>
            <h4>{owner}</h4>
        </div>
    </div>
    );
  }
  
  export default CreditCard;