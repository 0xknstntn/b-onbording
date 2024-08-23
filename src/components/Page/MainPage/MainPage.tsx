import { useEffect } from "react"
import { GetUser, GetWaitlistUserCheck } from "../../../api/user"
import { useGeoposition } from "../../../store/useGeoposition"
import { useUser, useWaitlistUser } from "../../../store/useUsers"
import { LinksToPage } from "../Footer/LinksToPage"
import { MainPageEN } from "./MainPageEN"
import { MainPageRU } from "./MainPageRU"
import { InitDataUnsafe } from "../../../type/tg_type"



export const MainPage = () => {
    
    const [geoposition, setGeoposition] = useGeoposition()
    const [user, setUser] = useUser()
	const [waitlistExist, setWaitlistUser] = useWaitlistUser()

    async function main(user_id: string, ref?: string) {
		let user = await GetUser(user_id, ref)
		setUser(user)

		let exist = await GetWaitlistUserCheck(user_id)
		setWaitlistUser({exist})
	}

    useEffect(() => {
		Telegram.WebApp.ready();

		const initDataUnsafe: InitDataUnsafe = Telegram.WebApp.initDataUnsafe as InitDataUnsafe;
		//main("765798766")
        main(initDataUnsafe.user?.id.toString()!, initDataUnsafe.start_param?.slice(4))
	}, [])

    return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <MainPageRU /> : <MainPageEN /> }
            <LinksToPage />
        </>
    )
}