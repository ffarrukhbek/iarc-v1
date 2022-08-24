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
                dayver.noworking = isData[0].filter(item => item.data == null).length
                const sendedData = isData[0].filter(item => item.data != null).map(item => item.data)
                console.log(sendedData.filter(item => item.created_at > "2022-08-02 13:07:28"))
            } else {
                console.log("no data");
            }
        })
        .catch(error => {
            console.log(error);
        });
}