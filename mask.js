const type = {
    cep(value) {
      return value
        .replace(/\D/g, "")
        .replace(/(-\d{3})\d+?$/, "$1")
        .replace(/(\d{5})(\d)/, "$1-$2");
    },
  };
  
  export default type;