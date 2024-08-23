import { useGeoposition } from "../../../store/useGeoposition"
import { LinksToPage } from "../Footer/LinksToPage"
import { MainPageEN } from "./MainPageEN"
import { MainPageRU } from "./MainPageRU"



export const MainPage = () => {
    
    const [geoposition, setGeoposition] = useGeoposition()

    return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <MainPageRU /> : <MainPageEN /> }
            <LinksToPage />
        </>
    )
}