function IdCard ({firstName, lastName, gender, height, birth, picture}) {   

    return (
    <div class="iteration1">
        <div class="iteration1in">
            <h4>First name: {firstName}</h4>
            <h4>Last name: {lastName}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Height: {height}</h4>
            <h4>Birth: {JSON.stringify(birth)}</h4>
        </div>
        <img src={picture} alt=""/>
    </div>
    );
  }
  
  export default IdCard;