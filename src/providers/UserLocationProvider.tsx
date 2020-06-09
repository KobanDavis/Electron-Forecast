import React, { useContext, createContext, FC, useState } from 'react'

type UserLocationContext = [Position, React.Dispatch<React.SetStateAction<Position>>]

const getUserPosition = (): Promise<Position> => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	})
}

const init = async (): Promise<void> => {
	const position = await getUserPosition()
	localStorage.setItem('userLocation', JSON.stringify(position))
}

const UserLocationProvider: FC = (props) => {
	const [userLocation, setUserLocation] = useState<Position>(null)
	return <UserLocation.Provider value={[userLocation, setUserLocation]} {...props} />
}

const UserLocation = createContext<UserLocationContext>(null)

const useUserLocation = (): UserLocationContext => useContext<UserLocationContext>(UserLocation)

export { UserLocationProvider, useUserLocation }
