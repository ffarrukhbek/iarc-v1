import axios from "axios";
import {getToday} from "../units/today";

export const getDayverData = (vilID) => {
    const config = {
        headers: { Authorization: `Bearer njHRNxCeNFrvcAaKKlWcxcQrgCwiADH7` }
    };
    const dayver = {
        name: "Dayver",
        total: null,
        working: null,
        nostable: null,
        noworking: null
    }
    axios
        .post('http://89.236.195.198:3010/data/last', {}, config)
        .then(({ data: isData }) => {
            if (isData) {
                let filterData = null
                if (vilID != 14) {
                    filterData = isData[0].filter(item => item.region == vilID)
                } else {
                    filterData = isData[0]
                }
                dayver.total = filterData.length
                dayver.noworking = filterData.filter(item => item.data == null).length
                dayver.working = filterData.filter(item => item.data != null).map(item => item.data).filter(item => item.created_at >= getToday()).length
                dayver.nostable = filterData.filter(item => item.data != null).map(item => item.data).filter(item => item.created_at < getToday()).length
            } else {
                return "error"
            }
        })
        .catch(error => {
            console.log(error);
        });
}