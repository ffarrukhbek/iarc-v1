import axios from "axios";
import {getToday} from "../units/today";

let dayver = {
    name: "Dayver",
    total: null,
    working: null,
    nostable: null,
    noworking: null
}

export const getDayverData = (vilID) => {
    const config = {
        headers: { Authorization: `Bearer njHRNxCeNFrvcAaKKlWcxcQrgCwiADH7` }
    };
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
                dayver.total = 0
                dayver.noworking = 0
                dayver.working = 0
                dayver.nostable = 0
            }
        })
        .catch(error => {
            console.log(error);
        });
    return {dayver}
}