
class NumberUtility{
    static formatNumberWithCommas(n: number){
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
}

export default NumberUtility;