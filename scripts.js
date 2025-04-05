function countUpTime() {
    const startDate = new Date("Jan 11, 2025 19:00:00").getTime();
  
    setInterval(() => {
      const now = new Date().getTime();
      let distance = now - startDate;
  
      if (distance < 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        document.getElementById("miojo").textContent = "00";
        document.getElementById("ratatouille").textContent = "00";
        document.getElementById("coisaBoa").textContent = "00";
        document.getElementById("voo").textContent = "00";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const miojo = Math.floor((distance/(1000 * 60 * 3))) // quantidade de miojos que se pode fazer nesse tempo
      const ratatouille = Math.floor((distance/(1000 * 60 * 111))) //quantidade de vezes que poderiamos assitir ratatoullie
      const coisaBoa = Math.floor((distance/(1000 * 140))) // quantidades de vezes que poderiamos escutar coisa boa
      const voo = Math.floor((distance/(1000 * 60 * 60 * 11.25))) // Numero de voos Rio Orlando
  
      document.getElementById("days").textContent = String(days + " dias ").padStart(2, '0');
      document.getElementById("hours").textContent = String(hours + " horas ").padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes + " minutos ").padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds + " segundos ").padStart(2, '0');
      document.getElementById("miojo").textContent = String("Feito " + miojo + " miojos.");
      document.getElementById("ratatouille").textContent = String("Assitido Ratatouille " + ratatouille + " vezes.");
      document.getElementById("coisaBoa").textContent = String("Escutado "+ coisaBoa + " Coisa Boa do Lagum.");
      document.getElementById("voo").textContent = String("Voado " + voo + " vezes entre Rio e Orlando.");

    }, 1000);
  }
  
  window.onload = countUpTime;