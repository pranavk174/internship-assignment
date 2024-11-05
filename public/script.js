async function fetchCryptoData() {
    try {
      const response = await fetch('/api/cryptos');
      const data = await response.json();
      const tableBody = document.getElementById('crypto-table-body');
      tableBody.innerHTML = data.map((item,index) => `
         <tr class="flex w-screen justify-evenly rounded-xl bg-gray-500 text-center  items-center text-white text-[1rem] md:text-[1.6rem] ">
        <td class="  w-full ">${index + 1}</td>
        <td class="w-full ">${item.name}</td>
        <td class=" w-full ">${item.last}</td>
        <td class="w-full ">${item.buy}</td>
        <td class="w-full ">${item.sell}</td>
        <td class="w-full ">${item.volume}</td> 
        <td class="w-full ">${item.base_unit}</td>
      </tr> 
      `).join('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const toggleSwitch = document.getElementById('toggle-switch');
  
  toggleSwitch.addEventListener('click', () => {
    toggleSwitch.classList.toggle('bg-blue-500');
    toggleSwitch.classList.toggle('after:translate-x-full');
  });

  window.onload = fetchCryptoData;
