import { required, confirmed, length, email, regex, min, max } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("min", {
  ...min,
  message: "Per mažai įvesta symbolių"
});

extend("max", {
  ...max,
  message: "Per daug įvesta symbolių"
});


extend("required", {
  ...required,
  message: "Prašome užpildyti laukelį"
});

extend("email", {
  ...email,
  message: "Įveskite teisingą el. pašto adresą"
});

extend("confirmed", {
  ...confirmed,
  message: "neteisingai įvedėte duomenis"
});

extend('regex', {
  ...regex,
  message: 'Įveskite teisingą telefono numerį'
});

extend("length", {
  ...length,
  message: "Pasirinkite 2 reikšmes"
});
