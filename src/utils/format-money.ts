const formatMoney = (money: any) => {
   return String(money).replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default formatMoney;