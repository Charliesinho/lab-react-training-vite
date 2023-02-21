function DriverCard ({name, rating, img, car}) {   

    return (
    <div class="iteration1">
    <div class="iteration1in">
        <h3>{name}</h3>
        <h3>{rating}</h3>
        <h3>{car.model}</h3>
        <h3>{car.licensePlate}</h3>
        </div>
    <img class="img" src={img} alt=""/>
    </div>
    );
  }
  
  export default DriverCard;