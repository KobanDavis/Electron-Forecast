import React, { useContext, createContext, FC, useState } from 'react'

type UserLocationContext = [Position, React.Dispatch<React.SetStateAction<Position>>]

const UserLocationProvider: FC = (props) => {
	const [userLocation, setUserLocation] = useState<Position>(null)
	return <UserLocation.Provider value={[userLocation, setUserLocation]} {...props} />
}

const UserLocation = createContext<UserLocationContext>(null)

const useUserLocation = (): UserLocationContext => useContext<UserLocationContext>(UserLocation)

export { UserLocationProvider, useUserLocation }
