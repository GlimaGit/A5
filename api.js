export async function consultarCep(value) {
    try {
      value = value.replace(/[^0-9]/, "");
      const url = `https://viacep.com.br/ws/${value}/json/`;
      const response = await fetch(url);
      const responseResult = await response.json();
      return responseResult;
    } catch (error) {
      console.log(error);
      alert("CEP inválido");
    }
  }
  
  export async function covidBrasilApi(value) {
    try {
      const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${value}`;
      const response = await fetch(url);
      const responseResult = await response.json();
      return responseResult;
    } catch (error) {
      console.log(error);
      alert("Erro ao acessar a API");
    }
  }