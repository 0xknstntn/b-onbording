import { useGetGeoposition } from "../../../store/useGeoposition"
import { LinksToPage } from "../Footer/LinksToPage"
import { BuyMinerEN } from "./BuyMinerEN"
import { BuyMinerRU } from "./BuyMinerRU"



export const BuyMiner = () => {
    
    const [geoposition, setGeoposition] = useGetGeoposition()

    return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <BuyMinerRU /> : <BuyMinerEN /> }
            <LinksToPage />
        </>
    )
}