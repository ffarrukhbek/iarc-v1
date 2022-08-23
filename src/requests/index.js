import axios from "axios";

export const getDayverData = () => {
    const config = {
        headers: { Authorization: `Bearer njHRNxCeNFrvcAaKKlWcxcQrgCwiADH7` }
    };
    const dayver = {
        total: null,
        working: null,
        nostable: null,
        noworking: null
    }
    axios
        .post('http://89.236.195.198:3010/data/last', {}, config)
        .then(({ data: isData }) => {
            if (isData) {
                dayver.total = isData[0].length

                const datas = isData[0].filter(item => item.data == null)
                console.log(datas.length)
            } else {
                console.log("no data");
            }
        })
        .catch(error => {
            console.log(error);
        });
}