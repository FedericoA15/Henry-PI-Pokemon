export const validation = (property, value) => {
  let error = {};
  if (property === "name" && !value) {
    error.name = "Debes ingresar un nombre";
  } else if (property === "name") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.name = "El nombre solo debe contener letras";
    } else {
      error.name = "";
    }
  }
  if (property === "hp" && (value <= 0 || value > 255)) {
    error.hp = "La vida debe ser mayor a 0 y menor o igual a 255";
  } else if (property === "hp") {
    error.hp = "";
  }
  if (property === "attack" && (value <= 0 || value > 255)) {
    error.attack = "El ataque debe ser mayor a 0 y menor o igual a 255";
  } else if (property === "attack") {
    error.attack = "";
  }
  if (property === "defense" && (value <= 0 || value > 255)) {
    error.defense = "La defensa debe ser mayor a 0 y menor o igual a 255";
  } else if (property === "defense") {
    error.defense = "";
  }
  if (property === "speed" && (value <= 0 || value > 255)) {
    error.speed = "La velocidad debe ser mayor a 0 y menor o igual a 255";
  } else if (property === "speed") {
    error.speed = "";
  }
  if (property === "height" && (value <= 0 || value > 1000)) {
    error.height = "La altura debe ser mayor a 0 y menor o igual a 1000";
  } else if (property === "height") {
    error.height = "";
  }
  if (property === "weight" && (value <= 0 || value > 1000)) {
    error.weight = "El peso debe ser mayor a 0 y menor o igual a 1000";
  } else if (property === "weight") {
    error.weight = "";
  }
  if (property === "img" && !value) {
    error.img = "Debes ingresar una URL de imagen";
  } else if (property === "img") {
    const imgValidation = /^(http|https):\/\/.+/;
    if (!imgValidation.test(value)) {
      error.img = "La URL debe comenzar con http o https";
    } else {
      error.img = "";
    }
  }
  return error;
};
